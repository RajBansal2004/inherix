import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  Shield,
  Lock,
  FileCheck,
  Scale,
} from "lucide-react";

const governance = [
  {
    icon: Shield,
    title: "Privacy Principles",
    desc: "Your information remains fully protected.",
  },
  {
    icon: Lock,
    title: "Access Controls",
    desc: "Advanced role-based access management.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    desc: "Audit-ready secure infrastructure.",
  },
  {
    icon: Scale,
    title: "Legal Framework",
    desc: "Aligned with continuity governance.",
  },
];

export default function GovernancePage() {
  return (
      <div className="space-y-6">

        <div>

          <h1 className="text-[32px] font-semibold text-[#0F172A]">
            Trust & Governance
          </h1>

          <p className="mt-2 text-slate-500">
            Enterprise-grade privacy and governance controls.
          </p>

        </div>

        <div className="grid gap-5 lg:grid-cols-2">

          {governance.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#DCE3EC] bg-white p-7"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                  <Icon className="h-6 w-6 text-[#163B8C]" />

                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

  );
}