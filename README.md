# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Bot Tracking Middleware

This project includes an Edge Middleware (`middleware.ts`) that automatically tracks bot visits using PostHog analytics. The middleware:

- Detects known crawlers (Googlebot, Bingbot, GPTBot, etc.) via User-Agent patterns
- Sends non-blocking analytics events to PostHog without delaying responses
- Tracks bot activity with event `bot_page_fetch` including path, hostname, user agent, and bot name
- Uses `distinct_id: "bot:{ip}"` for rough deduplication

### Required Environment Variables

Set these in your Vercel deployment:

```bash
# PostHog configuration for server-side bot tracking
POSTHOG_HOST=https://app.posthog.com
POSTHOG_API_KEY=your_posthog_private_api_key

# PostHog configuration for client-side analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_public_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

After deployment, you'll see `bot_page_fetch` events in PostHog. Create dashboards or alerts using the `bot_name` property to monitor crawl activity from Google, Bing, ChatGPT, and other bots.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
