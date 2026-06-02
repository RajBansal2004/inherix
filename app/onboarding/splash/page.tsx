import Image from "next/image";
import Link from "next/link";

export default function SplashScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F3F5F9] p-4">

      {/* MOBILE DEVICE */}

      <div className="relative h-[412px] w-full max-w-[390px] overflow-hidden rounded-[18px] border-2 border-slate-300 bg-white">
        {/* SCREEN */}

        <div className="flex h-full flex-col items-center justify-center px-10 pb-24">

          {/* LOGO */}

          <div className="flex items-center justify-center">

            <Image
              src="/logo.png"
              alt="INHERIX"
              width={120}
              height={120}
              className="object-contain"
              priority
            />

          </div>

          {/* BRAND */}

          <h1 className="mt-8 text-[64px] font-semibold tracking-[-0.06em] text-[#111827]">

            INHERIX

          </h1>

          {/* TAGLINE */}

          <p className="mt-3 text-center text-[20px] text-[#6B7280]">

            Your Legacy. Their Future.

          </p>

        </div>

        {/* BOTTOM INDICATOR */}


        {/* CONTINUE BUTTON */}

        <div className="absolute bottom-10 left-0 w-full px-6">

          <Link href="/onboarding/welcome">

            <button className="h-14 w-full rounded-2xl bg-[#163B8C] text-[15px] font-semibold text-white transition hover:bg-[#1D4ED8]">

              Continue

            </button>

          </Link>

        </div>

      </div>

    </main>
  );
}