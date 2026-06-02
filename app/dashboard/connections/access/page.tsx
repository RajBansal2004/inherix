"use client";

import { useState } from "react";

import {
  ShieldCheck,
  Eye,
  Lock,
} from "lucide-react";

const accessLevels = [
  {
    title: "Full Access",
    description: "Can view, edit and manage all information",
    icon: ShieldCheck,
  },
  {
    title: "View Only",
    description: "Can view information but cannot make changes",
    icon: Eye,
  },
  {
    title: "Limited Access",
    description: "Can see specific categories only",
    icon: Lock,
  },
];

export default function AccessPage() {

  const [selected, setSelected] = useState("View Only");

  return (
    <div className="mx-auto w-full max-w-[980px] space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-[30px] font-semibold tracking-tight text-[#0F172A] md:text-[36px]">
          Access Level
        </h1>

        <p className="mt-2 text-sm text-slate-500 md:text-base">
          Configure secure permissions for trusted users.
        </p>

      </div>

      {/* CARD */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-5 md:p-8">

        <div className="space-y-4">

          {accessLevels.map((item) => {
            const Icon = item.icon;

            const active = selected === item.title;

            return (
              <button
                key={item.title}
                onClick={() => setSelected(item.title)}
                className={`w-full rounded-[26px] border p-5 text-left transition ${
                  active
                    ? "border-[#163B8C] bg-[#F8FBFF]"
                    : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >

                <div className="flex items-start gap-4">

                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    active
                      ? "bg-[#163B8C]"
                      : "bg-[#EEF4FF]"
                  }`}>

                    <Icon className={`h-6 w-6 ${
                      active
                        ? "text-white"
                        : "text-[#163B8C]"
                    }`} />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-[#0F172A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                  </div>

                </div>

              </button>
            );
          })}

        </div>

        <button className="mt-8 flex h-14 w-full items-center justify-center rounded-2xl bg-[#0F172A] text-sm font-medium text-white">

          Confirm

        </button>

      </div>

    </div>
  );
}