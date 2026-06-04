"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import MobileTopbar from "./MobileTopbar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7FB]">

      <div className="flex">
        <div className="hidden xl:block">
          <Sidebar />
        </div>
        <MobileSidebar
          open={open}
          setOpen={setOpen}
        />

        <div className="flex min-w-0 flex-1 flex-col">

          <MobileTopbar
            setOpen={setOpen}
          />

          <div className="w-full p-4 sm:mb-0 md:mb-140 lg:mb-200 mb-80 xl:mb-0">

            {children}
          </div>

        </div>

      </div>

    </div>
  );
}