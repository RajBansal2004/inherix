interface Props {
  children: React.ReactNode;
}

export default function AuthCard({
  children,
}: Props) {
  return (
    <div className="rounded-[32px] border border-[#E2E8F0] bg-white p-10">

      {children}

    </div>
  );
}