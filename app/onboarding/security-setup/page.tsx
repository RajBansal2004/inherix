import Link from "next/link";

import {
  Fingerprint,
  ScanFace,
  ChevronRight,
} from "lucide-react";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

export default function SecuritySetupScreen() {
  return (
    <DeviceFrame>

      <div className="flex flex-1 flex-col px-8 py-5">
        <div>
          <div className="flex justify-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#DCE3EC] bg-[#EEF4FF]">

              <ScanFace className="h-12 w-12 text-[#163B8C]" />

            </div>

          </div>


          <div className="mt-5 text-center">

            <h1 className="text-[34px] font-semibold tracking-tight text-[#0F172A]">

              Secure Your Account

            </h1>

            <p className="mt-1 text-[16px] leading-8 text-[#64748B]">

              Enable biometric login for
              faster and secure access.

            </p>

          </div>

          <div className="mt-4 space-y-4">

            <button className="flex h-16 w-full items-center justify-between rounded-2xl border border-[#DCE3EC] bg-white px-5 transition hover:bg-[#F8FAFC]">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                  <ScanFace className="h-5 w-5 text-[#163B8C]" />

                </div>

                <div className="text-left">

                  <h3 className="text-[15px] font-medium text-[#0F172A]">

                    Enable Face ID

                  </h3>

                  <p className="text-sm text-[#64748B]">

                    Secure biometric access

                  </p>

                </div>

              </div>

              <ChevronRight className="h-5 w-5 text-[#64748B]" />

            </button>

            <button className="flex h-16 w-full items-center justify-between rounded-2xl border border-[#DCE3EC] bg-white px-5 transition hover:bg-[#F8FAFC]">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                  <Fingerprint className="h-5 w-5 text-[#163B8C]" />

                </div>

                <div className="text-left">

                  <h3 className="text-[15px] font-medium text-[#0F172A]">

                    Enable Fingerprint

                  </h3>

                  <p className="text-sm text-[#64748B]">

                    Fast trusted login

                  </p>

                </div>

              </div>

              <ChevronRight className="h-5 w-5 text-[#64748B]" />

            </button>

          </div>

        </div>

        <div>

          <Link href="/onboarding/whats-next">

            <button className="mt-4 h-14 w-full rounded-2xl bg-[#163B8C] text-[16px] font-medium text-white transition hover:bg-[#1D4ED8]">

              Continue

            </button>

          </Link>

          <button className="mt-5 w-full text-[15px] font-medium text-[#64748B]">

            Skip for now

          </button>

        </div>

      </div>

    </DeviceFrame>
  );
}