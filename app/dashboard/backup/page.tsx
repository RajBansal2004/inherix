import {
  Download,
  Database,
} from "lucide-react";

export default function BackupPage() {
  return (
    <div className="mx-auto max-w-[980px] space-y-6">

      <h1 className="text-[34px] font-semibold">
        Data Backup
      </h1>

      <div className="rounded-[32px] border bg-white p-6 space-y-6">

        <div className="rounded-2xl border p-5">

          <h3 className="font-semibold">
            Last Backup
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Today, 2:00 AM
          </p>

          <button className="mt-4 h-12 w-full rounded-xl bg-[#163B8C] text-white">
            Backup Now
          </button>

        </div>

        <div className="rounded-2xl border p-5">

          <h3 className="font-semibold">
            Export Data
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Download a copy of your continuity records.
          </p>

          <button className="mt-4 h-12 w-full rounded-xl border">
            Export
          </button>

        </div>

      </div>

    </div>
  );
}