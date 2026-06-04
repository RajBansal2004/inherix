import Link from "next/link";

import {
  CheckCircle2,
  ShieldCheck,
  Users,
  FolderLock,
  FileCheck2,
} from "lucide-react";

import DeviceFrame from "@/components/onboarding/DeviceFrame";

const steps = [
  {
    icon: FolderLock,
    title: "Add your important information",
  },

  {
    icon: FileCheck2,
    title: "Organize your digital assets",
  },

  {
    icon: Users,
    title: "Invite trusted connections",
  },

  {
    icon: ShieldCheck,
    title: "Create your continuity plan",
  },
];

export default function WhatsNextScreen() {
  return (
    <DeviceFrame>

      <div className="flex flex-1 flex-col justify-between px-8 py-5">
        <div>
          <div className="flex justify-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#DCE3EC] bg-[#EEF4FF]">

              <CheckCircle2 className="h-12 w-12 text-[#163B8C]" />

            </div>

          </div>
          <div className="mt-2 text-center">

            <h1 className="text-[34px] font-semibold tracking-tight text-[#0F172A]">

              What’s Next?

            </h1>

            <p className=" text-[16px] leading-8 text-[#64748B]">

              Your continuity workspace is ready.
              Here’s what you can do next.

            </p>

          </div>
          <div className="mt-2 space-y-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex items-center gap-4 rounded-2xl border border-[#DCE3EC] bg-white p-1"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                    <Icon className="h-5 w-5 text-[#163B8C]" />

                  </div>

                  <p className="text-[15px] font-medium text-[#0F172A]">

                    {step.title}

                  </p>

                </div>
              );
            })}

          </div>

        </div>
        <Link href="/dashboard">

          <button className=" mt-4 h-14 w-full rounded-2xl bg-[#163B8C] text-[16px] font-medium text-white transition hover:bg-[#1D4ED8]">

            Go to Dashboard

          </button>

        </Link>

      </div>

    </DeviceFrame>
  );
}