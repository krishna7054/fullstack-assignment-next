"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import { cn } from "@/lib/utils";
import { CircleGauge, Users, BookMarked, HelpCircle, ChartPie, Settings } from "lucide-react";

const sidebarItems = [
  { icon: CircleGauge, label: "Dashboard", href: "/" },
  { icon: Users, label: "Students", href: "/students" },
  { icon: BookMarked, label: "Chapter", href: "/chapter" },
  { icon: HelpCircle, label: "Help", href: "/help" },
  { icon: ChartPie, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname(); // Get the current path
  

  return (
    <div className="fixed left-0 top-0 bottom-0 w-60 pb-12 border-r bg-white overflow-y-auto">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link href="/" className="flex items-center pl-2 mb-14">
            <span className="text-2xl font-bold">Quyl.</span>
          </Link>
          <nav className="space-y-5">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                href="/"
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100",
                  pathname === item.href ? "bg-gray-100 font-medium" : ""
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
