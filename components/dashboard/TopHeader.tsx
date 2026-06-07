import {
  Bell,
  FolderOpen,
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

            Welcome !

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

          <div className="rounded-2xl border border-[#E8EDF5] bg-[#F8FAFC] px-4 py-3">

            <div className="flex items-start gap-2">

              <div className="mt-0.5">

                <FolderOpen className="h-4 w-4 text-[#E8B24A]" />

              </div>

              <div>

                <p className="text-[12px] font-medium text-[#7B8794]">
                  Plan Status
                </p>

                <h3 className="mt-0.5 text-[15px] font-semibold text-[#F0B429]">
                  In Progress
                </h3>

              </div>

            </div>

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