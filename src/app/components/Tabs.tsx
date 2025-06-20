'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const pathname = usePathname();

  const tabs = [
    { name: "Jakarta", href: "/products/tab1" },
    { name: "Surabaya", href: "/products/tab2" },
    { name: "Singapore", href: "/products/tab3" },
  ];

  return (
    <div className="flex space-x-2 border-b border-gray-300">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`px-4 py-2 border-b-2 ${
            pathname === tab.href
              ? "border-blue-800 text-blue-800 font-semibold"
              : "border-transparent text-gray-600 hover:text-blue-800 hover:border-blue-400"
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
