import Link from "next/link";

import {
  UserPlus,
  ChevronRight,
  ShieldCheck,
  Users,
} from "lucide-react";

const connections = [
  {
    id: 1,
    name: "Sarah Johnson",
    relation: "Spouse",
    access: "Full Access",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    name: "Michael Johnson",
    relation: "Son",
    access: "View Only",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Emily Johnson",
    relation: "Daughter",
    access: "Limited Access",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function ConnectionsPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] space-y-6">

      {/* HEADER */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-[30px] font-semibold tracking-tight text-[#0F172A] md:text-[36px]">
            People You Trust
          </h1>

          <p className="mt-2 text-sm text-slate-500 md:text-base">
            Manage continuity access and trusted family members.
          </p>

        </div>

        <Link
          href="/dashboard/connections/invite"
          className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#0F172A] px-5 text-sm font-medium text-white transition hover:bg-[#020617]"
        >

          <UserPlus className="h-4 w-4" />

          Invite New

        </Link>

      </div>

      {/* STATS */}

      <div className="grid gap-4 sm:grid-cols-3">

        <div className="rounded-[28px] border border-[#DCE3EC] bg-white p-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF]">

            <Users className="h-5 w-5 text-[#163B8C]" />

          </div>

          <h3 className="mt-4 text-3xl font-semibold text-[#0F172A]">
            3
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Trusted Connections
          </p>

        </div>

        <div className="rounded-[28px] border border-[#DCE3EC] bg-white p-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">

            <ShieldCheck className="h-5 w-5 text-emerald-700" />

          </div>

          <h3 className="mt-4 text-3xl font-semibold text-[#0F172A]">
            2
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Full Access Users
          </p>

        </div>

        <div className="rounded-[28px] border border-[#DCE3EC] bg-white p-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

            <ShieldCheck className="h-5 w-5 text-blue-700" />

          </div>

          <h3 className="mt-4 text-3xl font-semibold text-[#0F172A]">
            1
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            View Only Users
          </p>

        </div>

      </div>

      {/* LIST */}

      <div className="space-y-4">

        {connections.map((item) => (
          <Link
            key={item.id}
            href={`/dashboard/connections/${item.id}`}
            className="group flex flex-col gap-5 rounded-[30px] border border-[#DCE3EC] bg-white p-5 transition hover:border-[#163B8C] hover:bg-[#F8FBFF] md:flex-row md:items-center md:justify-between md:p-6"
          >

            {/* LEFT */}

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF4FF] text-lg font-semibold text-[#163B8C]">

                {item.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}

              </div>

              <div>

                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.relation}
                </p>

                <div className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-medium ${item.color}`}>

                  {item.access}

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex items-center justify-between md:justify-end md:gap-4">

              <p className="text-sm text-slate-400">
                Manage Access
              </p>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E2E8F0] transition group-hover:border-[#163B8C] group-hover:bg-[#163B8C]">

                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-white" />

              </div>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}