import Image from "next/image";

export default function BrandHeader() {
  return (
    <>
      <div className="flex flex-col items-center">

        <Image
          src="/logo.png"
          alt="INHERIX"
          width={80}
          height={80}
          priority
        />

        <h1 className="text-[34px] font-extrabold tracking-tight text-[#0B1736]">
          INHERIX
        </h1>

      </div>

      <div className="flex items-center gap-3">

        <div className="h-[1px] flex-1 bg-[#D8DEE8]" />

        <p className="whitespace-nowrap text-[16px] font-semibold text-[#2453A6]">
          Digital Continuity Institution
        </p>

        <div className="h-[1px] flex-1 bg-[#D8DEE8]" />

      </div>
    </>
  );
}