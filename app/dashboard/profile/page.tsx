import Link from "next/link";

import {
  User,
  Shield,
  Bell,
  Lock,
  CircleHelp,
  Info,
  ChevronRight,
  LogOut,
  Crown,
} from "lucide-react";

const menus = [
  {
    title: "Account Settings",
    subtitle: "Manage profile information",
    icon: User,
    href: "/dashboard/profile/account",
  },
  {
    title: "Security Settings",
    subtitle: "PIN, biometric & authentication",
    icon: Shield,
    href: "/dashboard/profile/security",
  },
  {
    title: "Notification Settings",
    subtitle: "Alerts & reminders",
    icon: Bell,
    href: "/dashboard/profile/notifications",
  },
  {
    title: "Privacy Settings",
    subtitle: "Encryption & data controls",
    icon: Lock,
    href: "/dashboard/profile/privacy",
  },
  {
    title: "Help & Support",
    subtitle: "Need assistance?",
    icon: CircleHelp,
    href: "#",
  },
  {
    title: "About Inherix",
    subtitle: "Platform information",
    icon: Info,
    href: "#",
  },
];

export default function ProfilePage() {
  return (
    <div className="mx-auto w-full max-w-[720px] space-y-6">

      {/* PROFILE HERO */}

      <div className="overflow-hidden rounded-[36px] border border-[#DCE3EC] bg-white">

        {/* TOP BG */}

        <div className="h-32 bg-gradient-to-r from-[#163B8C] to-[#315FC4]" />

        {/* CONTENT */}

        <div className="relative px-6 pb-6">

          {/* AVATAR */}

          <div className="-mt-14 flex flex-col items-center text-center">

            <div className="flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-white bg-[#EEF4FF] text-[32px] font-semibold text-[#163B8C] shadow-lg">

              AJ

            </div>

            <h1 className="mt-5 text-[30px] font-semibold tracking-tight text-[#0F172A]">
              Alex Johnson
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              alex@email.com
            </p>

            {/* BADGE */}

            <div className="mt-4 flex items-center gap-2 rounded-full bg-[#EEF4FF] px-4 py-2">

              <Crown className="h-4 w-4 text-[#163B8C]" />

              <span className="text-xs font-medium text-[#163B8C]">
                Primary Account Holder
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* SETTINGS */}

      <div className="rounded-[36px] border border-[#DCE3EC] bg-white p-4 sm:p-5">

        <div className="space-y-3">

          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between rounded-[26px] border border-[#EEF2F7] bg-white p-4 transition-all duration-200 hover:border-[#163B8C] hover:bg-[#F8FBFF]"
              >

                {/* LEFT */}

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF] transition group-hover:bg-[#163B8C]">

                    <Icon className="h-6 w-6 text-[#163B8C] group-hover:text-white" />

                  </div>

                  <div>

                    <h3 className="text-[15px] font-semibold text-[#0F172A]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.subtitle}
                    </p>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC] transition group-hover:bg-[#163B8C]">

                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-white" />

                </div>

              </Link>
            );
          })}

        </div>

        {/* LOGOUT */}

        <button className="mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-[24px] border border-red-100 bg-red-50 text-sm font-semibold text-red-600 transition hover:bg-red-100">

          <LogOut className="h-5 w-5" />

          Log Out

        </button>

      </div>

    </div>
  );
}