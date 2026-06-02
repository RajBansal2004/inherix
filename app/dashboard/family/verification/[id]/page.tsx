import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  User,
  Phone,
  Mail,
} from "lucide-react";

export default function VerificationDetailPage() {
  return (
    <div className="mx-auto max-w-[1000px] space-y-6">

      {/* HERO SECTION */}

      <div className="rounded-[36px] border border-[#DCE3EC] bg-white p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-5">

            <Link
              href="/dashboard/family/verification"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCE3EC]"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF4FF]">
              <User className="h-8 w-8 text-[#163B8C]" />
            </div>

            <div>

              <p className="text-sm font-medium text-[#163B8C]">
                Beneficiary Verification
              </p>

              <h1 className="mt-1 text-[36px] font-semibold text-[#0F172A]">
                Rahul Sharma
              </h1>

              <p className="mt-2 text-slate-500">
                Spouse • Primary Beneficiary
              </p>

            </div>

          </div>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            Verified
          </span>

        </div>

        {/* SCORE */}

        <div className="mt-8">

          <div className="flex items-center justify-between">

            <p className="text-sm text-slate-500">
              Verification Completion
            </p>

            <p className="font-semibold text-[#163B8C]">
              100%
            </p>

          </div>

          <div className="mt-3 h-3 rounded-full bg-[#EEF2F7]">

            <div className="h-3 w-full rounded-full bg-emerald-500" />

          </div>

          <p className="mt-4 text-sm text-emerald-600 font-medium">
            Approved for emergency access and continuity workflows.
          </p>

        </div>

      </div>

      {/* PROFILE + STATUS */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-7">

          <h2 className="text-xl font-semibold text-[#0F172A]">
            Beneficiary Information
          </h2>

          <div className="mt-6 space-y-5">

            <div className="flex items-center gap-3">

              <Mail className="h-5 w-5 text-[#163B8C]" />

              <span>rahul@gmail.com</span>

            </div>

            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 text-[#163B8C]" />

              <span>+91 9876543210</span>

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Relationship
              </p>

              <h3 className="mt-1 font-semibold">
                Spouse
              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-7">

          <h2 className="text-xl font-semibold text-[#0F172A]">
            Access Eligibility
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex items-center justify-between">

              <span>Emergency Access</span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Eligible
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span>Continuity Access</span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Approved
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span>Document Access</span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Active
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* CHECKLIST */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-8">

        <h2 className="text-xl font-semibold text-[#0F172A]">
          Verification Checklist
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Required checks completed for beneficiary approval.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-[#EEF2F7] p-5">

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-[#0F172A]">
                Aadhaar Verification
              </h3>

              <CheckCircle2 className="h-5 w-5 text-emerald-600" />

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Government identity successfully validated.
            </p>

          </div>

          <div className="rounded-2xl border border-[#EEF2F7] p-5">

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-[#0F172A]">
                PAN Verification
              </h3>

              <CheckCircle2 className="h-5 w-5 text-emerald-600" />

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Tax identity verification completed.
            </p>

          </div>

          <div className="rounded-2xl border border-[#EEF2F7] p-5">

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-[#0F172A]">
                Relationship Verification
              </h3>

              <CheckCircle2 className="h-5 w-5 text-emerald-600" />

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Family relationship confirmed and approved.
            </p>

          </div>

          <div className="rounded-2xl border border-[#EEF2F7] p-5">

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-[#0F172A]">
                KYC Completion
              </h3>

              <CheckCircle2 className="h-5 w-5 text-emerald-600" />

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Compliance and verification checks completed.
            </p>

          </div>

        </div>

      </div>

      {/* TIMELINE */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-8">

        <h2 className="text-xl font-semibold text-[#0F172A]">
          Verification Timeline
        </h2>

        <div className="mt-8 space-y-8">

          <div className="relative border-l-2 border-[#EEF2F7] pl-8">

            <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#163B8C]" />

            <h3 className="font-semibold">
              Documents Submitted
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Aadhaar and PAN uploaded for verification.
            </p>

            <p className="mt-2 text-xs text-slate-400">
              12 May 2025
            </p>

          </div>

          <div className="relative border-l-2 border-[#EEF2F7] pl-8">

            <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-emerald-500" />

            <h3 className="font-semibold">
              Verification Approved
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Identity and relationship verification completed.
            </p>

            <p className="mt-2 text-xs text-slate-400">
              14 May 2025
            </p>

          </div>

        </div>

      </div>

      {/* CONTINUITY MESSAGE */}

      <div className="rounded-[32px] bg-[#EEF4FF] p-8">

        <h3 className="text-xl font-semibold text-[#0F172A]">
          Family Continuity Protection
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Verified beneficiaries ensure your legacy reaches the right people.
          Completing verification today helps your family receive guidance,
          access and continuity support during critical life events.
        </p>

      </div>

    </div>
  );
}