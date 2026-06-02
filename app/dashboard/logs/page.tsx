import {
  Activity,
  ShieldCheck,
  Upload,
  Download,
  Clock3,
  ChevronRight,
} from "lucide-react";

const logs = [
  {
    title: "Successful Login",
    desc: "Rahul Sharma logged in from Chrome on Windows",
    time: "22 May 2025 • 09:15 AM",
    icon: Activity,
    color: "bg-blue-100 text-blue-700",
  },

  {
    title: "Document Uploaded",
    desc: "Will document securely uploaded to Continuity Records",
    time: "22 May 2025 • 11:20 AM",
    icon: Upload,
    color: "bg-emerald-100 text-emerald-700",
  },

  {
    title: "Access Permission Changed",
    desc: "Professional access updated for Ajay Mehta",
    time: "21 May 2025 • 06:45 PM",
    icon: ShieldCheck,
    color: "bg-amber-100 text-amber-700",
  },

  {
    title: "Backup Export Completed",
    desc: "Encrypted continuity backup exported successfully",
    time: "20 May 2025 • 08:00 PM",
    icon: Download,
    color: "bg-violet-100 text-violet-700",
  },
];

export default function LogsPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] p-4 sm:p-6 lg:p-8">

      {/* HEADER */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#163B8C] text-white">

              <Activity className="h-5 w-5" />

            </div>

            <div>

              <h1 className="text-[32px] font-semibold tracking-tight text-[#0F172A]">

                Activity Logs

              </h1>

              <p className="mt-1 text-[14px] text-slate-500">

                Governance and audit trail visibility

              </p>

            </div>

          </div>

        </div>

        {/* FILTER */}

        <button className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#DCE3EC] bg-white px-5 text-sm font-medium text-[#0F172A]">

          <Clock3 className="h-4 w-4" />

          Last 30 Days

        </button>

      </div>

      {/* STATS */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-[#DCE3EC] bg-white p-5">

          <p className="text-[13px] text-slate-500">

            Total Activities

          </p>

          <h2 className="mt-3 text-[30px] font-semibold text-[#0F172A]">

            284

          </h2>

        </div>

        <div className="rounded-2xl border border-[#DCE3EC] bg-white p-5">

          <p className="text-[13px] text-slate-500">

            Security Events

          </p>

          <h2 className="mt-3 text-[30px] font-semibold text-emerald-600">

            12

          </h2>

        </div>

        <div className="rounded-2xl border border-[#DCE3EC] bg-white p-5">

          <p className="text-[13px] text-slate-500">

            Pending Reviews

          </p>

          <h2 className="mt-3 text-[30px] font-semibold text-amber-600">

            03

          </h2>

        </div>

      </div>

      {/* LOGS */}

      <div className="mt-8 space-y-5">

        {logs.map((log) => {
          const Icon = log.icon;

          return (
            <div
              key={log.title}
              className="rounded-[28px] border border-[#DCE3EC] bg-white p-6 transition hover:border-[#CBD5E1]"
            >

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* LEFT */}

                <div className="flex items-start gap-5">

                  {/* ICON */}

                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${log.color}`}>

                    <Icon className="h-6 w-6" />

                  </div>

                  {/* CONTENT */}

                  <div>

                    <h3 className="text-[18px] font-semibold text-[#0F172A]">

                      {log.title}

                    </h3>

                    <p className="mt-2 max-w-[700px] text-[14px] leading-7 text-slate-500">

                      {log.desc}

                    </p>

                    <div className="mt-4 inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5">

                      <span className="text-[12px] font-medium text-slate-500">

                        {log.time}

                      </span>

                    </div>

                  </div>

                </div>

                {/* RIGHT */}

                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0]">

                  <ChevronRight className="h-5 w-5 text-slate-400" />

                </button>

              </div>

            </div>
          );
        })}

      </div>

    </main>
  );
}