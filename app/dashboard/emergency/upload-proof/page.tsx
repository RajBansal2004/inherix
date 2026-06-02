import Link from "next/link";
import {
  ArrowLeft,
  UploadCloud,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Lock,
  ChevronRight,
} from "lucide-react";

export default function UploadProofPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] space-y-8">

      {/* HEADER */}
{/* HEADER */}

<div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 md:p-8">

  <div className="flex items-start gap-4">

    <Link
      href="/dashboard/emergency/request"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#DCE3EC] bg-white transition hover:bg-[#F8FAFC]"
    >
      <ArrowLeft className="h-5 w-5 text-[#0F172A]" />
    </Link>

    <div className="min-w-0 flex-1">

      <div className="flex flex-wrap items-center gap-2">

        <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#163B8C]">
          Emergency Access Centre
        </span>

        <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#163B8C]">
          Step 2 of 3
        </span>

      </div>

      <h1 className="mt-3 text-[28px] font-semibold leading-tight text-[#0F172A] md:text-[40px]">
        Upload Supporting Proof
      </h1>

      <p className="mt-2 max-w-[700px] text-sm leading-7 text-slate-500">
        Upload supporting documents for verification. These files
        help validate the emergency request before access approval.
      </p>

    </div>

  </div>

  <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-4">

    <div className="flex items-center justify-between">

      <span className="text-sm font-medium text-[#163B8C]">
        Request Progress
      </span>

      <span className="text-sm font-semibold text-[#0F172A]">
        66%
      </span>

    </div>

    <div className="mt-3 h-2 rounded-full bg-slate-200">

      <div className="h-2 w-2/3 rounded-full bg-[#163B8C]" />

    </div>

  </div>

</div>

      {/* CONTENT */}

      <div className="grid gap-6 xl:grid-cols-[1fr_380px]">

        {/* LEFT */}

        <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-7">

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Upload Documents
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Upload one or more supporting documents.
          </p>

          <div className="mt-8 rounded-[32px] border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] p-12 text-center">

            <UploadCloud className="mx-auto h-16 w-16 text-[#163B8C]" />

            <h3 className="mt-5 text-xl font-semibold">
              Drag & Drop Files
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              PDF, JPG, PNG up to 10MB
            </p>

            <button className="mt-6 rounded-2xl bg-[#163B8C] px-6 py-3 text-sm font-medium text-white">
              Browse Files
            </button>

          </div>

          {/* TRUST */}

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="flex items-center gap-3 rounded-2xl border border-[#EEF2F7] p-4">

              <ShieldCheck className="h-5 w-5 text-emerald-600" />

              <span className="text-sm">
                Encrypted Upload
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-[#EEF2F7] p-4">

              <Lock className="h-5 w-5 text-[#163B8C]" />

              <span className="text-sm">
                Secure Storage
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          {/* REQUIRED */}

          <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

            <h3 className="text-lg font-semibold">
              Required Documents
            </h3>

            <div className="mt-5 space-y-4">

              {[
                "Government ID",
                "Death Certificate",
                "Medical Certificate",
                "Court Order",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />

                  <span className="text-sm text-[#0F172A]">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* FILES */}

          <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

            <h3 className="text-lg font-semibold">
              Uploaded Files
            </h3>

            <div className="mt-5 space-y-3">

              {[
                "DeathCertificate.pdf",
                "AadhaarCard.pdf",
              ].map((file) => (
                <div
                  key={file}
                  className="flex items-center gap-3 rounded-2xl border border-[#EEF2F7] p-4"
                >

                  <FileText className="h-5 w-5 text-[#163B8C]" />

                  <span className="text-sm font-medium">
                    {file}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* CTA */}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

        <Link
          href="/dashboard/emergency/request"
          className="flex h-14 items-center justify-center rounded-2xl border border-[#DCE3EC] px-8 text-sm font-medium"
        >
          Back
        </Link>

        <Link
          href="/dashboard/emergency/verification"
          className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#163B8C] px-8 text-sm font-medium text-white shadow-lg"
        >
          Submit Verification

          <ChevronRight className="h-4 w-4" />

        </Link>

      </div>

    </div>
  );
}