"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products/tab1" },
    { name: "Targets", href: "" },
    // { name: "Contact", href: "" },
  ];

  return (
    <nav className="w-full h-20 border-b-2 border-gray-300 rounded-md px-6 py-3 flex justify-between items-center mt-10 bg-black shadow-md">
      <div className="text-xl font-semibold text-white">P R I C E L I S T</div>
      <div className="space-x-4">
        {tabs.map((tab) => {
          const isHome = tab.href === "/";
          const isActive = isHome
            ? pathname === "/"
            : pathname.startsWith("/" + tab.href.split("/")[1]);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 border-b-2 ${
                isActive
                  ? "border-blue-200 text-blue-200 font-semibold"
                  : "border-transparent text-white hover:text-white hover:border-white"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
