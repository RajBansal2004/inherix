import Link from "next/link";
import {
  Users,
  Plus,
  Mail,
  Phone,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const members = [
  {
    id: 1,
    name: "Rahul Sharma",
    relation: "Primary Beneficiary",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    status: "Verified",
  },
  {
    id: 2,
    name: "Amit Tyagi",
    relation: "Family Member",
    email: "amit@gmail.com",
    phone: "+91 9999999999",
    status: "Under Review",
  },
];

export default function FamilyPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm font-medium text-[#163B8C]">
            Family Management
          </p>

          <h1 className="mt-2 text-[34px] font-semibold text-[#0F172A]">
            Family & Contacts
          </h1>

          <p className="mt-2 text-slate-500">
            Manage trusted family members, beneficiaries and access permissions.
          </p>

        </div>

        <div className="flex gap-3">

          <Link
            href="/dashboard/family/verification"
            className="flex h-12 items-center rounded-2xl border border-[#DCE3EC] px-5"
          >
            Verification Status
          </Link>

          <Link
            href="/dashboard/family/invite"
            className="flex h-12 items-center gap-2 rounded-2xl bg-[#163B8C] px-5 text-white"
          >
            <Plus className="h-4 w-4" />
            Invite Member
          </Link>

        </div>

      </div>

      {/* PROGRESS */}

      <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold text-[#0F172A]">
              Beneficiary Verification Progress
            </h3>

            <p className="text-sm text-slate-500">
              Ensure your legacy reaches the right people.
            </p>

          </div>

          <div className="text-right">

            <h2 className="text-3xl font-semibold text-[#163B8C]">
              78%
            </h2>

            <p className="text-sm text-slate-500">
              Completed
            </p>

          </div>

        </div>

      </div>

      {/* MEMBERS */}

      <div className="grid gap-5 lg:grid-cols-2">

        {members.map((member) => (

          <Link
            key={member.id}
            href={`/dashboard/family/${member.id}`}
            className="rounded-[30px] border border-[#DCE3EC] bg-white p-6 transition hover:border-[#163B8C]"
          >

            <div className="flex items-start justify-between">

              <div className="flex gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF4FF] text-lg font-semibold text-[#163B8C]">

                  {member.name.charAt(0)}

                </div>

                <div>

                  <h3 className="text-lg font-semibold">
                    {member.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {member.relation}
                  </p>

                </div>

              </div>

              <ChevronRight className="h-5 w-5 text-slate-400" />

            </div>

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3 text-sm">

                <Mail className="h-4 w-4" />
                {member.email}

              </div>

              <div className="flex items-center gap-3 text-sm">

                <Phone className="h-4 w-4" />
                {member.phone}

              </div>

            </div>

            <div className="mt-5">

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                {member.status}
              </span>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}