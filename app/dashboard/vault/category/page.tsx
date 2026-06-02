
import {
  Landmark,
  ChevronRight,
} from "lucide-react";

const items = [
  "Bank Accounts",
  "Investments",
  "Insurance Policies",
  "Credit Cards",
  "Loans",
];

export default function VaultCategoryPage() {
  return (
      <div className="space-y-6">

        <div>

          <h1 className="text-[32px] font-semibold text-[#0F172A]">

            Financial Information

          </h1>

          <p className="mt-2 text-slate-500">

            Manage all financial continuity records.

          </p>

        </div>

        <div className="space-y-5">

          {items.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-[28px] border border-[#DCE3EC] bg-white p-6"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">

                  <Landmark className="h-6 w-6 text-[#163B8C]" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-[#0F172A]">

                    {item}

                  </h3>

                  <p className="mt-1 text-sm text-slate-500">

                    2 items

                  </p>

                </div>

              </div>

              <ChevronRight className="h-5 w-5 text-slate-400" />

            </div>
          ))}

        </div>

      </div>

  );
}