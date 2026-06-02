import {
  Search,
  ChevronRight,
  FileText,
  Clock3,
} from "lucide-react";

const results = [
  {
    title: "Bank Account",
    category: "Financial Information",
    updated: "Updated 2 days ago",
  },
  {
    title: "Insurance Policy",
    category: "Insurance",
    updated: "Updated 5 days ago",
  },
  {
    title: "Will Document",
    category: "Legal Documents",
    updated: "Updated 1 week ago",
  },
  {
    title: "Property Papers",
    category: "Property & Assets",
    updated: "Updated 12 days ago",
  },
];

export default function SearchPage() {
  return (
    <div className="mx-auto w-full max-w-[980px] space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-[34px] font-semibold text-[#0F172A]">
          Search Records
        </h1>

        <p className="mt-2 text-slate-500">
          Quickly find continuity records across all categories.
        </p>

      </div>

      {/* SEARCH BOX */}

      <div className="rounded-[28px] border border-[#DCE3EC] bg-white p-4">

        <div className="flex items-center gap-3">

          <Search className="h-5 w-5 text-slate-400" />

          <input
            placeholder="Search bank account, insurance, will..."
            className="w-full text-[15px] outline-none"
          />

        </div>

      </div>

      {/* RECENT SEARCHES */}

      <div>

        <h3 className="mb-3 text-sm font-semibold text-[#0F172A]">
          Recent Searches
        </h3>

        <div className="flex flex-wrap gap-2">

          <button className="rounded-full bg-white px-4 py-2 text-sm border border-[#E2E8F0]">
            Bank Account
          </button>

          <button className="rounded-full bg-white px-4 py-2 text-sm border border-[#E2E8F0]">
            Insurance
          </button>

          <button className="rounded-full bg-white px-4 py-2 text-sm border border-[#E2E8F0]">
            Will
          </button>

        </div>

      </div>

      {/* RESULTS */}

      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <h3 className="text-lg font-semibold text-[#0F172A]">
            Search Results
          </h3>

          <span className="text-sm text-slate-500">
            {results.length} Records Found
          </span>

        </div>

        {results.map((item) => (
          <div
            key={item.title}
            className="group flex items-center justify-between rounded-[28px] border border-[#DCE3EC] bg-white p-5 transition hover:border-[#163B8C]"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                <FileText className="h-6 w-6 text-[#163B8C]" />

              </div>

              <div>

                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.category}
                </p>

                <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">

                  <Clock3 className="h-3 w-3" />

                  {item.updated}

                </div>

              </div>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8FAFC] transition group-hover:bg-[#163B8C]">

              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-white" />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}