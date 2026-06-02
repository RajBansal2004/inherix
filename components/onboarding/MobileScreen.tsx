interface Props {
  children: React.ReactNode;
}

export default function MobileScreen({
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col">

        {children}

      </div>

    </main>
  );
}