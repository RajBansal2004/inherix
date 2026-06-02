import Link from "next/link";

import {
  FileCheck2,
  ChevronRight,
  Clock3,
  CircleCheckBig,
} from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Create Will",
    priority: "High Priority",
    time: "15 min",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Add Beneficiaries",
    priority: "High Priority",
    time: "10 min",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Document Digital Assets",
    priority: "Medium Priority",
    time: "20 min",
    status: "Completed",
  },
  {
    id: 4,
    title: "Write Personal Letter",
    priority: "Low Priority",
    time: "30 min",
    status: "Pending",
  },
  {
    id: 5,
    title: "Review & Update Plan",
    priority: "Medium Priority",
    time: "15 min",
    status: "Completed",
  },
];

export default function AllTasksPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm font-medium text-[#163B8C]">
            Legacy Planning
          </p>

          <h1 className="mt-2 text-[30px] font-semibold tracking-tight text-[#0F172A] lg:text-[38px]">
            All Tasks
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500 lg:text-base">
            Track and manage all continuity planning activities securely.
          </p>

        </div>

        {/* STATS */}

        <div className="flex gap-3">

          <div className="rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 text-center shadow-sm">

            <p className="text-xs text-slate-500">
              In Progress
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-[#0F172A]">
              3
            </h3>

          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 text-center shadow-sm">

            <p className="text-xs text-slate-500">
              Completed
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-[#0F172A]">
              5
            </h3>

          </div>

        </div>

      </div>

      {/* TABS */}

      <div className="flex items-center gap-3 overflow-x-auto pb-1">

        <button className="rounded-2xl bg-[#163B8C] px-5 py-2.5 text-sm font-medium text-white">

          All

        </button>

        <button className="rounded-2xl border border-[#DCE3EC] bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#F8FAFC]">

          In Progress

        </button>

        <button className="rounded-2xl border border-[#DCE3EC] bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#F8FAFC]">

          Completed

        </button>

      </div>

      {/* TASK LIST */}

      <div className="grid gap-4">

        {tasks.map((task) => (
          <Link
            key={task.id}
            href={`/dashboard/tasks/${task.id}`}
            className="group rounded-[30px] border border-[#DCE3EC] bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#163B8C] hover:shadow-md"
          >

            <div className="flex items-start justify-between gap-4">

              {/* LEFT */}

              <div className="flex gap-4">

                {/* ICON */}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF4FF] transition group-hover:bg-[#163B8C]">

                  {task.status === "Completed" ? (
                    <CircleCheckBig className="h-6 w-6 text-[#163B8C] group-hover:text-white" />
                  ) : (
                    <FileCheck2 className="h-6 w-6 text-[#163B8C] group-hover:text-white" />
                  )}

                </div>

                {/* TEXT */}

                <div>

                  <h3 className="text-[17px] font-semibold text-[#0F172A]">

                    {task.title}

                  </h3>

                  {/* META */}

                  <div className="mt-3 flex flex-wrap items-center gap-2">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        task.priority === "High Priority"
                          ? "bg-red-100 text-red-700"
                          : task.priority === "Medium Priority"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >

                      {task.priority}

                    </span>

                    <div className="flex items-center gap-1 rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-slate-600">

                      <Clock3 className="h-3.5 w-3.5" />

                      {task.time}

                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        task.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : task.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >

                      {task.status}

                    </span>

                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white transition group-hover:border-[#163B8C] group-hover:bg-[#163B8C]">

                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-white" />

              </div>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}