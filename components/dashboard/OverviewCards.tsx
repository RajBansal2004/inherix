import {
  FolderOpen,
  ShieldCheck,
  Users,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Continuity Records",
    value: "24",
    desc: "Securely stored records",
    icon: FolderOpen,
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Verified Documents",
    value: "15",
    desc: "Successfully verified",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Professional Access",
    value: "7",
    desc: "Trusted professionals",
    icon: Users,
    color: "bg-violet-50 text-violet-700",
  },
  {
    title: "Emergency Status",
    value: "Normal",
    desc: "Protection active",
    icon: Activity,
    color: "bg-amber-50 text-amber-700",
  },
];

export default function OverviewCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-[30px] border border-[#DCE3EC] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#163B8C] hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

  <div className="flex items-center gap-3">

    <div
      className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.color}`}
    >
      <Icon className="h-5 w-5" />
    </div>

    <p className="text-sm font-semibold text-[#0F172A]">
      {card.title}
    </p>

  </div>

  <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-[#163B8C]" />

</div>

            <div className="mt-3">

              <h2 className="mt-3 text-[36px] font-semibold tracking-tight text-[#0F172A]">

                {card.value}

              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {card.desc}
              </p>

            </div>

            <div className="mt-6 flex items-center justify-between">

              <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-slate-600">
                Updated Today
              </span>

              <span className="text-xs font-medium text-[#163B8C]">
                View Details
              </span>

            </div>

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#EEF4FF] opacity-0 transition-all duration-300 group-hover:opacity-100" />

          </div>
        );
      })}
    </div>
  );
}