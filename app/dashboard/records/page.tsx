"use client";
import Link from "next/link";
import {
  Landmark,
  Shield,
  FileText,
  HeartHandshake,
  Briefcase,
  ChevronRight,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import QuickAddModal from "./components/QuickAddModal";
import { useState } from "react";

const categories = [
  {
    title: "Financial Information",
    slug: "financial-information",
    count: "8 Items",
    icon: Landmark,
  },

  {
    title: "Legal Documents",
    slug: "legal-documents",
    count: "5 Items",
    icon: Shield,
  },

  {
    title: "Personal Information",
    slug: "personal-information",
    count: "6 Items",
    icon: FileText,
  },

  {
    title: "Family & Assets",
    slug: "family-assets",
    count: "4 Items",
    icon: HeartHandshake,
  },

  {
    title: "Business Records",
    slug: "business-records",
    count: "3 Items",
    icon: Briefcase,
  },
];

export default function RecordsPage() {
  const [open, setOpen] = useState(false);
  return (

    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

  <div>

    <span className="inline-flex rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#163B8C]">
      Secure Family Vault
    </span>

    <h1 className="mt-4 text-[40px] font-semibold tracking-tight text-[#0F172A]">
      Continuity Records
    </h1>

    <p className="mt-3 max-w-[750px] text-slate-500 leading-7">
      Protect important records that help your family navigate
      difficult situations and preserve your legacy for future generations.
    </p>

  </div>

  <button
    onClick={() => setOpen(true)}
    className="flex h-14 items-center gap-2 rounded-2xl bg-[#163B8C] px-6 text-sm font-medium text-white shadow-lg shadow-blue-100 transition hover:scale-[1.02]"
  >
    <Plus className="h-4 w-4" />
    Add New Record
  </button>

</div>



      {/* SEARCH */}

      <div className="flex gap-3">

        <Link
          href="/dashboard/records/search"
          className="flex flex-1 items-center gap-3 rounded-2xl border border-[#DCE3EC] bg-white px-4 py-4"
        >
          <Search className="h-5 w-5 text-slate-400" />
          <span className="text-slate-400">
            Search continuity records...
          </span>
        </Link>

        <Link
          href="/dashboard/records/filter"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl border border-[#DCE3EC] bg-white"
        >
          <SlidersHorizontal className="h-5 w-5" />
        </Link>

      </div>


      {/* CATEGORY GRID */}

      <div className="grid gap-5 lg:grid-cols-2">

        {categories.map((item) => {

          const Icon = item.icon;

          return (

            <Link
  key={item.slug}
  href={`/dashboard/records/category/${item.slug}`}
  className="group rounded-[30px] border border-[#DCE3EC] bg-white p-6 transition-all duration-300 hover:border-[#163B8C] hover:shadow-lg"
>

  <div className="flex items-center justify-between">

    {/* LEFT */}

    <div className="flex items-center gap-5">

      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-[#EEF4FF]">

        <Icon className="h-7 w-7 text-[#163B8C]" />

      </div>

      <div>

        <h3 className="text-[18px] font-semibold text-[#0F172A]">
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {item.count}
        </p>

        <div className="mt-3 flex items-center gap-2">

          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
            Verified
          </span>

          <span className="rounded-full bg-[#EEF4FF] px-2.5 py-1 text-[11px] font-medium text-[#163B8C]">
            Protected
          </span>

        </div>

      </div>

    </div>

    {/* RIGHT */}

    <div className="flex flex-col items-end">

      <ChevronRight className="h-5 w-5 text-slate-400 transition group-hover:text-[#163B8C]" />

      <span className="mt-8 text-xs text-slate-400">
        View
      </span>

    </div>

  </div>

  {/* BOTTOM */}

  <div className="mt-5 border-t border-[#EEF2F7] pt-4">

    <div className="flex items-center justify-between">

      <p className="text-xs text-slate-400">
        Last Updated
      </p>

      <p className="text-xs font-medium text-[#163B8C]">
        Today
      </p>

    </div>

  </div>

</Link>

          );
        })}

      </div>
      <QuickAddModal
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}