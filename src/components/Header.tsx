import { Popover } from "@headlessui/react";
import "./Header.css";

function iconMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
function iconMenuClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
function iconProduct() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  );
}
function iconHelpAndContact() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}
function iconMore() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
function iconSearch() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const menuPositionData = [
  {
    name: "Products",
    description: "Browse by category.",
    href: "/products",
    icon: iconProduct,
  },
  {
    name: "Help & Contact",
    description: "How can we help you?",
    href: "/contact",
    icon: iconHelpAndContact,
  },
  {
    name: "More",
    description: "Go to our full menu",
    href: "/contact",
    icon: iconMore,
  },
  {
    name: "Search",
    description: "What are you looking for?",
    href: "/search",
    icon: iconSearch,
  },
];

interface itemProps {
  name: string;
  href: string;
  description: string;
  icon: any;
}

function menuPosition(item: itemProps, index: number) {
  return (
    <a key={index} href={item.href}>
      <div className="buttonMenu">
        <div className="buttonMenuIcon">
          <item.icon aria-hidden="true" />
        </div>
        <div className="grid my-auto">
          <span className="text-sm font-bold uppercase">{item.name}</span>
          <span className="text-sm text-gray-600">{item.description}</span>
        </div>
      </div>
    </a>
  );
}

export const Header = () => {
  return (
    <Popover className="relative p-3 ">
      {({ open }) => (
        <>
          <Popover.Button className={`focus:outline-none`}>
            {!open ? <span>{iconMenu()}</span> : <span>{iconMenuClose()}</span>}
          </Popover.Button>
          <div
            className={`${
              open
                ? "fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
                : ""
            }`}
          >
            <Popover.Panel className="absolute z-10 m-3 bg-gray-100 rounded-md ">
              <div className="grid p-3">
                {menuPositionData.slice(0, 3).map((item, index) => {
                  return menuPosition(item, index);
                })}
              </div>

              <div className="p-3 bg-gray-200 rounded-b-md">
                {menuPositionData.slice(3).map((item, index) => {
                  return menuPosition(item, index);
                })}
              </div>
            </Popover.Panel>
          </div>
        </>
      )}
    </Popover>
  );
};
