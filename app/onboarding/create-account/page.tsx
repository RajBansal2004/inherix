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
      <div className="px-4 sm:px-6 py-6">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="INHERIX"
            width={80}
            height={80}
            className="h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] object-contain"
            priority
          />

          <h1 className="text-[30px] sm:text-[34px] font-extrabold tracking-tight text-[#0B1736] text-center">
            INHERIX
          </h1>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div className="h-[1px] flex-1 bg-[#D8DEE8]" />

          <p className="text-center text-[13px] sm:text-[16px] font-semibold text-[#1484CD] px-2">
            Digital Continuity Institution
          </p>

          <div className="h-[1px] flex-1 bg-[#D8DEE8]" />
        </div>
        <h2 className="mt-3 text-center text-[20px] sm:text-[22px] font-extrabold tracking-tight text-[#0B1736] leading-tight">
          Create Your Continuity Account
        </h2>

        <p className="mt-2 text-center text-[14px] sm:text-[16px] leading-6 text-[#4B5563]">
          Start building your Family Continuity Plan and securely organise
          important records, nominees, trusted contacts and continuity
          instructions.
        </p>

        {/* Features */}
        <div className="mt-6 rounded-2xl bg-[#F8FAFD] p-3 sm:p-4">
          <div className="grid grid-cols-3 divide-x divide-slate-200">
            <div className="flex flex-col items-center px-2">
              <Lock className="h-6 w-6 sm:h-7 sm:w-7 text-[#163B8C]" />

              <p className="mt-2 text-center text-xs sm:text-sm font-semibold">
                Secure
                <br />
                Records
              </p>
            </div>

            <div className="flex flex-col items-center px-2">
              <Users className="h-6 w-6 sm:h-7 sm:w-7 text-[#163B8C]" />

              <p className="mt-2 text-center text-xs sm:text-sm font-semibold">
                Family
                <br />
                Access
              </p>
            </div>

            <div className="flex flex-col items-center px-2">
              <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-[#163B8C]" />

              <p className="mt-2 text-center text-xs sm:text-sm font-semibold">
                Controlled
                <br />
                Release
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              placeholder="Full Name"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-4 text-sm sm:text-base outline-none"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="email"
              placeholder="Email Address"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-4 text-sm sm:text-base outline-none"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="password"
              placeholder="Create Password"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-12 text-sm sm:text-base outline-none"
            />

            <Eye className="absolute right-4 top-4 h-5 w-5 text-slate-400 cursor-pointer" />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

            <input
              type="password"
              placeholder="Confirm Password"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] pl-12 pr-12 text-sm sm:text-base outline-none"
            />

            <Eye className="absolute right-4 top-4 h-5 w-5 text-slate-400 cursor-pointer" />
          </div>
        </div>

        {/* Terms */}
        <div className="mt-4 flex items-start gap-3">
          <input type="checkbox" className="mt-1 h-5 w-5 shrink-0" />

          <p className="text-[13px] sm:text-[15px] leading-6 text-[#4B5563]">
            I agree to the{" "}
            <span className="font-semibold text-[#2453A6] hover:underline cursor-pointer">
              Terms & Privacy Policy
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#2453A6] hover:underline cursor-pointer">
              Consent Policy
            </span>
          </p>
        </div>

        {/* Button */}
        <Link href="/onboarding/verify-email">
          <button className="mt-4 flex min-h-[56px] w-full items-center rounded-2xl bg-[#163B8C] px-4 py-3 text-white transition hover:bg-[#1D4ED8]">
            <ShieldCheck className="h-5 w-5 shrink-0" />

            <span className="flex-1 text-center text-sm sm:text-[18px] font-semibold px-2 leading-5">
              Start Continuity Setup
            </span>

            <ArrowRight className="h-5 w-5 shrink-0" />
          </button>
        </Link>

        {/* Login */}
        <div className="mt-3 text-center text-sm sm:text-base">
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

        {/* Divider */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-[1px] flex-1 bg-[#E5E7EB]" />

          <ShieldCheck className="h-5 w-5 text-slate-400" />

          <div className="h-[1px] flex-1 bg-[#E5E7EB]" />
        </div>

        {/* Security Notice */}
        <div className="mt-4 rounded-2xl bg-[#F8FAFD] p-3 sm:p-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white p-2 text-[#163B8C]" />

            <p className="text-[13px] sm:text-sm leading-6 text-[#64748B]">
              Your information is encrypted and accessible only through a
              structured release process.
            </p>
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}