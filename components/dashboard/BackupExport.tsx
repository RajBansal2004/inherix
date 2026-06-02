export default function BackupExport() {
  return (
    <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-7">

      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        {/* LEFT */}

        <div>

          <h2 className="text-[24px] font-semibold tracking-tight text-[#0F172A]">

            Backup & Export

          </h2>

          <p className="mt-3 max-w-[600px] text-sm leading-7 text-slate-500">

            Maintain encrypted backups and export continuity records
            securely for legal, governance, and family coordination purposes.

          </p>

        </div>

        {/* BUTTONS */}

        <div className="flex flex-wrap gap-4">

          <button className="h-12 rounded-2xl border border-[#DCE3EC] bg-white px-6 text-sm font-medium text-[#0F172A] transition hover:bg-[#F8FAFC]">

            Backup Now

          </button>

          <button className="h-12 rounded-2xl bg-[#163B8C] px-6 text-sm font-medium text-white transition hover:bg-[#1D4ED8]">

            Export Data

          </button>

        </div>

      </div>

    </div>
  );
}