import Link from "next/link";

import {
  ChevronRight,
  CircleCheckBig,
  Target,
  CheckCircle2,
  CircleDashed,
} from "lucide-react";

export default function TasksPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-6 lg:space-y-8">

      {/* HERO */}

      <div className="overflow-hidden rounded-[32px] border border-[#DCE3EC] bg-white">

        <div className="relative p-6 sm:p-8 lg:p-10">

          {/* BG EFFECT */}

          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#EEF4FF] blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8">

            {/* TOP */}

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#163B8C]">
                Legacy Planning
              </p>

              <h1 className="mt-4 text-[34px] font-semibold tracking-tight text-[#0F172A] sm:text-[44px]">
                Tasks
              </h1>

              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                Track continuity planning tasks and prepare your
                legacy information securely for your family.
              </p>

            </div>

            {/* STATS */}

            <div className="grid gap-5 md:grid-cols-3">

              {/* OVERALL */}

              <div className="rounded-[28px] border border-[#EEF2F7] bg-[#FCFCFD] p-6">

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-sm font-medium text-slate-500">
                      Overall Progress
                    </p>

                    <h3 className="mt-3 text-[42px] font-semibold text-[#0F172A]">
                      60%
                    </h3>

                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                    <Target className="h-7 w-7 text-[#163B8C]" />

                  </div>

                </div>

                {/* BAR */}

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#E2E8F0]">

                  <div className="h-full w-[60%] rounded-full bg-[#163B8C]" />

                </div>

              </div>

              {/* IN PROGRESS */}

              <div className="rounded-[28px] border border-[#EEF2F7] bg-[#FCFCFD] p-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">

                  <CircleDashed className="h-6 w-6 text-amber-700" />

                </div>

                <h3 className="mt-5 text-[42px] font-semibold text-[#0F172A]">
                  3
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  In Progress
                </p>

              </div>

              {/* COMPLETED */}

              <div className="rounded-[28px] border border-[#EEF2F7] bg-[#FCFCFD] p-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">

                  <CheckCircle2 className="h-6 w-6 text-emerald-700" />

                </div>

                <h3 className="mt-5 text-[42px] font-semibold text-[#0F172A]">
                  5
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Completed
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* NEXT UP */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 sm:p-7">

        {/* TOP */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <h2 className="text-[28px] font-semibold text-[#0F172A]">
              Next Up
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Continue your priority continuity task.
            </p>

          </div>

          <span className="w-fit rounded-full bg-red-100 px-4 py-2 text-xs font-medium text-red-700">
            High Priority
          </span>

        </div>

        {/* TASK */}

        <Link
          href="/dashboard/tasks/1"
          className="group mt-6 flex flex-col gap-5 rounded-[28px] border border-[#DCE3EC] p-5 transition hover:border-[#163B8C] hover:bg-[#F8FBFF] sm:flex-row sm:items-center sm:justify-between"
        >

          {/* LEFT */}

          <div className="flex items-center gap-4">

            {/* ICON */}

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FF] transition group-hover:bg-[#163B8C]">

              <CircleCheckBig className="h-7 w-7 text-[#163B8C] group-hover:text-white" />

            </div>

            {/* TEXT */}

            <div>

              <h3 className="text-[20px] font-semibold text-[#0F172A]">
                Create Will
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                Complete your inheritance and continuity planning
                documentation securely.
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2">

                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                  High Priority
                </span>

                <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#163B8C]">
                  15 min
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E2E8F0] transition group-hover:border-[#163B8C] group-hover:bg-[#163B8C]">

            <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-white" />

          </div>

        </Link>

        {/* BUTTON */}

        <Link
          href="/dashboard/tasks/all"
          className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-[#0F172A] text-sm font-medium text-white transition hover:bg-[#163B8C]"
        >

          View All Tasks

        </Link>

      </div>

    </div>
  );
}