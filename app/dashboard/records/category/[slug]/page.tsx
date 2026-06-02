import Link from "next/link";
import {
  FileText,
  ChevronRight,
} from "lucide-react";

const documents = [
  {
    id: 1,
    title: "Will Document.pdf",
    status: "Verified",
  },
  {
    id: 2,
    title: "Property Papers.pdf",
    status: "Pending",
  },
  {
    id: 3,
    title: "Insurance Policy.pdf",
    status: "Verified",
  },
];

export default function CategoryPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>

        <p className="text-sm text-slate-500">
          Continuity Records / Legal Documents
        </p>

        <h1 className="mt-2 text-[34px] font-semibold text-[#020817]">
          Legal Documents
        </h1>

        <p className="mt-2 text-slate-500">
          Manage all legal continuity documents.
        </p>

      </div>

      {/* LIST */}

      <div className="space-y-5">

        {documents.map((item) => (
          <Link
            href={`/dashboard/records/${item.id}`}
            key={item.id}
            className="flex items-center justify-between rounded-[28px] border border-[#DCE3EC] bg-white p-6 transition hover:border-[#163B8C]"
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
                  {item.status}
                </p>

              </div>

            </div>

            <ChevronRight className="h-5 w-5 text-slate-400" />

          </Link>
        ))}

      </div>

    </div>
  );
}