import Link from "next/link";

import {
  ArrowLeft,
  Send,
} from "lucide-react";

export default function InviteConnectionPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] space-y-6">

      {/* HEADER */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <Link
            href="/dashboard/connections"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#163B8C]"
          >

            <ArrowLeft className="h-4 w-4" />

            Back

          </Link>

          <h1 className="mt-4 text-[30px] font-semibold tracking-tight text-[#0F172A] md:text-[36px]">
            Invite Connection
          </h1>

          <p className="mt-2 text-sm text-slate-500 md:text-base">
            Invite trusted people and assign secure continuity access.
          </p>

        </div>

      </div>

      {/* FORM */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-5 md:p-8">

        <div className="grid gap-6 md:grid-cols-2">

          {/* EMAIL */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email address"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 text-sm outline-none focus:border-[#163B8C]"
            />

          </div>

          {/* FULL NAME */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter full name"
              className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 text-sm outline-none focus:border-[#163B8C]"
            />

          </div>

        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {/* RELATION */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Relationship
            </label>

            <select className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 text-sm outline-none focus:border-[#163B8C]">

              <option>Select relationship</option>

              <option>Spouse</option>

              <option>Son</option>

              <option>Daughter</option>

              <option>Lawyer</option>

              <option>Advisor</option>

            </select>

          </div>

          {/* ACCESS */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Access Level
            </label>

            <select className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 text-sm outline-none focus:border-[#163B8C]">

              <option>Select access level</option>

              <option>Full Access</option>

              <option>View Only</option>

              <option>Limited Access</option>

            </select>

          </div>

        </div>

        {/* BUTTON */}

        <button className="mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#163B8C] text-sm font-medium text-white transition hover:bg-[#102C6B]">

          <Send className="h-4 w-4" />

          Send Invitation

        </button>

      </div>

    </div>
  );
}