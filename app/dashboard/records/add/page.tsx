import {
  ChevronLeft,
  Save,
} from "lucide-react";

export default function AddRecordPage() {
  return (
    <div className="mx-auto w-full max-w-[980px] space-y-6">

      {/* HEADER */}

      <div className="flex items-center gap-4">
        <div>

          <h1 className="text-[28px] font-semibold tracking-tight text-[#020817] lg:text-[34px]">
            Add New Item
          </h1>

          <p className="mt-1 text-sm text-slate-500 lg:text-base">
            Secure continuity record
          </p>

        </div>

      </div>

      {/* FORM CARD */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-5 sm:p-7 lg:p-8">

        <div className="space-y-6">

          {/* CATEGORY */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Category
            </label>

            <select className="h-12 w-full rounded-2xl border border-[#DCE3EC] px-4 text-sm outline-none transition focus:border-[#163B8C] lg:h-14 lg:text-base">

              <option>Select Category</option>

              <option>Personal Information</option>

              <option>Financial Information</option>

              <option>Digital Assets</option>

              <option>Legal Documents</option>

              <option>Property & Assets</option>

              <option>Others</option>

            </select>

          </div>

          {/* ITEM TYPE */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Item Type
            </label>

            <select className="h-12 w-full rounded-2xl border border-[#DCE3EC] px-4 text-sm outline-none transition focus:border-[#163B8C] lg:h-14 lg:text-base">

              <option>Select Type</option>

              <option>Bank Account</option>

              <option>Insurance</option>

              <option>Property</option>

              <option>Will Document</option>

            </select>

          </div>

          {/* TITLE */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Title
            </label>

            <input
              type="text"
              placeholder="Enter title"
              className="h-12 w-full rounded-2xl border border-[#DCE3EC] px-4 text-sm outline-none transition focus:border-[#163B8C] lg:h-14 lg:text-base"
            />

          </div>

          {/* DETAILS */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Details
            </label>

            <textarea
              rows={5}
              placeholder="Enter details..."
              className="w-full rounded-2xl border border-[#DCE3EC] p-4 text-sm outline-none transition focus:border-[#163B8C] lg:text-base"
            />

          </div>

          {/* BUTTON */}

          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#163B8C] text-sm font-medium text-white transition hover:bg-[#102C6B] lg:h-14 lg:text-base">

            <Save className="h-4 w-4" />

            Save Item

          </button>

        </div>

      </div>

    </div>
  );
}