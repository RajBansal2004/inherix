import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

export default function LoginScreen() {
  return (
    <DeviceFrame>

      <div className="px-6 py-2 sm:px-8">
        <div className="flex justify-center">

          <Image
            src="/logo.png"
            alt="INHERIX"
            width={90}
            height={90}
            priority
          />

        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">

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

        <h1 className="mt-4 text-center text-3xl font-semibold text-[#0F172A]">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-sm text-slate-500">
          Access your continuity workspace
        </p>

        <div className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email Address"
            className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none transition focus:border-[#163B8C]"
          />

          <input
            type="password"
            placeholder="Password"
            className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none transition focus:border-[#163B8C]"
          />

        </div>

        <div className="mt-4 text-right">

          <Link
            href="/onboarding/forgot-password"
            className="text-sm font-medium text-[#163B8C] hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        <Link href="/dashboard">

          <button className="mt-6 h-14 w-full rounded-2xl bg-[#163B8C] text-white transition hover:bg-[#1D4ED8]">
            Login
          </button>

        </Link>


        <div className="mt-5 text-center">

          <span className="text-sm text-slate-500">
            Don't have an account?
          </span>

          <Link
            href="/onboarding/create-account"
            className="ml-1 text-sm font-medium text-[#163B8C] hover:underline"
          >
            Create Account
          </Link>

        </div>

      </div>

    </DeviceFrame>
  );
}