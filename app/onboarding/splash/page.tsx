import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Users,
  Shield,
  Globe,
  ShieldCheck,
  ArrowRight,
  Info,
} from "lucide-react";

export default function SplashScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F4F6FA] p-4">

      <div className="w-full max-w-[430px] overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-sm">

        <div className="px-6 pt-8 pb-8">

          <div className="flex justify-center">

            <div className="rounded-full bg-[#EEF3FF] px-6 py-3">

              <p className="text-sm font-medium text-[#163B8C]">
                Plan Your Family Continuity
              </p>

            </div>

          </div>


          <div className="mt-4 flex items-center justify-center gap-1">

            <Image
              src="/logo.png"
              alt="INHERIX Logo"
              width={90}
              height={90}
              className="h-[72px] w-[72px] object-contain sm:h-[90px] sm:w-[90px]"
              priority
            />

            <h1 className="text-[42px] font-extrabold leading-none tracking-tight text-[#0B1736] sm:text-[64px]">
              INHERIX
            </h1>

          </div>

          <div className="flex items-center gap-4">

            <div className="h-[1px] flex-1 bg-[#D3DDF0]" />

            <p className="whitespace-nowrap text-[18px] font-semibold text-[#1483CD]">
              Digital Continuity Institution
            </p>

            <div className="h-[1px] flex-1 bg-[#D3DDF0]" />

          </div>

          <div className="mt-2 text-center">

            <p className="text-[16px] leading-6 text-[#374151]">

              Secure important family information and ensure
              controlled access{" "}

              <span className="font-bold text-[#163B8C]">
                when your family needs it most.
              </span>

            </p>

          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

            <div className="flex items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-[#FAFBFD] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">

              <Lock className="h-6 w-6 shrink-0 text-[#163B8C]" />

              <p className="text-sm font-semibold leading-5 text-[#163B8C]">
                Secure
                Records
              </p>

            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-[#FAFBFD] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">

              <Users className="h-6 w-6 shrink-0 text-[#163B8C]" />

              <p className="text-sm font-semibold leading-5 text-[#163B8C]">
                Family
                Access
              </p>

            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-[#FAFBFD] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">

              <Shield className="h-6 w-6 shrink-0 text-[#163B8C]" />

              <p className="text-sm font-semibold leading-5 text-[#163B8C]">
                Controlled
                Release
              </p>

            </div>

          </div>


          <div className="mt-5 flex items-center gap-4">

            <div className="h-[1px] flex-1 bg-[#E5E7EB]" />

            <ShieldCheck className="h-5 w-5 text-[#C5CBD6]" />

            <div className="h-[1px] flex-1 bg-[#E5E7EB]" />

          </div>

          <p className="mt-4 text-center text-[17px] leading-6 text-[#4B5563]">

            Trusted process for organising continuity
            information, instructions and important records.

          </p>

          <div className="mt-3 border-t border-dashed border-[#D9DEE8] pt-6 text-center">

            <div className="flex items-center justify-center gap-2">

              <Globe className="h-5 w-5 text-[#5D8BFF]" />

              <span className="text-[18px] font-bold text-[#163B8C]">
                www.inherix.net
              </span>

            </div>

            <p className="mt-2 text-[18px] font-bold text-[#163B8C]">
              Secure • Organise • Continue
            </p>

          </div>


          <Link href="/onboarding/welcome">

            <button className="mt-6 flex h-[60px] w-full items-center justify-between rounded-2xl bg-[#163B8C] px-4 text-white transition hover:bg-[#1D4ED8]">

              <ShieldCheck className="h-6 w-6 shrink-0" />

              <span className="flex-1 text-center text-[17px] font-semibold">
                Start Your Family Continuity Plan
              </span>

              <ArrowRight className="h-6 w-6 shrink-0" />

            </button>

          </Link>

        </div>

        <div className="border-t border-[#E5E7EB] bg-[#FAFAFA] px-6 py-5">

          <div className="flex items-start gap-3">

            <Info className="mt-1 h-5 w-5 shrink-0 text-slate-500" />

            <p className="text-[13px] leading-6 text-[#6B7280]">

              INHERIX is not a bank, legal advisor or insurance company.
              It provides a structured continuity management platform.

            </p>

          </div>

        </div>

      </div>

    </main>
  );
}