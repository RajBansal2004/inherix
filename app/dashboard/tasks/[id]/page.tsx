import Link from "next/link";

import {
  ArrowLeft,
  CircleCheckBig,
  Clock3,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function TaskDetailPage() {
  return (
    <div className="mx-auto max-w-[1100px] space-y-6 lg:space-y-8">

      {/* HEADER */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}

        <div>

          <Link
            href="/dashboard/tasks"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#163B8C]"
          >

            <ArrowLeft className="h-4 w-4" />

            Back to Tasks

          </Link>

          <h1 className="mt-4 text-[34px] font-semibold tracking-tight text-[#0F172A] sm:text-[44px]">
            Create Will
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-red-100 px-4 py-2 text-xs font-medium text-red-700">
              High Priority
            </span>

            <span className="flex items-center gap-2 rounded-full bg-[#EEF4FF] px-4 py-2 text-xs font-medium text-[#163B8C]">

              <Clock3 className="h-4 w-4" />

              15 min

            </span>

          </div>

        </div>

        {/* BUTTON */}

        <button className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#0F172A] px-6 text-sm font-medium text-white transition hover:bg-[#163B8C]">

          <CheckCircle2 className="h-5 w-5" />

          Mark as Complete

        </button>

      </div>

      {/* BODY */}

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT CONTENT */}

        <div className="space-y-6">

          {/* WHY IMPORTANT */}

          <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                <ShieldCheck className="h-6 w-6 text-[#163B8C]" />

              </div>

              <div>

                <h2 className="text-[24px] font-semibold text-[#0F172A]">
                  Why is this important?
                </h2>

                <p className="mt-4 text-sm leading-8 text-slate-500 sm:text-base">

                  A will ensures your assets, investments and important
                  belongings are distributed according to your wishes.
                  It helps reduce legal disputes and provides clarity
                  for your family during critical moments.

                </p>

              </div>

            </div>

          </div>

          {/* WHAT YOU NEED */}

          <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 sm:p-7">

            <h2 className="text-[24px] font-semibold text-[#0F172A]">
              What you'll need
            </h2>

            <div className="mt-6 space-y-4">

              {/* ITEM */}

              <div className="flex items-start gap-4 rounded-[24px] border border-[#EEF2F7] bg-[#FCFCFD] p-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF]">

                  <CircleCheckBig className="h-5 w-5 text-[#163B8C]" />

                </div>

                <div>

                  <h3 className="text-[16px] font-semibold text-[#0F172A]">
                    Personal Information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Full legal name, address, nominee and identity details.
                  </p>

                </div>

              </div>

              {/* ITEM */}

              <div className="flex items-start gap-4 rounded-[24px] border border-[#EEF2F7] bg-[#FCFCFD] p-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF]">

                  <CircleCheckBig className="h-5 w-5 text-[#163B8C]" />

                </div>

                <div>

                  <h3 className="text-[16px] font-semibold text-[#0F172A]">
                    Asset Details
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Information about property, bank accounts, insurance
                    and investments.

                  </p>

                </div>

              </div>

              {/* ITEM */}

              <div className="flex items-start gap-4 rounded-[24px] border border-[#EEF2F7] bg-[#FCFCFD] p-5">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF]">

                  <CircleCheckBig className="h-5 w-5 text-[#163B8C]" />

                </div>

                <div>

                  <h3 className="text-[16px] font-semibold text-[#0F172A]">
                    Beneficiary Information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Trusted family members and inheritance allocation details.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}

        <div className="space-y-6">

          {/* TASK STATUS */}

          <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Task Status
                </p>

                <h3 className="mt-2 text-[32px] font-semibold text-[#0F172A]">
                  In Progress
                </h3>

              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">

                <Clock3 className="h-7 w-7 text-amber-700" />

              </div>

            </div>

            {/* BAR */}

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#E2E8F0]">

              <div className="h-full w-[60%] rounded-full bg-[#163B8C]" />

            </div>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              You're currently working on this continuity planning task.
            </p>

          </div>

          {/* NEXT TASK */}

          <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

            <h2 className="text-[22px] font-semibold text-[#0F172A]">
              Next Task
            </h2>

            <Link
              href="/dashboard/tasks/2"
              className="group mt-5 flex items-center justify-between rounded-[24px] border border-[#E2E8F0] p-4 transition hover:border-[#163B8C] hover:bg-[#F8FBFF]"
            >

              <div>

                <h3 className="text-[16px] font-semibold text-[#0F172A]">
                  Add Beneficiaries
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  High Priority • 10 min
                </p>

              </div>

              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-[#163B8C]" />

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}