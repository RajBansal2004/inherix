"use client";

import { useState } from "react";

import {
  ChevronRight,
  ShieldCheck,
  ScanFace,
  Smartphone,
  MonitorSmartphone,
  Trash2,
} from "lucide-react";

export default function SecuritySettingsPage() {

  const [biometric, setBiometric] = useState(true);

  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="mx-auto w-full max-w-[760px] space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-[34px] font-semibold tracking-tight text-[#0F172A]">
          Security Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage authentication and account protection.
        </p>

      </div>

      {/* CARD */}

      <div className="rounded-[36px] border border-[#DCE3EC] bg-white p-5 sm:p-6">

        <div className="space-y-4">

          {/* CHANGE PIN */}

          <button className="flex w-full items-center justify-between rounded-[26px] border border-[#EEF2F7] p-5 transition hover:border-[#163B8C] hover:bg-[#F8FBFF]">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                <ShieldCheck className="h-6 w-6 text-[#163B8C]" />

              </div>

              <div className="text-left">

                <h3 className="text-[15px] font-semibold text-[#0F172A]">
                  Change PIN
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Update your secure access PIN
                </p>

              </div>

            </div>

            <ChevronRight className="h-5 w-5 text-slate-400" />

          </button>

          {/* BIOMETRIC */}

          <div className="flex items-center justify-between rounded-[26px] border border-[#EEF2F7] p-5">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                <ScanFace className="h-6 w-6 text-[#163B8C]" />

              </div>

              <div>

                <h3 className="text-[15px] font-semibold text-[#0F172A]">
                  Biometric Login
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Face ID & fingerprint enabled
                </p>

              </div>

            </div>

            <button
              onClick={() => setBiometric(!biometric)}
              className={`relative h-7 w-12 rounded-full transition ${
                biometric
                  ? "bg-[#163B8C]"
                  : "bg-slate-300"
              }`}
            >

              <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                biometric
                  ? "left-6"
                  : "left-1"
              }`} />

            </button>

          </div>

          {/* 2FA */}

          <div className="flex items-center justify-between rounded-[26px] border border-[#EEF2F7] p-5">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                <Smartphone className="h-6 w-6 text-[#163B8C]" />

              </div>

              <div>

                <h3 className="text-[15px] font-semibold text-[#0F172A]">
                  Two-Factor Authentication
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Extra layer of account protection
                </p>

              </div>

            </div>

            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`relative h-7 w-12 rounded-full transition ${
                twoFactor
                  ? "bg-[#163B8C]"
                  : "bg-slate-300"
              }`}
            >

              <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                twoFactor
                  ? "left-6"
                  : "left-1"
              }`} />

            </button>

          </div>

          {/* SESSION */}

          <button className="flex w-full items-center justify-between rounded-[26px] border border-[#EEF2F7] p-5 transition hover:border-[#163B8C] hover:bg-[#F8FBFF]">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                <MonitorSmartphone className="h-6 w-6 text-[#163B8C]" />

              </div>

              <div className="text-left">

                <h3 className="text-[15px] font-semibold text-[#0F172A]">
                  Session Management
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Manage active logged in devices
                </p>

              </div>

            </div>

            <ChevronRight className="h-5 w-5 text-slate-400" />

          </button>

          {/* DELETE */}

          <button className="flex w-full items-center justify-between rounded-[26px] border border-red-100 bg-red-50 p-5 transition hover:bg-red-100">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">

                <Trash2 className="h-6 w-6 text-red-600" />

              </div>

              <div className="text-left">

                <h3 className="text-[15px] font-semibold text-red-600">
                  Delete Account
                </h3>

                <p className="mt-1 text-xs text-red-400">
                  Permanently remove your account
                </p>

              </div>

            </div>

            <ChevronRight className="h-5 w-5 text-red-400" />

          </button>

        </div>

      </div>

    </div>
  );
}