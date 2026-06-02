import {
  ShieldCheck,
  History,
} from "lucide-react";

const audits = [
  {
    title: "PIN Updated",
    date: "Today",
  },
  {
    title: "Beneficiary Added",
    date: "Yesterday",
  },
  {
    title: "Document Shared",
    date: "2 Days Ago",
  },
];

export default function AuditActivity() {
  return (
    <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Audit Activity
          </h2>

          <p className="text-sm text-slate-500">
            Security and compliance events
          </p>

        </div>

        <History className="h-5 w-5 text-[#163B8C]" />

      </div>

      <div className="mt-6 space-y-4">

        {audits.map((audit) => (

          <div
            key={audit.title}
            className="flex items-center justify-between rounded-2xl border p-4"
          >

            <div className="flex items-center gap-3">

              <ShieldCheck className="h-5 w-5 text-[#163B8C]" />

              <span>{audit.title}</span>

            </div>

            <span className="text-sm text-slate-500">
              {audit.date}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}