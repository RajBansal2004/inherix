const logs = [
  {
    title: "Login Activity",
    desc: "New login from Chrome - Mumbai",
    time: "10:45 AM",
  },
  {
    title: "File Updated",
    desc: "Will document was updated",
    time: "09:10 AM",
  },
  {
    title: "Access Changed",
    desc: "CA access updated",
    time: "Yesterday",
  },
  {
    title: "Export Generated",
    desc: "Backup exported securely",
    time: "2 Days Ago",
  },
];

export default function ActivityLogs() {
  return (
    <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-7">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-[22px] font-semibold tracking-tight text-[#0F172A]">

            Recent Activity

          </h2>

          <p className="mt-1 text-sm text-slate-500">

            System activity and governance actions

          </p>

        </div>

        <button className="text-sm font-medium text-[#163B8C]">

          View All

        </button>

      </div>

      {/* LOGS */}

      <div className="mt-8 space-y-5">

        {logs.map((log) => (
          <div
            key={log.title}
            className="flex items-start justify-between rounded-2xl border border-[#EEF2F7] p-5"
          >

            <div className="flex gap-4">

              <div className="mt-1 h-3 w-3 rounded-full bg-[#163B8C]" />

              <div>

                <h3 className="text-[15px] font-semibold text-[#0F172A]">

                  {log.title}

                </h3>

                <p className="mt-1 text-sm text-slate-500">

                  {log.desc}

                </p>

              </div>

            </div>

            <span className="text-sm text-slate-400">

              {log.time}

            </span>

          </div>
        ))}

      </div>

    </div>
  );
}