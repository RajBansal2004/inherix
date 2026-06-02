import {
  ShieldAlert,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function EmergencyStatus() {
  return (
    <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-[#0F172A]">
            Emergency Status
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Controlled emergency access monitoring
          </p>

        </div>

        <ShieldAlert className="h-6 w-6 text-[#163B8C]" />

      </div>

      <div className="mt-6 space-y-4">

        <div className="flex items-center justify-between rounded-2xl border p-4">

          <div className="flex items-center gap-3">

            <ShieldCheck className="h-5 w-5 text-emerald-600" />

            <span>Current Status</span>

          </div>

          <span className="font-medium text-emerald-600">
            Normal
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl border p-4">

          <div className="flex items-center gap-3">

            <Clock3 className="h-5 w-5 text-amber-500" />

            <span>Pending Reviews</span>

          </div>

          <span className="font-medium">
            0
          </span>

        </div>

      </div>

      <div className="mt-5 rounded-2xl bg-[#EEF4FF] p-4">

        <p className="text-xs text-slate-500">
          Emergency Readiness
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-[#163B8C]">
          92%
        </h3>

      </div>

    </div>
  );
}