import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  ShieldCheck,
  User,
  Lock,
  ChevronRight,
} from "lucide-react";

export default function FamilyMemberDetailPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex items-center gap-4">

        <Link
          href="/dashboard/family"
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCE3EC] bg-white"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div>

          <p className="text-sm font-medium text-[#163B8C]">
            Family Member Details
          </p>

          <h1 className="text-[34px] font-semibold text-[#0F172A]">
            Rahul Sharma
          </h1>

        </div>

      </div>

      {/* PROFILE */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#EEF4FF] text-3xl font-semibold text-[#163B8C]">

            R

          </div>

          <div className="flex-1">

            <h2 className="text-2xl font-semibold">
              Rahul Sharma
            </h2>

            <p className="mt-1 text-slate-500">
              Primary Beneficiary
            </p>

            <div className="mt-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">

              Verified

            </div>

          </div>

        </div>

      </div>

      {/* INFO */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

          <h3 className="font-semibold text-lg">
            Contact Information
          </h3>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#163B8C]" />
              rahul@gmail.com
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#163B8C]" />
              +91 9876543210
            </div>

          </div>

        </div>

        <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

          <h3 className="font-semibold text-lg">
            Verification Status
          </h3>

          <div className="mt-6 space-y-4">

            <div className="flex items-center justify-between">
              <span>Aadhaar</span>
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>

            <div className="flex items-center justify-between">
              <span>PAN</span>
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>

            <div className="flex items-center justify-between">
              <span>KYC</span>
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>

          </div>

        </div>

      </div>

      {/* ACTIONS */}

      <div className="grid gap-5 md:grid-cols-2">

        <Link
          href="/dashboard/family/1/access"
          className="flex items-center justify-between rounded-[30px] border border-[#DCE3EC] bg-white p-6"
        >

          <div className="flex items-center gap-4">

            <Lock className="h-6 w-6 text-[#163B8C]" />

            <div>

              <h3 className="font-semibold">
                Manage Access
              </h3>

              <p className="text-sm text-slate-500">
                Control permissions
              </p>

            </div>

          </div>

          <ChevronRight />

        </Link>

        <Link
          href="/dashboard/family/verification/1"
          className="flex items-center justify-between rounded-[30px] border border-[#DCE3EC] bg-white p-6"
        >

          <div className="flex items-center gap-4">

            <User className="h-6 w-6 text-[#163B8C]" />

            <div>

              <h3 className="font-semibold">
                Verification Details
              </h3>

              <p className="text-sm text-slate-500">
                Review verification records
              </p>

            </div>

          </div>

          <ChevronRight />

        </Link>

      </div>

    </div>
  );
}