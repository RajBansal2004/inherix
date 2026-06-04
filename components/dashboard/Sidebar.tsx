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
  Upload,
  Shield,
  Settings,
  ChevronDown,
  CheckSquare,
  Lock,
  History,
} from "lucide-react";

const recordMenus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Digital Vault",
    href: "/dashboard/records",
    icon: FolderOpen,
  },
  {
    title: "Family & Beneficiaries",
    href: "/dashboard/family",
    icon: Users,
  },
];

const continuityMenus = [
  {
    title: "Trusted Advisors",
    href: "/dashboard/professionals",
    icon: Briefcase,
  },
  {
    title: "Emergency Access",
    href: "/dashboard/emergency",
    icon: ShieldCheck,
  },
  {
    title: "Emergency Activation",
    href: "/dashboard/activation",
    icon: Activity,
  },
  {
    title: "Tasks",
    href: "/dashboard/tasks",
    icon: CheckSquare,
  },
  {
    title: "Verification & Claims",
    href: "/dashboard/verification",
    icon: ShieldCheck,
  },
];

const complianceMenus = [
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
];

const accountMenus = [
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const renderMenu = (items: any[]) =>
    items.map((menu) => {
      const Icon = menu.icon;

      const active =
        menu.href === "/dashboard"
          ? pathname === "/dashboard"
          : pathname.startsWith(menu.href);

      return (
        <Link
          key={menu.title}
          href={menu.href}
          className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-200 ${active
              ? "bg-[#163B8C] text-white shadow-md"
              : "text-[#334155] hover:bg-[#EEF4FF] hover:text-[#163B8C]"
            }`}
        >
          <Icon className="h-4 w-4 shrink-0" />

          <span className="truncate">
            {menu.title}
          </span>
        </Link>
      );
    });

  return (
    <aside className="sticky top-0 flex h-screen w-[280px] shrink-0 flex-col border-r border-[#DCE3EC] bg-white">

      <div className="border-b border-[#E8EEF5] px-5 py-5">

        <div className="flex items-center gap-3">

          <div className="flex h-14 w-14 items-center justify-center">
            <Image
              src="/logo.png"
              alt="INHERIX Logo"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h1 className="text-[24px] font-semibold tracking-tight text-[#163B8C]">
                INHERIX
              </h1>
            </div>

            <p className="text-[11px] text-slate-500">
              Your Legacy. Their Future.
            </p>

          </div>

        </div>

      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">

        <div className="space-y-5">
          <div>

            <p className="mb-2 px-3 text-[11px] font-semibold tracking-wider text-slate-400">
              MY RECORDS
            </p>

            <div className="space-y-0.5">
              {renderMenu(recordMenus)}
            </div>

          </div>

          <div>

            <p className="mb-2 px-3 text-[11px] font-semibold tracking-wider text-slate-400">
              ACCESS & CONTINUITY
            </p>

            <div className="space-y-0.5">
              {renderMenu(continuityMenus)}
            </div>

          </div>

          <div>

            <p className="mb-2 px-3 text-[11px] font-semibold tracking-wider text-slate-400">
              COMPLIANCE
            </p>

            <div className="space-y-0.5">
              {renderMenu(complianceMenus)}
            </div>

          </div>

          <div>

            <p className="mb-2 px-3 text-[11px] font-semibold tracking-wider text-slate-400">
              ACCOUNT
            </p>

            <div className="space-y-0.5">
              {renderMenu(accountMenus)}
            </div>

          </div>

        </div>

      </div>

      <div className="mt-auto border-t border-[#E8EEF5] bg-white p-3">

        <Link
          href="/dashboard/profile"
          className="group flex items-center gap-3 rounded-2xl border border-[#DCE3EC] bg-[#FAFBFC] p-3 transition hover:border-[#163B8C]"
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