"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  X,
  Lock,
  History,
  CheckSquare,
} from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

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
    title: "Trusted Access",
    href: "/dashboard/professionals",
    icon: Briefcase,
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
  {
    title: "Emergency Access",
    href: "/dashboard/emergency",
    icon: ShieldCheck,
  },
];

const complianceMenus = [
  {
    title: "Security Centre",
    href: "/dashboard/security",
    icon: ShieldCheck,
  },
  {
    title: "Audit Logs",
    href: "/dashboard/audit",
    icon: History,
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

export default function MobileSidebar({
  open,
  setOpen,
}: Props) {
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
          onClick={() => setOpen(false)}
          className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[14px] font-medium transition-all duration-200 ${active
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
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden"
        />
      )}

      <aside
        className={`
    fixed
    top-0
    left-0
    z-50
    flex
    h-[100dvh]
    w-[85vw]
    max-w-[320px]
    flex-col
    border-r
    border-[#DCE3EC]
    bg-white
    shadow-xl
    transition-transform
    duration-300
    xl:hidden
    ${open ? "translate-x-0" : "-translate-x-full"}
  `}
      >

        <div className="shrink-0 border-b border-[#E8EEF5] px-5 py-4">
          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-2">

                <h1 className="text-[26px] font-semibold tracking-tight text-[#163B8C]">
                  INHERIX
                </h1>
              </div>

              <p className="text-[11px] font-medium text-slate-500">
                Digital Continuity Institution
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE3EC]"
            >
              <X className="h-5 w-5" />
            </button>

          </div>

        </div>

        <div
          className="
    flex-1
    min-h-0
    overflow-y-auto
    overflow-x-hidden
    px-4
    py-3
  "
        >
          <div className="space-y-2  pb-40">

            <div>

              <p className="mb-2 px-3 text-[11px] font-semibold tracking-wider text-slate-400">
                CONTINUITY HUB
              </p>

              <div className="space-y-1">
                {renderMenu(recordMenus)}
              </div>

            </div>

            <div>

              <p className="mb-2 px-3 text-[11px] font-semibold tracking-wider text-slate-400">
                ACCESS & CONTINUITY
              </p>

              <div className="space-y-1">
                {renderMenu(continuityMenus)}
              </div>

            </div>
            <div>

              <p className="mb-2 px-3 text-[11px] font-semibold tracking-wider text-slate-400">
                SECURITY & GOVERNANCE
              </p>

              <div className="space-y-1">
                {renderMenu(complianceMenus)}
              </div>

            </div>

            <div>

              <p className="mb-2 px-3 text-[11px] font-semibold tracking-wider text-slate-400">
                ACCOUNT
              </p>

              <div className="space-y-1">
                {renderMenu(accountMenus)}
              </div>

            </div>

          </div>

        </div>

        {/* PROFILE */}

        <div className=" border-t border-[#E8EEF5] bg-white p-4 shrink-0"   >

          <button className="flex w-full items-center gap-3 rounded-2xl border border-[#DCE3EC] bg-[#FAFBFC] px-3 py-3">

            <div className="relative">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#163B8C] text-xs font-semibold text-white">
                RS
              </div>

              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />

            </div>

            <div className="flex-1 text-left">

              <h3 className="text-[13px] font-semibold text-[#0F172A]">
                Rahul Sharma
              </h3>

              <p className="text-[11px] text-slate-500">
                Primary Account
              </p>

            </div>

            <ChevronDown className="h-4 w-4 text-slate-400" />

          </button>

        </div>

      </aside>
    </>
  );
}