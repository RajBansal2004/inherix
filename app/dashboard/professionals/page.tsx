import {
  ShieldCheck,
  Briefcase,
  MoreHorizontal,
  Plus,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import Link from "next/link";

const professionals = [
  {
    name: "Ajay Mehta",
    role: "Chartered Accountant",
    access: "Full Governance Access",
    status: "Active",
    email: "ajay@inherix.com",
  },

  {
    name: "Vikas Desai",
    role: "Legal Advisor",
    access: "View Only Access",
    status: "Pending",
    email: "vikas@inherix.com",
  },

  {
    name: "Rohit Verma",
    role: "Executor",
    access: "Continuity Access",
    status: "Active",
    email: "rohit@inherix.com",
  },
];

export default function ProfessionalsPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] p-4 sm:p-6 lg:p-8">

      {/* TOP */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#163B8C] text-white">

              <Briefcase className="h-5 w-5" />

            </div>

            <div>

              <h1 className="text-[32px] font-semibold tracking-tight text-[#0F172A]">

                Professional Access

              </h1>

              <p className="mt-1 text-[14px] text-slate-500">

                Manage legal, financial and governance professionals

              </p>

            </div>

          </div>

        </div>

        {/* BUTTON */}

        <Link
          href="/dashboard/connections/invite"
          className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#163B8C] px-5 text-sm font-medium text-white transition hover:bg-[#1D4ED8]">

          <Plus className="h-4 w-4" />

          Invite Professional

        </Link>

      </div>

      {/* STATS */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-[#DCE3EC] bg-white p-5">

          <p className="text-[13px] text-slate-500">

            Total Professionals

          </p>

          <h2 className="mt-3 text-[30px] font-semibold text-[#0F172A]">

            12

          </h2>

        </div>

        <div className="rounded-2xl border border-[#DCE3EC] bg-white p-5">

          <p className="text-[13px] text-slate-500">

            Active Access

          </p>

          <h2 className="mt-3 text-[30px] font-semibold text-emerald-600">

            08

          </h2>

        </div>

        <div className="rounded-2xl border border-[#DCE3EC] bg-white p-5">

          <p className="text-[13px] text-slate-500">

            Pending Review

          </p>

          <h2 className="mt-3 text-[30px] font-semibold text-amber-600">

            04

          </h2>

        </div>

      </div>

      {/* LIST */}

      <div className="mt-8 space-y-5">

        {professionals.map((item) => (
          <div
            key={item.name}
            className="rounded-[28px] border border-[#DCE3EC] bg-white p-6"
          >

            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

              {/* LEFT */}

              <div className="flex items-center gap-5">

                {/* ICON */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                  <ShieldCheck className="h-6 w-6 text-[#163B8C]" />

                </div>

                {/* INFO */}

                <div>

                  <h3 className="text-[18px] font-semibold text-[#0F172A]">

                    {item.name}

                  </h3>

                  <p className="mt-1 text-[14px] text-slate-500">

                    {item.role}

                  </p>

                  <p className="mt-2 text-[13px] text-slate-400">

                    {item.email}

                  </p>

                </div>

              </div>

              {/* CENTER */}

              <div className="flex flex-wrap gap-4">

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">

                  <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400">

                    Access Level

                  </p>

                  <h4 className="mt-2 text-[14px] font-medium text-[#0F172A]">

                    {item.access}

                  </h4>

                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">

                  <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400">

                    Verification

                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    {item.status === "Active" ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Clock3 className="h-4 w-4 text-amber-500" />
                    )}

                    <span className={`text-[14px] font-medium ${item.status === "Active"
                        ? "text-emerald-600"
                        : "text-amber-600"
                      }`}>

                      {item.status}

                    </span>

                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0]">

                <MoreHorizontal className="h-5 w-5 text-slate-500" />

              </button>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}