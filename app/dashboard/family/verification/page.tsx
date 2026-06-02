import Link from "next/link";
import {
  ShieldCheck,
  Clock3,
  AlertTriangle,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";

const beneficiaries = [
  {
    id: 1,
    name: "Rahul Sharma",
    relation: "Spouse",
    status: "Verified",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    name: "Amit Tyagi",
    relation: "Brother",
    status: "Under Review",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: 3,
    name: "Neha Sharma",
    relation: "Daughter",
    status: "Pending",
    color: "bg-slate-100 text-slate-700",
  },
];

export default function BeneficiaryVerificationPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>

        <p className="text-sm font-medium text-[#163B8C]">
          Beneficiary Verification
        </p>

        <h1 className="mt-2 text-[34px] font-semibold text-[#0F172A]">
          Verification Status
        </h1>

        <p className="mt-2 text-slate-500">
          Verify beneficiaries before emergency continuity events.
        </p>

      </div>

      {/* STATS */}

      {/* STATS */}

<div className="grid gap-4 md:grid-cols-3">

  {/* VERIFIED */}

  <div className="flex items-center justify-between rounded-2xl border border-[#DCE3EC] bg-white p-4">

    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
        <ShieldCheck className="h-5 w-5 text-emerald-600" />
      </div>

      <div>

        <h3 className="text-2xl font-semibold text-[#0F172A]">
          5
        </h3>

      </div>

    </div>

    <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">

      <span className="h-2 w-2 rounded-full bg-emerald-600" />

      Verified

    </span>

  </div>

  {/* UNDER REVIEW */}

  <div className="flex items-center justify-between rounded-2xl border border-[#DCE3EC] bg-white p-4">

    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
        <Clock3 className="h-5 w-5 text-amber-600" />
      </div>

      <div>

        <h3 className="text-2xl font-semibold text-[#0F172A]">
          2
        </h3>

      </div>

    </div>

    <span className="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">

      <span className="h-2 w-2 rounded-full bg-amber-600" />

      Under Review

    </span>

  </div>

  {/* PENDING */}

  <div className="flex items-center justify-between rounded-2xl border border-[#DCE3EC] bg-white p-4">

    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
        <AlertTriangle className="h-5 w-5 text-slate-600" />
      </div>

      <div>

        <h3 className="text-2xl font-semibold text-[#0F172A]">
          1
        </h3>

      </div>

    </div>

    <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">

      <span className="h-2 w-2 rounded-full bg-slate-500" />

      Pending

    </span>

  </div>

</div>

      {/* LIST */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

        <h2 className="text-xl font-semibold">
          Beneficiary List
        </h2>

        <div className="mt-6 space-y-4">

          {beneficiaries.map((item) => (

            <Link
              key={item.id}
              href={`/dashboard/family/verification/${item.id}`}
              className="flex items-center justify-between rounded-2xl border border-[#EEF2F7] p-5 transition hover:border-[#163B8C]"
            >

              <div>

                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.relation}
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${item.color}`}
                >
                  {item.status}
                </span>

                <ChevronRight className="h-4 w-4" />

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* REQUIREMENTS */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

        <h2 className="text-xl font-semibold">
          Verification Requirements
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <div className="flex items-center gap-3 rounded-2xl border p-4">
            <BadgeCheck className="h-5 w-5 text-emerald-600" />
            Aadhaar Verification
          </div>

          <div className="flex items-center gap-3 rounded-2xl border p-4">
            <BadgeCheck className="h-5 w-5 text-emerald-600" />
            PAN Verification
          </div>

          <div className="flex items-center gap-3 rounded-2xl border p-4">
            <BadgeCheck className="h-5 w-5 text-emerald-600" />
            Relationship Verification
          </div>

          <div className="flex items-center gap-3 rounded-2xl border p-4">
            <BadgeCheck className="h-5 w-5 text-emerald-600" />
            KYC Completed
          </div>

        </div>

      </div>

    </div>
  );
}