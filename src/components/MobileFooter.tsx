import React from 'react';

const MobileFooter = () => {
  // Hardcoded values as environment variables are not available
  const gmapsUrl = "https://maps.app.goo.gl/9TqJAazS222w6H9v5";
  const address = "9280 Goreway Dr, Unit C107, Brampton, ON L6T 0C4";
  const phoneNumberHref = "tel:+13653780009";
  const phoneNumberDisplay = "+1 (365) 378-0009"; // Slightly more readable display
  const cloverOrderUrl = "https://www.clover.com/online-ordering/mvz-kitchen-brampton";

  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full bg-neutral-100 p-3 shadow-[0_-2px_5px_rgba(0,0,0,0.1)] md:hidden">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <a
          href={gmapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 w-full rounded-md bg-neutral-200 py-2 px-4 text-center text-sm font-medium text-neutral-800 hover:bg-neutral-300"
        >
          {address}
        </a>
        <a
          href={phoneNumberHref}
          className="mb-2 w-full rounded-md bg-neutral-200 py-2 px-4 text-center font-medium text-neutral-800 hover:bg-neutral-300"
        >
          Call Us ({phoneNumberDisplay})
        </a>
        <a
          href={cloverOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-md bg-orange-500 py-2 px-4 text-center font-bold text-white hover:bg-orange-600"
        >
          Order Pickup Online
        </a>
      </div>
    </footer>
  );
};

export default MobileFooter;
