"use client";

import { useState } from "react";

import {
  Bell,
  UserPlus,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const settings = [
  {
    key: "one",
    title: "Task Reminders",
    subtitle: "Receive continuity task alerts",
    icon: Bell,
  },
  {
    key: "two",
    title: "Connection Requests",
    subtitle: "Notifications for trusted contacts",
    icon: UserPlus,
  },
  {
    key: "three",
    title: "Security Alerts",
    subtitle: "Important security notifications",
    icon: ShieldAlert,
  },
  {
    key: "four",
    title: "Product Updates",
    subtitle: "New features and improvements",
    icon: Sparkles,
  },
] as const;

export default function NotificationSettingsPage() {

  const [enabled, setEnabled] = useState({
    one: true,
    two: false,
    three: true,
    four: false,
  });

  return (
    <div className="mx-auto w-full max-w-[760px] space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-[34px] font-semibold tracking-tight text-[#0F172A]">
          Notification Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage alerts and continuity notifications.
        </p>

      </div>

      {/* CARD */}

      <div className="rounded-[36px] border border-[#DCE3EC] bg-white p-5 sm:p-6">

        <div className="space-y-4">

          {settings.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="flex items-center justify-between rounded-[26px] border border-[#EEF2F7] p-5"
              >

                {/* LEFT */}

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                    <Icon className="h-6 w-6 text-[#163B8C]" />

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

                {/* TOGGLE */}

                <button
                  onClick={() =>
                    setEnabled({
                      ...enabled,
                      [item.key]: !enabled[item.key],
                    })
                  }
                  className={`relative h-7 w-12 rounded-full transition ${
                    enabled[item.key]
                      ? "bg-[#163B8C]"
                      : "bg-slate-300"
                  }`}
                >

                  <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    enabled[item.key]
                      ? "left-6"
                      : "left-1"
                  }`} />

                </button>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}