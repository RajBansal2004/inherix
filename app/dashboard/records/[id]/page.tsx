"use client";
import {
  FileText,
  Shield,
  Download,
  Share2,
  Pencil,
} from "lucide-react";


import { useState } from "react";
import ShareRecordModal from "../components/ShareRecordModal";
export default function RecordDetailPage() {
  const [shareOpen, setShareOpen] = useState(false);
  return (
    <div className="space-y-6">

      {/* TOP */}

      <div className="flex flex-col gap-5 rounded-[30px] border border-[#DCE3EC] bg-white p-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#EEF4FF]">

            <FileText className="h-8 w-8 text-[#163B8C]" />

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Continuity Records / Legal Documents
            </p>

            <h1 className="mt-2 text-[34px] font-semibold text-[#020817]">
              Will Document.pdf
            </h1>

            <p className="mt-2 text-slate-500">
              Secure continuity file
            </p>

          </div>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => setShareOpen(true)}
            className="flex h-12 items-center gap-2 rounded-2xl border border-[#DCE3EC] px-5 text-sm font-medium"
          >
            <Share2 className="h-4 w-4" />
            Share
          </button>

          <button className="flex h-12 items-center gap-2 rounded-2xl bg-[#163B8C] px-5 text-sm font-medium text-white">

            <Pencil className="h-4 w-4" />
            Edit

          </button>

        </div>

      </div>

      {/* DETAILS */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-8">

          <h3 className="text-lg font-semibold text-[#020817]">
            Record Information
          </h3>

          <div className="mt-6 space-y-5">

            <div>

              <p className="text-sm text-slate-500">
                Category
              </p>

              <h4 className="mt-1 text-xl font-semibold text-[#0F172A]">
                Legal Documents
              </h4>

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Last Updated
              </p>

              <h4 className="mt-1 text-xl font-semibold text-[#0F172A]">
                22 May 2025
              </h4>

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Status
              </p>

              <span className="mt-2 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                Verified
              </span>

            </div>

          </div>

        </div>

        {/* SECURITY */}

        <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-8">

          <h3 className="text-lg font-semibold text-[#020817]">
            Security & Access
          </h3>

          <div className="mt-6 space-y-5">

            <div className="flex items-center gap-3">

              <Shield className="h-5 w-5 text-[#163B8C]" />

              <span className="text-[#0F172A]">
                End-to-End Encrypted
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Download className="h-5 w-5 text-[#163B8C]" />

              <span className="text-[#0F172A]">
                Backup Available
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ACTIVITY */}

      <div className="rounded-[30px] border border-[#DCE3EC] bg-white p-8">

        <h3 className="text-lg font-semibold text-[#020817]">
          Activity Timeline
        </h3>

        <div className="mt-6 space-y-5">

          <div className="flex items-center justify-between border-b border-[#EEF2F7] pb-4">

            <div>

              <h4 className="font-medium text-[#0F172A]">
                File Uploaded
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                By Rahul Sharma
              </p>

            </div>

            <p className="text-sm text-slate-500">
              22 May 2025
            </p>

          </div>

          <div className="flex items-center justify-between">

            <div>

              <h4 className="font-medium text-[#0F172A]">
                Document Verified
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Verification Center
              </p>

            </div>

            <p className="text-sm text-slate-500">
              23 May 2025
            </p>

          </div>

        </div>

      </div>
<ShareRecordModal
  open={shareOpen}
  setOpen={setShareOpen}
/>
    </div>
  );
}