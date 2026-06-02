
export default function AddVaultItemPage() {
  return (
      <div className="mx-auto max-w-3xl space-y-6">

        <div>

          <h1 className="text-[32px] font-semibold text-[#0F172A]">

            Add New Item

          </h1>

          <p className="mt-2 text-slate-500">

            Add a new continuity record securely.

          </p>

        </div>

        <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-8">

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium text-[#0F172A]">

                Category

              </label>

              <select className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none">

                <option>Financial Information</option>

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium text-[#0F172A]">

                Item Type

              </label>

              <input
                placeholder="Enter item type"
                className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium text-[#0F172A]">

                Title

              </label>

              <input
                placeholder="Enter title"
                className="h-14 w-full rounded-2xl border border-[#DCE3EC] px-5 outline-none"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium text-[#0F172A]">

                Details

              </label>

              <textarea
                rows={6}
                placeholder="Enter details..."
                className="w-full rounded-2xl border border-[#DCE3EC] p-5 outline-none"
              />

            </div>

            <button className="h-14 w-full rounded-2xl bg-[#163B8C] text-[15px] font-medium text-white">

              Save Item

            </button>

          </div>

        </div>

      </div>

  );
}