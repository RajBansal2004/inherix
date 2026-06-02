import {
  SlidersHorizontal,
  RotateCcw,
  Check,
} from "lucide-react";

export default function FilterPage() {
  return (
    <div className="mx-auto w-full max-w-[980px] space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-[34px] font-semibold text-[#0F172A]">
          Filters
        </h1>

        <p className="mt-2 text-slate-500">
          Refine and organize continuity records.
        </p>

      </div>

      {/* FILTER CARD */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 md:p-8">

        {/* TOP ICON */}

        <div className="mb-8 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

            <SlidersHorizontal className="h-6 w-6 text-[#163B8C]" />

          </div>

          <div>

            <h2 className="text-xl font-semibold text-[#0F172A]">
              Filter Records
            </h2>

            <p className="text-sm text-slate-500">
              Select filters to narrow down results.
            </p>

          </div>

        </div>

        {/* CATEGORY */}

        <div className="space-y-6">

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Category
            </label>

            <select className="h-14 w-full rounded-2xl border border-[#DCE3EC] bg-white px-4 outline-none">

              <option>All Categories</option>

              <option>Financial Information</option>

              <option>Legal Documents</option>

              <option>Personal Information</option>

              <option>Family & Assets</option>

              <option>Business Records</option>

            </select>

          </div>

          {/* TYPE */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Type
            </label>

            <select className="h-14 w-full rounded-2xl border border-[#DCE3EC] bg-white px-4 outline-none">

              <option>All Types</option>

              <option>Bank Account</option>

              <option>Insurance</option>

              <option>Property</option>

              <option>Will Document</option>

            </select>

          </div>

          {/* DATE */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Date Modified
            </label>

            <select className="h-14 w-full rounded-2xl border border-[#DCE3EC] bg-white px-4 outline-none">

              <option>All Time</option>

              <option>Last 7 Days</option>

              <option>Last 30 Days</option>

              <option>Last 3 Months</option>

              <option>Last Year</option>

            </select>

          </div>

          {/* ACTIVE FILTERS */}

          <div>

            <p className="mb-3 text-sm font-medium text-[#0F172A]">
              Active Filters
            </p>

            <div className="flex flex-wrap gap-2">

              <span className="rounded-full bg-[#EEF4FF] px-4 py-2 text-sm text-[#163B8C]">
                Financial
              </span>

              <span className="rounded-full bg-[#EEF4FF] px-4 py-2 text-sm text-[#163B8C]">
                Last 30 Days
              </span>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">

            <button className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#DCE3EC] bg-white font-medium text-slate-600 transition hover:bg-[#F8FAFC]">

              <RotateCcw className="h-4 w-4" />

              Clear Filters

            </button>

            <button className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#163B8C] font-medium text-white transition hover:bg-[#102C6B]">

              <Check className="h-4 w-4" />

              Apply Filters

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}