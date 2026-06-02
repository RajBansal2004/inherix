import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  FileCheck,
  Lock,
  AlertTriangle,
} from "lucide-react";

export default function TriggerRequestPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] space-y-8">

      {/* HEADER */}

    {/* HEADER */}

<div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 md:p-8">

  <div className="flex items-start gap-4">

    <Link
      href="/dashboard/emergency"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#DCE3EC] bg-white transition hover:bg-[#F8FAFC]"
    >
      <ArrowLeft className="h-5 w-5 text-[#0F172A]" />
    </Link>

    <div className="min-w-0 flex-1">

      <div className="flex flex-wrap items-center gap-2">

        <span className="rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-medium text-[#D97706]">
          Emergency Access Centre
        </span>

        <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#163B8C]">
          Step 1 of 3
        </span>

      </div>

      <h1 className="mt-3 text-[28px] font-semibold leading-tight text-[#0F172A] md:text-[40px]">
        Emergency Trigger Request
      </h1>

      <p className="mt-2 max-w-[700px] text-sm leading-7 text-slate-500">
        Submit a request for emergency access. Every request is reviewed,
        verified and approved before controlled access can be granted to
        continuity records.
      </p>

    </div>

  </div>

  {/* PROGRESS */}

  <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-4">

    <div className="flex items-center justify-between">

      <span className="text-sm font-medium text-[#163B8C]">
        Request Progress
      </span>

      <span className="text-sm font-semibold text-[#0F172A]">
        33%
      </span>

    </div>

    <div className="mt-3 h-2 rounded-full bg-slate-200">

      <div className="h-2 w-1/3 rounded-full bg-[#163B8C]" />

    </div>

  </div>

</div>

      {/* FORM */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-7 lg:p-8">

        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF7ED]">

            <AlertTriangle className="h-7 w-7 text-[#D97706]" />

          </div>

          <div>

            <h2 className="text-2xl font-semibold text-[#0F172A]">
              Request Information
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Help us understand the reason for this emergency request.
            </p>

          </div>

        </div>

        <div className="mt-8 grid gap-6">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Request Type
            </label>

            <select className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-4 outline-none focus:border-[#163B8C]">

              <option>Death of Account Owner</option>

              <option>Medical Emergency</option>

              <option>Legal Requirement</option>

              <option>Court Order</option>

              <option>Other</option>

            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Additional Details
            </label>

            <textarea
              rows={6}
              placeholder="Describe the situation and provide any relevant details..."
              className="w-full rounded-2xl border border-[#DCE3EC] p-5 outline-none focus:border-[#163B8C]"
            />

          </div>

        </div>

      </div>

      {/* NEXT PROCESS */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-7">

        <h2 className="text-xl font-semibold text-[#0F172A]">
          What Happens Next?
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-4">

          {[
            "Upload Proof",
            "Verification Review",
            "Approval",
            "Controlled Release",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-[#EEF2F7] p-5 text-center"
            >

              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#163B8C] text-sm font-semibold text-white">

                {index + 1}

              </div>

              <p className="mt-3 text-sm font-medium">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* TRUST */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-7">

        <h2 className="text-xl font-semibold">
          Security & Verification
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">

          <div className="flex items-center gap-3 rounded-2xl border border-[#EEF2F7] p-5">

            <ShieldCheck className="h-6 w-6 text-emerald-600" />

            <span>Identity Verification</span>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#EEF2F7] p-5">

            <FileCheck className="h-6 w-6 text-[#163B8C]" />

            <span>Supporting Documents</span>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#EEF2F7] p-5">

            <Lock className="h-6 w-6 text-[#163B8C]" />

            <span>Audit Protected</span>

          </div>

        </div>

      </div>

      {/* CTA */}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

        <Link
          href="/dashboard/emergency"
          className="flex h-14 items-center justify-center rounded-2xl border border-[#DCE3EC] px-8 text-sm font-medium"
        >
          Cancel
        </Link>

        <Link
          href="/dashboard/emergency/upload-proof"
          className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#163B8C] px-8 text-sm font-medium text-white shadow-lg transition hover:bg-[#102C6B]"
        >
          Continue

          <ChevronRight className="h-4 w-4" />
        </Link>

      </div>

    </div>
  );
}