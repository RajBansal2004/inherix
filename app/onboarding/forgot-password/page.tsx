import Link from "next/link";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

export default function ForgotPasswordScreen() {
  return (
    <DeviceFrame>

      <div className="px-6 py-8 sm:px-8">

        <h1 className="text-center text-3xl font-semibold text-[#0F172A]">
          Forgot Password
        </h1>

        <p className="mt-3 text-center text-sm text-slate-500">
          Enter your email to receive a reset link.
        </p>

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

        <input
          type="email"
          placeholder="Email Address"
          className="mt-8 h-14 w-full rounded-2xl border border-[#DCE3EC] px-5"
        />

        <Link href="/onboarding/reset-password">

          <button className="mt-6 h-14 w-full rounded-2xl bg-[#163B8C] text-white">
            Send Reset Link
          </button>

        </Link>

      </div>

    </DeviceFrame>
  );
}