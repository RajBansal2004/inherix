  "use client";

  import Link from "next/link";
  import { useState } from "react";

  import DeviceFrame from "@/components/onboarding/DeviceFrame";

  export default function SetupPinScreen() {
    const [pin, setPin] = useState("");

    const handleNumber = (num: string) => {
      if (pin.length < 6) {
        setPin(pin + num);
      }
    };

    const removeDigit = () => {
      setPin(pin.slice(0, -1));
    };

    return (
      <DeviceFrame>

        <div className="flex flex-1 flex-col justify-between px-8 py-5">
          <div>

            <h1 className="text-center text-[34px] font-semibold text-[#0F172A]">

              Create a 6-digit PIN

            </h1>

            <p className="text-center text-[16px] leading-8 text-[#64748B]">

              This PIN helps secure access
              to your continuity records.

            </p>


            <div className="mt-2 flex justify-center gap-3">

              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DCE3EC]"
                >

                  {pin[index] && (
                    <div className="h-3 w-3 rounded-full bg-[#163B8C]" />
                  )}

                </div>
              ))}

            </div>


            <div className="mt-6 grid grid-cols-3 gap-4">

              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumber(num.toString())}
                  className="h-14 rounded-2xl border border-[#DCE3EC] text-[18px] font-medium text-[#0F172A]"
                >
                  {num}
                </button>
              ))}

              <div />

              <button
                onClick={() => handleNumber("0")}
                className="h-14 rounded-2xl border border-[#DCE3EC]"
              >
                0
              </button>

              <button
                onClick={removeDigit}
                className="h-14 rounded-2xl border border-[#DCE3EC]"
              >
                ⌫
              </button>

            </div>

          </div>


          <Link href="/onboarding/security-setup">

            <button className=" mt-4 h-14 w-full rounded-2xl bg-[#163B8C] text-white hover:bg-[#1D4ED8]">

              Continue

            </button>

          </Link>

        </div>

      </DeviceFrame>
    );
  }