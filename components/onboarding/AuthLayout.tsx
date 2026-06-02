interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
}: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] px-4 py-6">

      {/* CONTAINER */}

      <div className="w-full max-w-[420px]">

        {children}

      </div>

    </main>
  );
}