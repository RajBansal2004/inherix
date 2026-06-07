import Link from "next/link";
import {
  Shield,
  Users,
  Lock,
  Mail,
  Eye,
  ShieldCheck,
} from "lucide-react";

import DeviceFrame from "@/components/onboarding/DeviceFrame";
import BrandHeader from "@/components/onboarding/BrandHeader";

export default function LoginScreen() {
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

        <h2 className="mt-2 text-center text-[34px] font-bold text-[#0F172A]">
          Welcome Back
        </h2>

        <p className="text-center text-[16px] text-[#64748B]">
          Access your continuity workspace securely.
        </p>

        <div className="mt-4 space-y-4">

          <div className="relative">

            <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="email"
              placeholder="Email Address"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-4 outline-none transition focus:border-[#163B8C]"
            />

          </div>

          <div className="relative">

            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="password"
              placeholder="Password"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-12 outline-none transition focus:border-[#163B8C]"
            />

            <Eye className="absolute right-4 top-4 h-5 w-5 cursor-pointer text-slate-400" />

          </div>

        </div>

        <div className="mt-4 text-right">

          <Link
            href="/onboarding/forgot-password"
            className="text-sm font-medium text-[#2453A6] hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        <Link href="/dashboard">

          <button className="mt-6 flex h-[60px] w-full items-center justify-center gap-3 rounded-2xl bg-[#163B8C] text-white transition hover:bg-[#1D4ED8]">

            <ShieldCheck className="h-5 w-5" />

            <span className="font-semibold">
              Login
            </span>

          </button>

        </Link>

        <div className="mt-2 text-center">

          <span className="text-sm text-slate-500">
            Don't have an account?
          </span>

          <Link
            href="/onboarding/create-account"
            className="ml-1 text-sm font-medium text-[#2453A6] hover:underline"
          >
            Create Account
          </Link>

        </div>

        <div className="mt-2 flex items-center gap-3">

          <div className="h-[1px] flex-1 bg-[#E5E7EB]" />

          <ShieldCheck className="h-5 w-5 text-slate-400" />

          <div className="h-[1px] flex-1 bg-[#E5E7EB]" />

        </div>

        <div className="mt-4 rounded-2xl bg-[#F8FAFD] p-4">

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