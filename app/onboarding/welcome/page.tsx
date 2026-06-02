import Image from "next/image";
import Link from "next/link";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

export default function WelcomeScreen() {
  return (
    <DeviceFrame>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col px-8 py-10">

  {/* TOP */}
  <div className="flex flex-col items-center">

    <Image
      src="/logo.png"
      alt="INHERIX"
      width={120}
      height={120}
      className="object-contain"
    />

    <div className="mt-4 text-center">

      <h1 className="text-[38px] font-semibold leading-[48px] tracking-tight text-[#0F172A]">
        Welcome to
        <br />
        INHERIX
      </h1>

      <p className="mt-6 text-[18px] leading-7 text-[#64748B]">
        Plan today.
        <br />
        Protect tomorrow.
        <br />
        Empower forever.
      </p>

    </div>

  </div>

  {/* BOTTOM */}
  <div className="mt-10">

    <Link href="/onboarding/create-account">
      <button className="h-14 w-full rounded-2xl bg-[#163B8C] text-[16px] font-medium text-white transition hover:bg-[#1D4ED8]">
        Get Started
      </button>
    </Link>

    <button className="mt-6 w-full text-[15px] font-medium text-[#64748B]">
      Already have an account?
      <span className="ml-1 text-[#163B8C]">
        Log in
      </span>
    </button>

  </div>

</div>

    </DeviceFrame>
  );
}