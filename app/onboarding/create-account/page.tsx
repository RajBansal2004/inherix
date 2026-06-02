import Image from "next/image";
import Link from "next/link";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

export default function CreateAccountScreen() {
  return (
    <DeviceFrame>

      <div className="flex flex-1 flex-col justify-between px-8 py-8">

        {/* TOP */}

        <div>

          {/* LOGO */}

          <div className="flex justify-center">

            <Image
              src="/logo.png"
              alt="INHERIX"
              width={90}
              height={90}
              className="object-contain"
            />

          </div>

          {/* TITLE */}

          <div className="text-center">

            <h1 className="text-[34px] font-semibold tracking-tight text-[#0F172A]">

              Create Account

            </h1>

            <p className="text-[16px] leading-8 text-[#64748B]">

              Create your secure continuity workspace.

            </p>

          </div>

          {/* FORM */}

          <div className="mt-4 space-y-4">

            <input
              placeholder="Full Name"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 text-[15px] outline-none focus:border-[#163B8C]"
            />

            <input
              placeholder="Email Address"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 text-[15px] outline-none focus:border-[#163B8C]"
            />

            <input
              type="password"
              placeholder="Password"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 text-[15px] outline-none focus:border-[#163B8C]"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 text-[15px] outline-none focus:border-[#163B8C]"
            />

          </div>

          {/* TERMS */}

          <div className="mt-4 flex gap-3">

            <input
              type="checkbox"
              className="mt-1"
            />

            <p className="text-[14px] leading-7 text-[#64748B]">

              I agree to the
              <span className="mx-1 text-[#163B8C]">

                Terms & Privacy Policy

              </span>

            </p>

          </div>

        </div>

        {/* BUTTON */}

        <Link href="/onboarding/verify-email">

          <button className=" mt-2 h-14 w-full rounded-2xl bg-[#163B8C] text-[16px] font-medium text-white hover:bg-[#1D4ED8]">

            Create Account

          </button>

        </Link>

      </div>

    </DeviceFrame>
  );
}