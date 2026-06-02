import {
  Database,
  Download,
  Trash2,
  ShieldCheck,
} from "lucide-react";

export default function PrivacySettingsPage() {
  return (
    <div className="mx-auto w-full max-w-[760px] space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-[34px] font-semibold tracking-tight text-[#0F172A]">
          Privacy Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage encryption, exports and data controls.
        </p>

      </div>

      {/* CARD */}

      <div className="rounded-[36px] border border-[#DCE3EC] bg-white p-5 sm:p-6">

        <div className="space-y-4">

          {/* ENCRYPTION */}

          <div className="rounded-[26px] border border-[#EEF2F7] p-5">

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                <ShieldCheck className="h-6 w-6 text-[#163B8C]" />

              </div>

              <div>

                <h3 className="text-[15px] font-semibold text-[#0F172A]">
                  End-to-End Encryption
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Your continuity records and sensitive data are encrypted and securely protected.
                </p>

              </div>

            </div>

          </div>

          {/* EXPORT */}

          <button className="flex w-full items-center justify-between rounded-[26px] border border-[#EEF2F7] p-5 transition hover:border-[#163B8C] hover:bg-[#F8FBFF]">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                <Download className="h-6 w-6 text-[#163B8C]" />

              </div>

              <div className="text-left">

                <h3 className="text-[15px] font-semibold text-[#0F172A]">
                  Export Data
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Download your continuity records
                </p>

              </div>

            </div>

          </button>

          {/* DELETE */}

          <button className="flex w-full items-center justify-between rounded-[26px] border border-red-100 bg-red-50 p-5 transition hover:bg-red-100">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">

                <Trash2 className="h-6 w-6 text-red-600" />

              </div>

              <div className="text-left">

                <h3 className="text-[15px] font-semibold text-red-600">
                  Delete All Data
                </h3>

                <p className="mt-1 text-xs text-red-400">
                  Permanently remove all continuity records
                </p>

              </div>

            </div>

          </button>

        </div>

      </div>

    </div>
  );
}