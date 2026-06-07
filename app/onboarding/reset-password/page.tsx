import Link from "next/link";
import {
  Lock,
  Eye,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import DeviceFrame from "@/components/onboarding/DeviceFrame";
import BrandHeader from "@/components/onboarding/BrandHeader";

export default function ResetPasswordScreen() {
  return (
    <DeviceFrame>

      <div className="px-6 py-6">

        <BrandHeader />

        <h2 className="mt-2 text-center text-[32px] font-bold text-[#0F172A]">
          Reset Password
        </h2>

        <p className="mt-2 text-center text-[15px] leading-5 text-[#64748B]">
          Create a new secure password to continue accessing your continuity workspace.
        </p>

        <div className="mt-6 space-y-4">

          <div className="relative">

            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="password"
              placeholder="New Password"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-12 outline-none transition focus:border-[#163B8C]"
            />

            <Eye className="absolute right-4 top-4 h-5 w-5 cursor-pointer text-slate-400" />

          </div>

          <div className="relative">

            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="password"
              placeholder="Confirm Password"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-12 outline-none transition focus:border-[#163B8C]"
            />

            <Eye className="absolute right-4 top-4 h-5 w-5 cursor-pointer text-slate-400" />

          </div>

        </div>

        <Link href="/onboarding/login">

          <button className="mt-4 flex h-[60px] w-full items-center justify-center gap-3 rounded-2xl bg-[#163B8C] text-white transition hover:bg-[#1D4ED8]">

            <ShieldCheck className="h-5 w-5" />

            <span className="font-semibold">
              Update Password
            </span>

            <ArrowRight className="h-5 w-5" />

          </button>

        </Link>

        <div className="mt-3 text-center">

          <Link
            href="/onboarding/login"
            className="text-sm font-medium text-[#2453A6] hover:underline"
          >
            Back to Login
          </Link>

        </div>

        <div className="mt-4 flex items-center gap-3">

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