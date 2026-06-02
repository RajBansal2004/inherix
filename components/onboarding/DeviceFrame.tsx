interface Props {
  children: React.ReactNode;
}

export default function DeviceFrame({
  children,
}: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">

      {/* DEVICE */}

      <div className="relative flex h-[620px] w-full max-w-[420px] flex-col overflow-hidden rounded-[12px] border-2 border-slate-300 bg-white">

        {children}

      </div>

    </main>
  );
}