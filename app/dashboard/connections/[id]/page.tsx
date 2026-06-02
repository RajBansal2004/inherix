import Link from "next/link";

import {
  ArrowLeft,
  MoreVertical,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function ConnectionDetailPage() {
  return (
    <div className="mx-auto w-full max-w-[760px]">

      {/* CARD */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 md:p-8">

        {/* TOP BAR */}

        <div className="flex items-center justify-between">

          {/* BACK */}

          <Link
            href="/dashboard/connections"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DCE3EC] bg-white transition hover:bg-[#F8FAFC]"
          >

            <ArrowLeft className="h-5 w-5 text-[#0F172A]" />

          </Link>

          {/* MENU */}

          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DCE3EC] bg-white transition hover:bg-[#F8FAFC]">

            <MoreVertical className="h-5 w-5 text-slate-500" />

          </button>

        </div>

        {/* PROFILE */}

        <div className="mt-8 flex flex-col items-center text-center">

          {/* AVATAR */}

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#EEF4FF] text-[28px] font-semibold text-[#163B8C]">

            SJ

          </div>

          {/* NAME */}

          <h1 className="mt-5 text-[30px] font-semibold tracking-tight text-[#0F172A]">

            Sarah Johnson

          </h1>

          <p className="mt-1 text-sm text-slate-500">

            Spouse

          </p>

        </div>

        {/* ACCESS */}

        <div className="mt-8 rounded-[28px] bg-[#F8FAFC] p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF]">

              <ShieldCheck className="h-5 w-5 text-[#163B8C]" />

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Access Level
              </p>

              <h3 className="mt-1 text-lg font-semibold text-[#0F172A]">
                View Only
              </h3>

            </div>

          </div>

        </div>

        {/* PERMISSIONS */}

        <div className="mt-8">

          <h3 className="text-lg font-semibold text-[#0F172A]">
            Permissions
          </h3>

          <div className="mt-4 space-y-3">

            <div className="rounded-2xl border border-[#EEF2F7] bg-white p-4 text-sm text-slate-600">
              • View all information
            </div>

            <div className="rounded-2xl border border-[#EEF2F7] bg-white p-4 text-sm text-slate-600">
              • Edit all information
            </div>

            <div className="rounded-2xl border border-[#EEF2F7] bg-white p-4 text-sm text-slate-600">
              • Manage connections
            </div>

          </div>

        </div>

        {/* BUTTON */}

        <button className="mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#163B8C] text-sm font-medium text-white transition hover:bg-[#102C6B]">

          <MessageSquare className="h-4 w-4" />

          Message

        </button>

      </div>

    </div>
  );
}