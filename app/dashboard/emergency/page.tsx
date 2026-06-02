import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  Clock3,
  FileCheck,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";

export default function EmergencyDashboardPage() {
  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}

       {/* PAGE HEADER */}

<div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 lg:p-8">

  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <div className="flex flex-wrap items-center gap-2">

        <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#163B8C]">
          Emergency Access Centre
        </span>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          System Protected
        </span>

      </div>

      <h1 className="mt-4 text-[38px] font-semibold tracking-tight text-[#0F172A]">
        Emergency Trigger Dashboard
      </h1>

      <p className="mt-3 max-w-[750px] text-slate-500">
        Manage emergency access requests, beneficiary verification,
        document release workflows and compliance reviews from a
        single secure dashboard.
      </p>

    </div>

    <Link
      href="/dashboard/emergency/request"
      className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#163B8C] px-8 text-sm font-semibold text-white shadow-lg transition hover:bg-[#102C6B]"
    >
      Start Request

      <ChevronRight className="h-4 w-4" />

    </Link>

  </div>

</div>

      {/* STATUS + PROGRESS */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* STATUS */}

        <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">

              <ShieldCheck className="h-7 w-7 text-emerald-600" />

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Emergency Status
              </p>

              <h3 className="mt-1 text-2xl font-semibold text-emerald-600">
                NORMAL
              </h3>

            </div>

          </div>

          <div className="mt-5 rounded-2xl bg-[#F8FAFC] p-4">

            <p className="text-sm text-slate-500">
              No active emergency requests are currently in progress.
            </p>

          </div>

        </div>

        {/* PROGRESS */}

        <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

          <p className="text-sm text-slate-500">
            Emergency Preparedness
          </p>

          <h3 className="mt-2 text-[36px] font-semibold text-[#0F172A]">
            78%
          </h3>

          <div className="mt-5 h-3 rounded-full bg-slate-100">

            <div className="h-3 w-[78%] rounded-full bg-[#163B8C]" />

          </div>

          <p className="mt-3 text-sm text-slate-500">
            Your continuity records are mostly protected and ready.
          </p>

        </div>

      </div>

      

      {/* TRUST BADGES */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

        <h2 className="text-xl font-semibold text-[#0F172A]">
          Security & Verification
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-[#EEF2F7] p-5">

            <ShieldCheck className="h-8 w-8 text-[#163B8C]" />

            <h3 className="mt-3 font-semibold">
              Identity Verified
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Primary account verified.
            </p>

          </div>

          <div className="rounded-2xl border border-[#EEF2F7] p-5">

            <FileCheck className="h-8 w-8 text-[#163B8C]" />

            <h3 className="mt-3 font-semibold">
              Documents Verified
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Records successfully verified.
            </p>

          </div>

          <div className="rounded-2xl border border-[#EEF2F7] p-5">

            <HeartHandshake className="h-8 w-8 text-[#163B8C]" />

            <h3 className="mt-3 font-semibold">
              Beneficiaries Ready
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Trusted people assigned.
            </p>

          </div>

          <div className="rounded-2xl border border-[#EEF2F7] p-5">

            <ShieldAlert className="h-8 w-8 text-[#163B8C]" />

            <h3 className="mt-3 font-semibold">
              Audit Protected
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Every action is logged securely.
            </p>

          </div>

        </div>

      </div>

      {/* WORKFLOW */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 lg:p-8">

        <h2 className="text-xl font-semibold text-[#0F172A]">
          Emergency Workflow
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Controlled release process followed during emergencies.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">

          {[
            "Request",
            "Upload Proof",
            "Verification",
            "Approval",
            "Access Granted",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-[#EEF2F7] p-4 text-center"
            >

              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#163B8C] text-sm font-semibold text-white">

                {index + 1}

              </div>

              <p className="mt-3 text-sm font-medium text-[#0F172A]">
                {step}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* REVIEW TIME */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

        <div className="flex items-center gap-4">

          <Clock3 className="h-8 w-8 text-[#163B8C]" />

          <div>

            <h3 className="font-semibold text-[#0F172A]">
              Verification SLA
            </h3>

            <p className="text-sm text-slate-500">
              Emergency requests are typically reviewed within 24–48 hours.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}