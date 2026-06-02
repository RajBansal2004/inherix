"use client";

import {
  Menu,
  Bell,
} from "lucide-react";

interface Props {
  setOpen: (value: boolean) => void;
}

export default function MobileTopbar({
  setOpen,
}: Props) {
  return (
    <header className="flex items-center justify-between border-b border-[#DCE3EC] bg-white px-4 py-4 xl:hidden">

      {/* LEFT */}

      <div className="flex items-center gap-3">

        <button
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE3EC]"
        >

          <Menu className="h-5 w-5 text-[#0F172A]" />

        </button>

        <div>

          <h1 className="text-[20px] font-semibold tracking-tight text-[#163B8C]">

            INHERIX

          </h1>

        </div>

      </div>

      {/* RIGHT */}

      <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE3EC] bg-white">

        <Bell className="h-5 w-5 text-[#0F172A]" />

      </button>

    </header>
  );
}