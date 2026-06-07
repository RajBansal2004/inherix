import Link from "next/link";
import {
  Lock,
  Users,
  Shield,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import DeviceFrame from "@/components/onboarding/DeviceFrame";
import BrandHeader from "@/components/onboarding/BrandHeader";

export default function WelcomeScreen() {
  return (
    <DeviceFrame>

      <div className="px-6 py-6">

        <BrandHeader />

        <div className="mt-4 rounded-2xl bg-[#F8FAFD] p-4">

          <div className="grid grid-cols-3 divide-x divide-slate-200">

            <div className="flex flex-col items-center">

              <Lock className="h-6 w-6 text-[#163B8C]" />

              <p className="mt-2 text-center text-xs font-semibold">
                Secure
                <br />
                Records
              </p>

            </div>

            <div className="flex flex-col items-center">

              <Users className="h-6 w-6 text-[#163B8C]" />

              <p className="mt-2 text-center text-xs font-semibold">
                Family
                <br />
                Access
              </p>

            </div>

            <div className="flex flex-col items-center">

              <Shield className="h-6 w-6 text-[#163B8C]" />

              <p className="mt-2 text-center text-xs font-semibold">
                Controlled
                <br />
                Release
              </p>

            </div>

          </div>

        </div>

        <h2 className="mt-5 text-center text-[26px] font-bold text-[#0F172A] leading-8 sm:text-[32px]">
          Create Your Family Continuity Plan
        </h2>

        <p className="mt-4
         text-center text-[15px] leading-5 text-[#64748B]">
          Secure your family's digital continuity, trusted advisors,
          beneficiaries, important records and continuity instructions
          in one protected platform.
        </p>

        <Link href="/onboarding/create-account">

          <button className="mt-5 flex h-[60px] w-full items-center justify-center gap-3 rounded-2xl bg-[#163B8C] text-white transition hover:bg-[#1D4ED8]">

            <ShieldCheck className="h-5 w-5" />

            <span className="font-semibold">
              Get Started
            </span>

            <ArrowRight className="h-5 w-5" />

          </button>

        </Link>

        <div className="mt-3 text-center">

          <span className="text-sm text-slate-500">
            Already have an account?
          </span>

          <Link
            href="/onboarding/login"
            className="ml-1 text-sm font-medium text-[#2453A6] hover:underline"
          >
            Log In
          </Link>

        </div>

        <div className="mt-3 flex items-center gap-3">

          <div className="h-[1px] flex-1 bg-[#E5E7EB]" />

          <ShieldCheck className="h-5 w-5 text-slate-400" />

          <div className="h-[1px] flex-1 bg-[#E5E7EB]" />

        </div>

        <div className="mt-2 rounded-2xl bg-[#F8FAFD] p-4">

          <div className="flex items-center gap-3">

            <ShieldCheck className="h-10 w-10 rounded-full bg-white p-2 text-[#163B8C]" />

            <p className="text-sm leading-6 text-[#64748B]">
              Your information is encrypted and accessible only through a structured release process.
            </p>

          </div>

        </div>

      </div>

    </DeviceFrame>
  );
}