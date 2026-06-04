import Link from "next/link";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

export default function ResetPasswordScreen() {
  return (
    <DeviceFrame>

      <div className="px-6 py-8 sm:px-8">

        <h1 className="text-center text-3xl font-semibold text-[#0F172A]">
          Reset Password
        </h1>

        <p className="mt-3 text-center text-sm text-slate-500">
          Create a new secure password.
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

        <div className="mt-8 space-y-4">

          <input
            type="password"
            placeholder="New Password"
            className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5"
          />

        </div>

        <Link href="/onboarding/login">

          <button className="mt-6 h-14 w-full rounded-2xl bg-[#163B8C] text-white">
            Update Password
          </button>

        </Link>

      </div>

    </DeviceFrame>
  );
}