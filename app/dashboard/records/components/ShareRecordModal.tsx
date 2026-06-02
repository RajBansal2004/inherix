"use client";

import {
  X,
  UserPlus,
} from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const people = [
  {
    name: "Sarah Johnson",
    relation: "Full Access",
  },
  {
    name: "Michael Johnson",
    relation: "View Only",
  },
];

export default function ShareRecordModal({
  open,
  setOpen,
}: Props) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-[32px] border border-[#DCE3EC] bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#EEF2F7] p-5">

          <div>

            <h2 className="text-xl font-semibold text-[#0F172A]">
              Share Will Document
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Share with trusted people
            </p>

          </div>

          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0]"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* Users */}

        <div className="space-y-3 p-5">

          {people.map((person) => (
            <div
              key={person.name}
              className="flex items-center justify-between rounded-2xl border border-[#EEF2F7] p-4"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF4FF] font-semibold text-[#163B8C]">

                  {person.name
                    .split(" ")
                    .map((x) => x[0])
                    .join("")}

                </div>

                <div>

                  <h4 className="font-medium text-[#0F172A]">
                    {person.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {person.relation}
                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5"
              />

            </div>
          ))}

          {/* Add Person */}

          <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[#CBD5E1] py-4 text-sm font-medium text-[#163B8C]">

            <UserPlus className="h-4 w-4" />

            Add Another Person

          </button>

        </div>

        {/* Footer */}

        <div className="border-t border-[#EEF2F7] p-5">

          <button
            className="h-12 w-full rounded-2xl bg-[#163B8C] text-sm font-medium text-white"
          >
            Update Sharing
          </button>

        </div>

      </div>

    </div>
  );
}