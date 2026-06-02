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
  FileText,
  Upload,
  Shield,
  Settings,
  ChevronDown,
  X,
} from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

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
    title: "Continuity Activation",
    href: "/dashboard/activation",
    icon: Activity,
  },
  {
    title: "Verification Center",
    href: "/dashboard/verification",
    icon: ShieldCheck,
  },
  {
    title: "Activity Logs",
    href: "/dashboard/logs",
    icon: FileText,
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

export default function MobileSidebar({
  open,
  setOpen,
}: Props) {

  const pathname = usePathname();

  return (
    <>

      {/* OVERLAY */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 xl:hidden"
        />
      )}

      {/* SIDEBAR */}

      <aside className={`fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col border-r border-[#DCE3EC] bg-white transition-all duration-300 xl:hidden ${
        open
          ? "translate-x-0"
          : "-translate-x-full"
      }`}>

        {/* TOP */}

        <div className="flex items-center justify-between border-b border-[#E8EEF5] px-5 py-5">

          <div>

            <h1 className="text-[26px] font-semibold tracking-tight text-[#163B8C]">

              INHERIX

            </h1>

            <p className="text-[11px] text-slate-500">

              Your Legacy. Their Future.

            </p>

          </div>

          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE3EC]"
          >

            <X className="h-5 w-5" />

          </button>

        </div>

        {/* MENU */}

        <div className="flex-1 overflow-y-auto px-4 py-4">

          <div className="space-y-1">

            {menus.map((menu) => {
              const Icon = menu.icon;

              const active = pathname === menu.href;

              return (
                <Link
                  key={menu.title}
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                    active
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

        <div className="border-t border-[#E8EEF5] p-4">

          <button className="flex w-full items-center gap-3 rounded-xl border border-[#DCE3EC] bg-white px-3 py-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF2FF] text-[12px] font-semibold text-[#163B8C]">

              RS

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