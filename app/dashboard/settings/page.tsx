"use client";

import { useState } from "react";


import {
  Shield,
  Bell,
  Lock,
  Smartphone,
  Moon,
  Globe,
} from "lucide-react";

const settingsData = [
  {
    icon: Shield,
    title: "Two-Factor Authentication",
    desc: "Extra security verification layer",
  },
  {
    icon: Bell,
    title: "Notifications",
    desc: "Manage alerts and updates",
  },
  {
    icon: Lock,
    title: "Privacy Settings",
    desc: "Control account visibility",
  },
  {
    icon: Smartphone,
    title: "Biometric Login",
    desc: "Enable Face ID & Fingerprint",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    desc: "Switch interface appearance",
  },
  {
    icon: Globe,
    title: "Language & Region",
    desc: "Manage language preferences",
  },
];

export default function SettingsPage() {

  const [enabled, setEnabled] = useState<number[]>([0, 1, 3]);

  const toggleSetting = (index: number) => {
    if (enabled.includes(index)) {
      setEnabled(enabled.filter((item) => item !== index));
    } else {
      setEnabled([...enabled, index]);
    }
  };

  return (

      <div className="space-y-6">

        {/* HEADER */}

        <div>

          <h1 className="text-[32px] font-semibold text-[#0F172A]">

            Settings

          </h1>

          <p className="mt-2 text-slate-500">

            Configure security, preferences and application controls.

          </p>

        </div>

        {/* SETTINGS */}

        <div className="grid gap-5">

          {settingsData.map((item, index) => {
            const Icon = item.icon;

            const active = enabled.includes(index);

            return (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-[28px] border border-[#DCE3EC] bg-white p-6 lg:flex-row lg:items-center lg:justify-between"
              >

                {/* LEFT */}

                <div className="flex items-center gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                    <Icon className="h-6 w-6 text-[#163B8C]" />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-[#0F172A]">

                      {item.title}

                    </h3>

                    <p className="mt-1 text-sm text-slate-500">

                      {item.desc}

                    </p>

                  </div>

                </div>

                {/* TOGGLE */}

                <button
                  onClick={() => toggleSetting(index)}
                  className={`relative h-7 w-14 rounded-full transition ${
                    active
                      ? "bg-[#163B8C]"
                      : "bg-slate-300"
                  }`}
                >

                  <div
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                      active
                        ? "right-1"
                        : "left-1"
                    }`}
                  />

                </button>

              </div>
            );
          })}

        </div>

      </div>

  );
}