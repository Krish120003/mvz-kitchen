import React from "react";
import { useFeatureFlagVariantKey } from "posthog-js/react";
import posthog from "posthog-js"; // For capturing events later

const MobileFooter = () => {
  // Hardcoded values as environment variables are not available
  const appleMapsUrl =
    "https://maps.apple.com/place?address=107-9280%20Goreway%20Dr,%20Brampton%20ON%20L6P%200M7,%20Canada&coordinate=43.758433,-79.692053&name=MV%27z%20Kitchen&place-id=I6A66AB063F9B3868&map=explore";
  const address = "9280 Goreway Dr, Unit C107, Brampton, ON L6T 0C4";
  const phoneNumberHref = "tel:+13653780009";
  const phoneNumberDisplay = "+1 (365) 378-0009"; // Slightly more readable display
  const cloverOrderUrl =
    "https://www.clover.com/online-ordering/mvz-kitchen-brampton";

  const variant = useFeatureFlagVariantKey("mobile-floating-button-conversion");

  let buttonText = "Order Pickup Online"; // Default (control)
  if (variant === "view-menu") {
    buttonText = "View Menu";
  } else if (variant === "control") {
    // Explicitly set for 'control', or rely on default
    buttonText = "Order Pickup Online";
  }
  // If variant is null or false (flag not active or error), it will use the default.

  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full bg-neutral-100 p-3 shadow-[0_-2px_5px_rgba(0,0,0,0.1)] md:hidden">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <a
          href={appleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 w-full rounded-md bg-neutral-200 px-4 py-2 text-center text-sm font-medium text-neutral-800 hover:bg-neutral-300"
        >
          {address}
        </a>
        <a
          href={phoneNumberHref}
          className="mb-2 w-full rounded-md bg-neutral-200 px-4 py-2 text-center font-medium text-neutral-800 hover:bg-neutral-300"
        >
          Call Us ({phoneNumberDisplay})
        </a>
        <a
          href="https://reserve.mvzkitchen.ca"
          className="mb-2 w-full rounded-md bg-neutral-200 px-4 py-2 text-center font-medium text-neutral-800 hover:bg-neutral-300"
        >
          Join Wait Queue
        </a>
        <a
          href={cloverOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-md bg-orange-500 px-4 py-2 text-center font-bold text-white hover:bg-orange-600"
          onClick={() => {
            // Determine the actual text being displayed at the moment of click,
            // which is already available in the `buttonText` variable.
            // The `variant` variable should also be available from the hook.
            // The `cloverOrderUrl` constant holds the link URL.

            // Ensure variant has a fallback for safety, though the hook usually provides 'control' or false.
            const currentVariant = variant ?? "control"; // Or some other sensible default if variant can be null/undefined

            posthog.capture("mobile_footer_button_click", {
              button_variant: currentVariant,
              button_text: buttonText, // This is the text currently displayed
              link_url: cloverOrderUrl,
            });

            // Optional: If navigation needs to be manually handled after PostHog capture
            // for SPA-like behavior or if target="_blank" is problematic with analytics,
            // you could do:
            // window.open(cloverOrderUrl, '_blank');
            // return false; // if it's a link that shouldn't also navigate via href
            // However, for a simple <a> tag with target="_blank", letting the default action proceed after capturing is usually fine.
          }}
        >
          {buttonText} {/* Use the dynamic button text here */}
        </a>
      </div>
    </footer>
  );
};

export default MobileFooter;
