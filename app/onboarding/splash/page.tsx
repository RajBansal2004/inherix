import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
export default function SplashScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F3F5F9] p-4">

      <div className="relative w-full max-w-[390px] rounded-[18px] border border-slate-300 bg-white shadow-sm">

        <div className="flex flex-col items-center px-6 pt-8 pb-28 sm:px-8">

          <div className="rounded-full bg-[#EEF4FF] px-4 py-2">

            <p className="text-center text-sm font-medium text-[#163B8C] sm:text-base">
              Plan Your Digital Continuity with
            </p>

          </div>

          <div className="mt-4 flex items-center">

            <Image
              src="/logo.png"
              alt="INHERIX"
              width={85}
              height={85}
              className="h-[70px] w-[70px] object-contain sm:h-[85px] sm:w-[85px]"
              priority
            />

            <h1 className="text-[40px] font-bold tracking-tight text-[#111827] sm:text-[52px]">
              INHERIX
            </h1>

          </div>
          <p className="text-center text-sm font-medium text-slate-600">
            Secure Today. Continue Tomorrow.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">

            <div className="flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-3 py-1">

              <Lock className="h-3.5 w-3.5 text-[#163B8C]" />

              <span className="text-[11px] font-medium text-[#163B8C] sm:text-xs">
                Secure Records
              </span>

            </div>

            <div className="flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1">

              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />

              <span className="text-[11px] font-medium text-emerald-700 sm:text-xs">
                Verified Access
              </span>

            </div>

            <div className="flex items-center gap-1 rounded-full border border-violet-100 bg-violet-50 px-3 py-1">

              <FileCheck className="h-3.5 w-3.5 text-violet-600" />

              <span className="text-[11px] font-medium text-violet-700 sm:text-xs">
                Emergency Release
              </span>

            </div>

          </div>

          <div className="mt-5 w-full border-y border-dashed border-slate-300 py-3">

            <p className="text-center text-xs leading-6 text-[#6B7280] sm:text-sm">
              INHERIX is not a legal advisor, bank, or insurance company.
              It helps families organise continuity information securely.
            </p>

          </div>

          <div className="mt-4 text-center">

            <p className="text-base font-semibold text-[#111827] sm:text-lg">
              www.inherix.net
            </p>

            <p className="mt-2 text-sm font-semibold text-[#163B8C] sm:text-base">
              Secure • Organise • Continue
            </p>

          </div>

        </div>

        <div className="absolute bottom-6 left-0 w-full px-6">

          <Link href="/onboarding/welcome">

            <button className="h-14 w-full rounded-2xl bg-[#163B8C] text-sm font-semibold text-white transition hover:bg-[#1D4ED8]">
              Continue
            </button>

          </Link>

        </div>

      </div>

    </main>
  );
}