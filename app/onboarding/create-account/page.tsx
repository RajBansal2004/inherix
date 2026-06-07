import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  Users,
  Shield,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

export default function CreateAccountScreen() {
  return (
    <DeviceFrame>
      <div className="px-6 py-6">
        <div className="flex flex-col items-center">

          <Image
            src="/logo.png"
            alt="INHERIX"
            width={80}
            height={80}
            className="object-contain"
            priority
          />

          <h1 className="text-[34px] font-extrabold tracking-tight text-[#0B1736]">
            INHERIX
          </h1>

        </div>
        <div className="flex items-center gap-3">
          <div className="h-[1px] flex-1 bg-[#D8DEE8]" />

          <p className="whitespace-nowrap text-[16px] font-semibold text-[#1484CD]">
            Digital Continuity Institution
          </p>

          <div className="h-[1px] flex-1 bg-[#D8DEE8]" />

        </div>
        <h2 className="mt-2 text-center text-[22px] font-extrabold tracking-tight text-[#0B1736] whitespace-nowrap">
          Create Your Continuity Account
        </h2>

        <p className="mt-2 text-center text-[16px] leading-5">
          Start building your Family Continuity Plan and securely organise
          important records, nominees, trusted contacts and continuity
          instructions.
        </p>

        <div className="mt-6 rounded-2xl bg-[#F8FAFD] p-4">
          <div className="grid grid-cols-3 divide-x divide-slate-200">

            <div className="flex flex-col items-center">

              <Lock className="h-7 w-7 text-[#163B8C]" />

              <p className="mt-2 text-center text-sm font-semibold">
                Secure
                <br />
                Records
              </p>

            </div>

            <div className="flex flex-col items-center">

              <Users className="h-7 w-7 text-[#163B8C]" />

              <p className="mt-2 text-center text-sm font-semibold">
                Family
                <br />
                Access
              </p>

            </div>

            <div className="flex flex-col items-center">

              <Shield className="h-7 w-7 text-[#163B8C]" />

              <p className="mt-2 text-center text-sm font-semibold">
                Controlled
                <br />
                Release
              </p>

            </div>

          </div>

        </div>

        <div className="mt-6 space-y-4">

          <div className="relative">

            <User className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              placeholder="Full Name"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-4"
            />

          </div>

          <div className="relative">

            <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="email"
              placeholder="Email Address"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-4"
            />

          </div>

          <div className="relative">

            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="password"
              placeholder="Create Password"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-12"
            />

            <Eye className="absolute right-4 top-4 h-5 w-5 text-slate-400" />

          </div>

          <div className="relative">

            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="password"
              placeholder="Confirm Password"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-12"
            />

            <Eye className="absolute right-4 top-4 h-5 w-5 text-slate-400" />

          </div>

        </div>

        <div className="mt-4 flex items-start gap-3">

          <input
            type="checkbox"
            className="mt-1 h-5 w-5"
          />

          <p className="text-[15px] leading-7 text-[#4B5563]">

            I agree to the{" "}

            <span className="font-semibold text-[#2453A6] hover:underline cursor-pointer">
              Terms & Privacy Policy
            </span>

            {" "}and{" "}

            <span className="font-semibold text-[#2453A6] hover:underline cursor-pointer">
              Consent Policy
            </span>

          </p>

        </div>

       <Link href="/onboarding/verify-email">

  <button className="mt-2 flex h-[55px] w-full items-center justify-center gap-4 rounded-2xl bg-[#163B8C] px-6 text-white transition hover:bg-[#1D4ED8]">

    <ShieldCheck className="h-5 w-5" />

    <span className="text-[18px] font-semibold">
      Start Continuity Setup
    </span>

    <ArrowRight className="h-5 w-5" />

  </button>

</Link>

        <div className="mt-2 text-center">

          <span className="text-[#64748B]">
            Already have an account?
          </span>

          <Link
            href="/onboarding/login"
            className="ml-1 font-semibold text-[#2453A6] hover:text-[#1E40AF]"
          >
            Sign In
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