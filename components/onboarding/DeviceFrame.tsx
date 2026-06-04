interface Props {
  children: React.ReactNode;
}

export default function DeviceFrame({
  children,
}: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-4 sm:p-6">

      <div className="relative w-full max-w-[420px] rounded-[12px] border-2 border-slate-300 bg-white shadow-sm">

        {children}

      </div>

    </main>
  );
}