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
    <main className="flex h-screen overflow-hidden bg-[#F5F7FB]">

      {/* DESKTOP SIDEBAR */}

      <div className="hidden xl:block">

        <Sidebar />

      </div>

      {/* MOBILE SIDEBAR */}

      <MobileSidebar
        open={open}
        setOpen={setOpen}
      />

      {/* CONTENT */}

      <section className="flex flex-1 flex-col overflow-hidden">

        {/* MOBILE TOPBAR */}

        <MobileTopbar
          setOpen={setOpen}
        />

        {/* PAGE */}

        <div className="flex-1 overflow-y-auto p-4 sm:p-5 lg:p-6">

          {children}

        </div>

      </section>

    </main>
  );
}