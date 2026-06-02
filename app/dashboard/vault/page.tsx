
import {
  Search,
  ChevronRight,
  Plus,
  FileText,
  Landmark,
  Shield,
  Folder,
} from "lucide-react";

const categories = [
  {
    title: "Personal Information",
    count: "12 items",
    icon: FileText,
  },
  {
    title: "Financial Information",
    count: "8 items",
    icon: Landmark,
  },
  {
    title: "Insurance Policies",
    count: "4 items",
    icon: Shield,
  },
  {
    title: "Legal Documents",
    count: "7 items",
    icon: Folder,
  },
];

export default function VaultPage() {
  return (

      <div className="space-y-6">

        {/* HEADER */}

        <div>

          <h1 className="text-[32px] font-semibold text-[#0F172A]">

            Vault

          </h1>

          <p className="mt-2 text-slate-500">

            Securely manage your continuity records.

          </p>

        </div>

        {/* SEARCH */}

        <div className="relative">

          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            placeholder="Search your vault..."
            className="h-14 w-full rounded-2xl border border-[#DCE3EC] bg-white pl-14 pr-5 text-[15px] outline-none"
          />

        </div>

        {/* CATEGORIES */}

        <div className="grid gap-5 lg:grid-cols-2">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#DCE3EC] bg-white p-6 transition hover:border-[#163B8C]"
              >

                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                      <Icon className="h-6 w-6 text-[#163B8C]" />

                    </div>

                    <div>

                      <h3 className="text-lg font-semibold text-[#0F172A]">

                        {item.title}

                      </h3>

                      <p className="mt-1 text-sm text-slate-500">

                        {item.count}

                      </p>

                    </div>

                  </div>

                  <ChevronRight className="h-5 w-5 text-slate-400" />

                </div>

              </div>
            );
          })}

        </div>

        {/* ADD */}

        <button className="flex h-14 items-center gap-3 rounded-2xl bg-[#163B8C] px-6 text-[15px] font-medium text-white">

          <Plus className="h-5 w-5" />
          Add New Item

        </button>

      </div>

  );
}