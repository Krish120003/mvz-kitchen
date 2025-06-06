import type { NextRequest } from "next/server";
import { NextResponse, after } from "next/server";

// Bot user agent patterns to detect
const BOT_PATTERNS = {
  GOOGLEBOT: /googlebot/i,
  GOOGLE_INSPECTION: /google-inspectiontool/i,
  BINGBOT: /bingbot/i,
  GPTBOT: /gptbot/i,
  CHATGPT: /chatgpt-user/i,
  CLAUDE: /claude-web/i,
  FACEBOOKBOT: /facebookexternalhit/i,
  TWITTERBOT: /twitterbot/i,
  LINKEDINBOT: /linkedinbot/i,
  SLACKBOT: /slackbot/i,
  TELEGRAMBOT: /telegrambot/i,
  WHATSAPPBOT: /whatsapp/i,
  APPLEBOT: /applebot/i,
  AMAZONBOT: /amazonbot/i,
  YANDEXBOT: /yandexbot/i,
  BAIDUBOT: /baiduspider/i,
  DUCKDUCKBOT: /duckduckbot/i,
} as const;

type BotName = keyof typeof BOT_PATTERNS;

function detectBot(userAgent: string): BotName | null {
  for (const [botName, pattern] of Object.entries(BOT_PATTERNS)) {
    if (pattern.test(userAgent)) {
      return botName as BotName;
    }
  }
  return null;
}

async function sendBotAnalytics(
  botName: BotName,
  request: NextRequest,
): Promise<void> {
  try {
    const posthogHost = process.env.POSTHOG_HOST;
    const posthogApiKey = process.env.POSTHOG_API_KEY;

    if (!posthogHost || !posthogApiKey) {
      console.warn("PostHog environment variables not configured");
      return;
    }

    const url = new URL(request.url);
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const eventData = {
      api_key: posthogApiKey,
      event: "bot_page_fetch",
      properties: {
        distinct_id: `bot:${clientIp}`,
        path: url.pathname + url.search,
        hostname: url.hostname,
        user_agent: request.headers.get("user-agent") ?? "",
        bot_name: botName.toLowerCase(),
        referrer: request.headers.get("referer") ?? "",
        timestamp: new Date().toISOString(),
      },
      timestamp: new Date().toISOString(),
    };

    // Use fetch to send data to PostHog (compatible with Edge Runtime)
    const response = await fetch(`${posthogHost}/capture/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      console.error(
        `PostHog API error: ${response.status} ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error("Error in bot analytics:", error);
  }
}

export function middleware(request: NextRequest) {
  try {
    const userAgent = request.headers.get("user-agent") ?? "";

    // Skip empty user agents
    if (!userAgent) {
      return NextResponse.next();
    }

    const botName = detectBot(userAgent);

    if (botName) {
      console.log("Bot detected:", botName);
      // Send analytics asynchronously without blocking the response
      after(async () => {
        await sendBotAnalytics(botName, request);
      });
    }

    // Always continue with the request
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    // Always continue with the request even if there's an error
    return NextResponse.next();
  }
}

export const config = {
  // Matcher to run on all paths except API routes, _next static files, and favicon
  // Adjust this if you want to skip certain assets or routes
  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico (favicon file)
  //    * - public folder files (direct static file access)
  //    */
  //   // "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  // ],
  matcher: "/",
};
