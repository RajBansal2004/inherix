import Image from "next/image";
import Link from "next/link";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

export default function WelcomeScreen() {
  return (
    <DeviceFrame>
      <div className="flex min-h-full flex-col px-6 py-3 sm:px-8 sm:py-3">

        <div className="flex flex-col items-center">

          <Image
            src="/logo.png"
            alt="INHERIX"
            width={110}
            height={110}
            className="h-auto w-[90px] sm:w-[110px] object-contain"
            priority
          />

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              Secure
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Verified
            </span>

            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
              Protected
            </span>

          </div>
          <div className="mt-5 text-center">

            <h1 className="text-[30px] font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-[38px] sm:leading-[48px]">
              Welcome to
              <br />
              INHERIX
            </h1>
          </div>

          <p className="mt-6 max-w-[280px] text-center text-sm leading-6 text-slate-500">
            Secure your family's digital continuity, trusted advisors,
            beneficiaries, and important records in one protected place.
          </p>

        </div>

        {/* BUTTONS */}

        <div className="mt-6">

          <Link href="/onboarding/create-account">

            <button className="h-14 w-full rounded-2xl bg-[#163B8C] text-[16px] font-medium text-white transition hover:bg-[#1D4ED8]">
              Get Started
            </button>

          </Link>

          <Link href="/onboarding/login">

            <button className="mt-5 w-full text-[15px] font-medium text-[#64748B]">

              Already have an account?

              <span className="ml-1 text-[#163B8C]">
                Log in
              </span>

            </button>

          </Link>

        </div>

      </div>
    </DeviceFrame>
  );
}