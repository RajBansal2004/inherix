const items = [
  {
    label: "User Verification",
    status: "Verified",
    color: "bg-emerald-500",
  },
  {
    label: "Beneficiary Verification",
    status: "Pending",
    color: "bg-amber-500",
  },
  {
    label: "Emergency Verification",
    status: "Normal",
    color: "bg-[#163B8C]",
  },
  {
    label: "Vault Completeness",
    status: "78%",
    color: "bg-[#163B8C]",
  },
];

export default function VerificationStatus() {
  return (
    <div className="rounded-[32px] border border-[#DCE3EC] bg-white p-7">

      <h2 className="text-[24px] font-semibold text-[#0F172A]">
        Verification Status
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Identity, beneficiary and emergency verification overview.
      </p>

      <div className="mt-4 space-y-4">

        {items.map((item) => (

          <div
            key={item.label}
            className="flex items-center justify-between rounded-2xl border border-[#EEF2F7] p-3"
          >

            <span className="font-medium text-[#0F172A]">
              {item.label}
            </span>

            <div className="flex items-center gap-2">

              <div
                className={`h-2.5 w-2.5 rounded-full ${item.color}`}
              />

              <span className="text-sm font-medium">
                {item.status}
              </span>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-2xl bg-[#EEF4FF] p-4">

        <p className="text-xs text-slate-500">
          Family Continuity Score
        </p>

        <h3 className="mt-2 text-[28px] font-semibold text-[#163B8C]">
          78%
        </h3>

        <div className="mt-3 h-2 rounded-full bg-white">

          <div className="h-2 w-[78%] rounded-full bg-[#163B8C]" />

        </div>

      </div>

    </div>
  );
}