import {
  ShieldCheck,
  Smartphone,
  Lock,
  Fingerprint,
  KeyRound,
  Monitor,
  AlertTriangle,
  CheckCircle2,
  Bell,
} from "lucide-react";

export default function SecurityCentrePage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6 lg:p-8">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-3 py-1">

              <ShieldCheck className="h-4 w-4 text-[#163B8C]" />

              <span className="text-xs font-medium text-[#163B8C]">
                Trust & Security
              </span>

            </div>

            <h1 className="mt-4 text-[34px] font-semibold text-[#0F172A]">
              Security Centre
            </h1>

            <p className="mt-2 max-w-[700px] text-slate-500">
              Manage authentication, devices, security alerts and
              account protection settings for your continuity vault.
            </p>

          </div>

          <div className="rounded-3xl bg-[#EEF4FF] px-6 py-5">

            <p className="text-sm text-slate-500">
              Security Score
            </p>

            <h2 className="mt-1 text-5xl font-semibold text-[#163B8C]">
              92
            </h2>

            <p className="mt-1 text-sm text-emerald-600">
              Excellent Protection
            </p>

          </div>

        </div>

      </div>

      {/* SECURITY SCORE */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-semibold text-[#0F172A]">
            Security Health
          </h2>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            Protected
          </span>

        </div>

        <div className="mt-5 h-3 rounded-full bg-slate-100">

          <div className="h-3 w-[92%] rounded-full bg-[#163B8C]" />

        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">

          <div className="rounded-2xl bg-[#F8FAFC] p-4">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <p className="mt-2 text-sm">Email Verified</p>
          </div>

          <div className="rounded-2xl bg-[#F8FAFC] p-4">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <p className="mt-2 text-sm">MFA Enabled</p>
          </div>

          <div className="rounded-2xl bg-[#F8FAFC] p-4">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <p className="mt-2 text-sm">PIN Protected</p>
          </div>

          <div className="rounded-2xl bg-[#F8FAFC] p-4">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <p className="mt-2 text-sm">Device Verified</p>
          </div>

        </div>

      </div>

      {/* AUTH + DEVICES */}

      <div className="grid gap-6 xl:grid-cols-2">

        {/* AUTHENTICATION */}

        <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

          <h2 className="text-xl font-semibold">
            Authentication
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex items-center justify-between rounded-2xl border p-4">

              <div className="flex items-center gap-3">

                <Lock className="h-5 w-5 text-[#163B8C]" />

                <span>Password Protection</span>

              </div>

              <span className="text-emerald-600 font-medium">
                Active
              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl border p-4">

              <div className="flex items-center gap-3">

                <KeyRound className="h-5 w-5 text-[#163B8C]" />

                <span>Security PIN</span>

              </div>

              <span className="text-emerald-600 font-medium">
                Enabled
              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl border p-4">

              <div className="flex items-center gap-3">

                <Fingerprint className="h-5 w-5 text-[#163B8C]" />

                <span>Biometric Access</span>

              </div>

              <span className="text-emerald-600 font-medium">
                Enabled
              </span>

            </div>

          </div>

        </div>

        {/* DEVICES */}

        <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

          <h2 className="text-xl font-semibold">
            Device Monitoring
          </h2>

          <div className="mt-6 space-y-4">

            <div className="rounded-2xl border p-4">

              <div className="flex items-center gap-3">

                <Monitor className="h-5 w-5 text-[#163B8C]" />

                <div>

                  <h3 className="font-medium">
                    Windows Laptop
                  </h3>

                  <p className="text-sm text-slate-500">
                    Delhi • Active Now
                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-2xl border p-4">

              <div className="flex items-center gap-3">

                <Smartphone className="h-5 w-5 text-[#163B8C]" />

                <div>

                  <h3 className="font-medium">
                    iPhone 15
                  </h3>

                  <p className="text-sm text-slate-500">
                    Mumbai • 3 Hours Ago
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* THREAT DETECTION */}

      <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-semibold">
            Threat Detection
          </h2>

          <Bell className="h-5 w-5 text-[#163B8C]" />

        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border p-5">

            <AlertTriangle className="h-6 w-6 text-emerald-600" />

            <h3 className="mt-3 font-medium">
              Failed Logins
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              No suspicious attempts detected.
            </p>

          </div>

          <div className="rounded-2xl border p-5">

            <AlertTriangle className="h-6 w-6 text-emerald-600" />

            <h3 className="mt-3 font-medium">
              Unknown Devices
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              No unrecognized devices found.
            </p>

          </div>

          <div className="rounded-2xl border p-5">

            <AlertTriangle className="h-6 w-6 text-emerald-600" />

            <h3 className="mt-3 font-medium">
              Location Changes
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              No abnormal activity detected.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}