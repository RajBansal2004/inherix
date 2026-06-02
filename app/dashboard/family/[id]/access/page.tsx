import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AccessManagementPage() {
  return (
    <div className="mx-auto max-w-[900px] space-y-6">

      <div className="flex items-center gap-4">

        <Link
          href="/dashboard/family/1"
          className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-white"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div>

          <p className="text-sm font-medium text-[#163B8C]">
            Permission Management
          </p>

          <h1 className="text-[34px] font-semibold">
            Access Control
          </h1>

        </div>

      </div>

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-8">

        <div className="space-y-5">

          <label className="flex items-center gap-4 rounded-2xl border p-5">

            <input type="checkbox" />

            Financial Records

          </label>

          <label className="flex items-center gap-4 rounded-2xl border p-5">

            <input type="checkbox" />

            Legal Documents

          </label>

          <label className="flex items-center gap-4 rounded-2xl border p-5">

            <input type="checkbox" />

            Personal Documents

          </label>

          <label className="flex items-center gap-4 rounded-2xl border p-5">

            <input type="checkbox" />

            Emergency Access

          </label>

          <label className="flex items-center gap-4 rounded-2xl border p-5">

            <input type="checkbox" />

            Full Access

          </label>

        </div>

        <button className="mt-8 h-14 w-full rounded-2xl bg-[#163B8C] text-white font-medium">

          Save Permissions

        </button>

      </div>

    </div>
  );
}