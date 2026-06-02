import {
  Bell,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

export default function TopHeader() {
  return (
    <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 lg:p-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-4 py-2">

            <ShieldCheck className="h-4 w-4 text-[#163B8C]" />

            <span className="text-xs font-medium text-[#163B8C]">
              Continuity Plan Protected
            </span>

          </div>

          <h1 className="text-[34px] font-semibold tracking-tight text-[#0F172A]">

          Welcome Mr. Amit Tyagi

        </h1>

          <p className="mt-3 text-[15px] text-slate-500">

            Your family continuity plan is
            <span className="font-semibold text-[#163B8C]">
              {" "}78% protected
            </span>
            . Continue securing important records and beneficiaries.

          </p>

        </div>

        <div className="flex items-center gap-3">

          <div className="rounded-2xl border border-[#DCE3EC] bg-[#F8FAFC] px-5 py-3">

            <p className="text-xs text-slate-500">
              Overall Status
            </p>

            <h3 className="mt-1 text-sm font-semibold text-emerald-600">
              Secure
            </h3>

          </div>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCE3EC] bg-white">

            <Bell className="h-5 w-5" />

          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCE3EC] bg-white">

            <HelpCircle className="h-5 w-5" />

          </button>

        </div>

      </div>

    </div>
  );
}