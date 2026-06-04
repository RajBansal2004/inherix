import {
  History,
  ShieldCheck,
  FileText,
  KeyRound,
  UserCheck,
  AlertTriangle,
} from "lucide-react";

const logs = [
  {
    title: "Successful Login",
    description: "Chrome Browser • Mumbai, India",
    date: "Today • 10:45 AM",
    status: "Success",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Will Document Updated",
    description: "Legal Documents Vault",
    date: "Today • 09:10 AM",
    status: "Updated",
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Beneficiary Verified",
    description: "Sarah Johnson verification completed",
    date: "Yesterday",
    status: "Verified",
    icon: UserCheck,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "PIN Changed",
    description: "Security credentials updated",
    date: "2 Days Ago",
    status: "Protected",
    icon: KeyRound,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Emergency Access Request",
    description: "Verification workflow initiated",
    date: "5 Days Ago",
    status: "Reviewed",
    icon: AlertTriangle,
    color: "bg-red-50 text-red-600",
  },
];

export default function AuditLogsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 lg:p-8">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-3 py-1">

              <History className="h-4 w-4 text-[#163B8C]" />

              <span className="text-xs font-medium text-[#163B8C]">
                Compliance & Security
              </span>

            </div>

            <h1 className="mt-4 text-[32px] font-semibold text-[#0F172A] md:text-[40px]">
              Audit Logs
            </h1>

            <p className="mt-2 max-w-[700px] text-slate-500">
              Complete history of account activity, security actions,
              document updates, beneficiary changes and emergency workflows.
            </p>

          </div>

          <div className="rounded-2xl bg-[#F8FAFC] px-5 py-4">

            <p className="text-xs text-slate-500">
              Total Events
            </p>

            <h3 className="mt-1 text-2xl font-semibold text-[#0F172A]">
              247
            </h3>

          </div>

        </div>

      </div>
      <div className="rounded-[28px] border border-[#DCE3EC] bg-white p-5">

        <div className="flex flex-col gap-4 lg:flex-row">

          <input
            placeholder="Search activity..."
            className="h-12 flex-1 rounded-2xl border border-[#DCE3EC] px-4 outline-none"
          />

          <select className="h-12 rounded-2xl border border-[#DCE3EC] px-4">

            <option>All Activities</option>
            <option>Security</option>
            <option>Documents</option>
            <option>Beneficiaries</option>
            <option>Emergency</option>

          </select>

        </div>

      </div>
      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

        <h2 className="text-xl font-semibold text-[#0F172A]">
          Activity Timeline
        </h2>

        <div className="mt-8 space-y-5">

          {logs.map((log, index) => {
            const Icon = log.icon;

            return (
              <div
                key={index}
                className="group relative flex gap-4 rounded-3xl border border-[#EEF2F7] p-5 transition hover:border-[#163B8C] hover:bg-[#FAFBFD]"
              >

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${log.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1">

                  <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">

                    <h3 className="font-semibold text-[#0F172A]">
                      {log.title}
                    </h3>

                    <span className="text-xs font-medium text-slate-400">
                      {log.date}
                    </span>

                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {log.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-[28px] border border-[#DCE3EC] bg-white p-5">

          <p className="text-sm text-slate-500">
            Login Events
          </p>

          <h3 className="mt-2 text-3xl font-semibold">
            98
          </h3>

        </div>

        <div className="rounded-[28px] border border-[#DCE3EC] bg-white p-5">

          <p className="text-sm text-slate-500">
            Document Changes
          </p>

          <h3 className="mt-2 text-3xl font-semibold">
            74
          </h3>

        </div>

        <div className="rounded-[28px] border border-[#DCE3EC] bg-white p-5">

          <p className="text-sm text-slate-500">
            Security Actions
          </p>

          <h3 className="mt-2 text-3xl font-semibold">
            31
          </h3>

        </div>

      </div>

    </div>
  );
}