"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  FolderOpen,
  Users,
  Briefcase,
  Activity,
  ShieldCheck,
  FileText,
  Upload,
  Shield,
  Settings,
  ChevronDown,
  CheckSquare,
} from "lucide-react";
  import { History } from "lucide-react";


const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Continuity Records",
    href: "/dashboard/records",
    icon: FolderOpen,
  },
  {
    title: "Family & Contacts",
    href: "/dashboard/family",
    icon: Users,
  },
  {
    title: "Professional Access",
    href: "/dashboard/professionals",
    icon: Briefcase,
  },
 
  {
  title: "Emergency Access",
  href: "/dashboard/emergency",
  icon: ShieldCheck,
},
  {
    title: "Continuity Activation",
    href: "/dashboard/activation",
    icon: Activity,
  },
  {
  title: "Tasks",
  href: "/dashboard/tasks",
  icon: CheckSquare,
},
  {
    title: "Verification Center",
    href: "/dashboard/verification",
    icon: ShieldCheck,
  },
   {
  title: "Audit Logs",
  href: "/dashboard/audit",
  icon: History,
},
{
  title: "Security Centre",
  href: "/dashboard/security",
  icon: ShieldCheck,
},
  {
    title: "Backup & Export",
    href: "/dashboard/backup",
    icon: Upload,
  },
  {
    title: "Trust & Governance",
    href: "/dashboard/governance",
    icon: Shield,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[250px] shrink-0 flex-col border-r border-[#DCE3EC] bg-white">

      {/* TOP LOGO */}

      <div className="border-b border-[#E8EEF5] px-5 py-5">

        <div className="flex items-center gap-3">

          {/* LOGO */}

          <div className="flex h-14 w-14 items-center justify-center">
            <Image
              src="/logo.png"
              alt="INHERIX Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>

          {/* TEXT */}

          <div>

            <h1 className="text-[24px] font-semibold tracking-[-0.04em] text-[#163B8C]">

              INHERIX

            </h1>

            <p className="text-[11px] text-slate-500">

              Your Legacy. Their Future.

            </p>

          </div>

        </div>

      </div>

      {/* MENU */}

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-1">

          {menus.map((menu) => {
            const Icon = menu.icon;

            const active =
              menu.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(menu.href);

            return (
              <Link
                key={menu.title}
                href={menu.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition ${active
                  ? "bg-[#163B8C] text-white"
                  : "text-[#334155] hover:bg-[#F5F7FB]"
                  }`}
              >

                <Icon className="h-[17px] w-[17px]" />

                <span className="text-[13px] font-medium">

                  {menu.title}

                </span>

              </Link>
            );
          })}

        </div>

      </div>

      {/* PROFILE */}

       <div className="border-t border-[#E8EEF5] bg-white">

        <Link
          href="/dashboard/profile"
          className="group flex items-center gap-3 border border-[#DCE3EC] bg-[#FAFBFC] p-3 transition hover:border-[#163B8C]"
        >

          <div className="relative">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#163B8C] text-sm font-semibold text-white">

              RS

            </div>

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />

          </div>

          <div className="min-w-0 flex-1">

            <h3 className="truncate text-sm font-semibold text-[#0F172A]">
              Rahul Sharma
            </h3>

            <p className="truncate text-xs text-slate-500">
              Primary Account
            </p>

          </div>

          <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-[#163B8C]" />

        </Link>

      </div>

    </aside>
  );
}