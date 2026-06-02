import Image from "next/image";
import Link from "next/link";

import { Mail } from "lucide-react";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

export default function VerifyEmailScreen() {
  return (
    <DeviceFrame>

      <div className="flex flex-1 flex-col justify-between px-8 py-10">

        {/* CONTENT */}

        <div className="flex flex-1 flex-col items-center justify-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-[28px] border border-[#DCE3EC]">

            <Mail className="h-14 w-14 text-[#163B8C]" />

          </div>

          <h1 className="mt-10 text-center text-[34px] font-semibold text-[#0F172A]">

            Verify Your Email

          </h1>

          <p className="mt-5 text-center text-[16px] leading-8 text-[#64748B]">

            We’ve sent a verification link
            to your email address.

          </p>

        </div>

        {/* BUTTONS */}

        <div>

          <Link href="/onboarding/setup-pin">

            <button className="h-14 w-full rounded-2xl bg-[#163B8C] text-white hover:bg-[#1D4ED8]">

              Open Email App

            </button>

          </Link>

          <button className="mt-5 w-full text-[15px] text-[#64748B]">

            Resend Email

          </button>

        </div>

      </div>

    </DeviceFrame>
  );
}