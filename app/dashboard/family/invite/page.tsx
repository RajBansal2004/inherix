import Link from "next/link";
import {
  ArrowLeft,
  UserPlus,
  ShieldCheck,
  Lock,
  BadgeCheck,
} from "lucide-react";

export default function InviteMemberPage() {
  return (
    <div className="mx-auto max-w-6xl">

      {/* HEADER */}

      <div className="mb-8 flex items-start gap-4">

        <Link
          href="/dashboard/family"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#DCE3EC] bg-white transition hover:bg-[#F8FAFC]"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div>

          <p className="text-sm font-medium text-[#163B8C]">
            Family & Beneficiary Management
          </p>

          <h1 className="mt-2 text-[36px] font-semibold tracking-tight text-[#0F172A]">
            Invite Family Member
          </h1>

          <p className="mt-2 max-w-[700px] text-slate-500">
            Add trusted beneficiaries, family members and emergency
            contacts who may receive controlled access to records when
            required.
          </p>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

        {/* FORM */}

        <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-8">

          <div className="mb-8 flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

              <UserPlus className="h-7 w-7 text-[#163B8C]" />

            </div>

            <div>

              <h2 className="text-xl font-semibold text-[#0F172A]">
                Member Information
              </h2>

              <p className="text-sm text-slate-500">
                Enter beneficiary details below.
              </p>

            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="full name"
                className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none focus:border-[#163B8C]"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Relationship
              </label>

              <select className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none focus:border-[#163B8C]">

                <option>Select Relationship</option>
                <option>Spouse</option>
                <option>Son</option>
                <option>Daughter</option>
                <option>Parent</option>
                <option>Sibling</option>

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="enter email"
                className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none focus:border-[#163B8C]"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Mobile Number
              </label>

              <input
                type="text"
                placeholder="+91 XXXXX XXXXX"
                className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none focus:border-[#163B8C]"
              />

            </div>

          </div>

          <div className="mt-6">

            <label className="mb-2 block text-sm font-medium">
              Access Level
            </label>

            <select className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none focus:border-[#163B8C]">

              <option>Limited Access</option>
              <option>Document Access</option>
              <option>Emergency Access</option>
              <option>Full Access</option>

            </select>

          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">

            <Link
              href="/dashboard/family"
              className="flex h-14 items-center justify-center rounded-2xl border border-[#DCE3EC] px-6"
            >
              Cancel
            </Link>

            <button className="flex h-14 items-center justify-center rounded-2xl bg-[#163B8C] px-8 font-medium text-white shadow-lg transition hover:bg-[#0F2F76]">

              Send Invitation

            </button>

          </div>

        </div>

        {/* SIDE PANEL */}

        <div className="space-y-5">

          <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-6">

            <h3 className="font-semibold text-[#0F172A]">
              Why Verification Matters
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Verified beneficiaries help ensure your legacy and
              important records reach the correct people during
              continuity events.
            </p>

          </div>

          <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-6">

            <h3 className="font-semibold text-[#0F172A]">
              Verification Journey
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-[#163B8C]" />
                Invitation Sent
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#163B8C]" />
                Identity Verification
              </div>

              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-[#163B8C]" />
                Access Approval
              </div>

            </div>

          </div>

          <div className="rounded-[30px] bg-[#EEF4FF] p-5">

            <p className="text-sm font-medium text-[#163B8C]">
              Family Continuity Tip
            </p>

            <p className="mt-2 text-sm leading-6 text-[#334155]">
              Verified beneficiaries ensure your assets, wishes and
              records remain accessible to the right people when they
              need them most.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}