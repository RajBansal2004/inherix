import Link from "next/link";
import {
  ShieldCheck,
  Clock3,
  CheckCircle2,
  Circle,
  FileCheck,
  UserCheck,
  ChevronRight,
} from "lucide-react";

export default function VerificationQueuePage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] space-y-8">

      {/* HEADER */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 md:p-8">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF4FF]">

            <ShieldCheck className="h-6 w-6 text-[#163B8C]" />

          </div>

          <div className="flex-1">

            <div className="flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#163B8C]">
                Emergency Access Centre
              </span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Request Submitted
              </span>

            </div>

            <h1 className="mt-3 text-[30px] font-semibold text-[#0F172A] md:text-[40px]">
              Verification Review
            </h1>

            <p className="mt-2 max-w-[700px] text-sm leading-7 text-slate-500">
              Your emergency request has been successfully submitted.
              Our verification team is currently reviewing your
              documents and beneficiary access requirements.
            </p>

          </div>

        </div>

        {/* PROGRESS */}

        <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-4">

          <div className="flex items-center justify-between">

            <span className="text-sm font-medium text-[#163B8C]">
              Verification Progress
            </span>

            <span className="text-sm font-semibold text-[#0F172A]">
              Submitted
            </span>

          </div>

          <div className="mt-3 h-2 rounded-full bg-slate-200">

            <div className="h-2 w-full rounded-full bg-[#163B8C]" />

          </div>

        </div>

      </div>

      {/* STATUS SECTION */}

      <div className="rounded-[36px] border border-[#DCE3EC] bg-white p-8 md:p-10">

        <div className="flex flex-col items-center text-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#FFF7ED]">

            <Clock3 className="h-14 w-14 text-amber-600" />

          </div>

          <h2 className="mt-6 text-[34px] font-semibold text-[#0F172A]">
            Under Review
          </h2>

          <p className="mt-3 max-w-[650px] text-slate-500">
            Verification specialists are currently reviewing the
            submitted documents. Access will only be granted after
            identity validation, document approval and compliance review.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="rounded-full bg-[#EEF4FF] px-4 py-2 text-sm text-[#163B8C]">
              Identity Verified
            </span>

            <span className="rounded-full bg-[#EEF4FF] px-4 py-2 text-sm text-[#163B8C]">
              Documents Received
            </span>

            <span className="rounded-full bg-[#FFF7ED] px-4 py-2 text-sm text-amber-700">
              Human Review In Progress
            </span>

          </div>

        </div>

        {/* INFO CARDS */}

        <div className="mt-10 grid gap-4 md:grid-cols-3">

          <div className="rounded-3xl border border-[#EEF2F7] bg-[#FAFBFC] p-5">

            <p className="text-xs uppercase tracking-wider text-slate-500">
              Request ID
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">
              EMG-2025-00124
            </h3>

          </div>

          <div className="rounded-3xl border border-[#EEF2F7] bg-[#FAFBFC] p-5">

            <p className="text-xs uppercase tracking-wider text-slate-500">
              Submitted On
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">
              Today
            </h3>

          </div>

          <div className="rounded-3xl border border-[#EEF2F7] bg-[#FAFBFC] p-5">

            <p className="text-xs uppercase tracking-wider text-slate-500">
              Estimated Review
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">
              24 - 48 Hours
            </h3>

          </div>

        </div>

      </div>

     {/* TIMELINE + STATUS */}

<div className="grid gap-6 lg:grid-cols-[1.5fr_400px]">

  {/* LEFT */}

  <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-7">

    <h2 className="text-2xl font-semibold text-[#0F172A]">
      Verification Journey
    </h2>

    <p className="mt-2 text-sm text-slate-500">
      Track every stage of your emergency access request.
    </p>

<div className="mt-8 space-y-8">

          <div className="flex gap-4">

            <CheckCircle2 className="h-6 w-6 text-emerald-600" />

            <div>

              <h3 className="font-semibold text-[#0F172A]">
                Request Submitted
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Emergency request submitted successfully.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <CheckCircle2 className="h-6 w-6 text-emerald-600" />

            <div>

              <h3 className="font-semibold text-[#0F172A]">
                Supporting Documents Uploaded
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Required evidence has been received.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <Clock3 className="h-6 w-6 text-amber-600" />

            <div>

              <h3 className="font-semibold text-[#0F172A]">
                Verification Review
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Verification team is reviewing documents.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <Circle className="h-6 w-6 text-slate-300" />

            <div>

              <h3 className="font-semibold text-slate-400">
                Approval Pending
              </h3>

            </div>

          </div>

          <div className="flex gap-4">

            <Circle className="h-6 w-6 text-slate-300" />

            <div>

              <h3 className="font-semibold text-slate-400">
                Secure Access Release
              </h3>

            </div>

          </div>

        </div>
  </div>

  {/* RIGHT */}

  <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-7">

    <h2 className="text-xl font-semibold text-[#0F172A]">
      Current Status
    </h2>

    <p className="mt-2 text-sm text-slate-500">
      Verification is actively being processed.
    </p>

    <div className="mt-6 space-y-4">

      <div className="rounded-2xl bg-emerald-50 p-4">

        <p className="text-xs text-slate-500">
          Identity Verification
        </p>

        <h3 className="mt-1 font-semibold text-emerald-700">
          Completed
        </h3>

      </div>

      <div className="rounded-2xl bg-amber-50 p-4">

        <p className="text-xs text-slate-500">
          Document Review
        </p>

        <h3 className="mt-1 font-semibold text-amber-700">
          In Progress
        </h3>

      </div>

      <div className="rounded-2xl bg-slate-50 p-4">

        <p className="text-xs text-slate-500">
          Human Approval
        </p>

        <h3 className="mt-1 font-semibold text-slate-500">
          Waiting
        </h3>

      </div>

      <div className="rounded-2xl bg-[#EEF4FF] p-4">

        <p className="text-xs text-slate-500">
          Estimated Completion
        </p>

        <h3 className="mt-1 font-semibold text-[#163B8C]">
          Within 24-48 Hours
        </h3>

      </div>

    </div>

  </div>

</div>

      {/* SECURITY */}

      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-6">

          <ShieldCheck className="h-9 w-9 text-emerald-600" />

          <h3 className="mt-4 text-lg font-semibold">
            Identity Validation
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Beneficiary identity and relationship verification.
          </p>

        </div>

        <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-6">

          <FileCheck className="h-9 w-9 text-[#163B8C]" />

          <h3 className="mt-4 text-lg font-semibold">
            Document Review
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Supporting proof and legal documentation review.
          </p>

        </div>

        <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-6">

          <UserCheck className="h-9 w-9 text-[#163B8C]" />

          <h3 className="mt-4 text-lg font-semibold">
            Human Approval
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Manual compliance and governance review process.
          </p>

        </div>

      </div>

      {/* CTA */}

      <div className="flex justify-center">

        <Link
          href="/dashboard"
          className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#163B8C] px-8 text-sm font-medium text-white shadow-lg transition hover:bg-[#102C6B]"
        >
          Back To Dashboard

          <ChevronRight className="h-4 w-4" />

        </Link>

      </div>

    </div>
  );
}