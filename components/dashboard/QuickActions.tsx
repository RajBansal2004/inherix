const actions = [
  "Add Record",
  "Grant Access",
  "View My Plan",
  "Continuity Activation",
  "Backup Now",
  "Export Data",
  "Activity Logs",
  "Help & Support",
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-[#DCE3EC] bg-white p-5">

      <h2 className="text-[20px] font-semibold text-[#0F172A]">

        Quick Actions

      </h2>

      <div className="mt-5 grid grid-cols-2 gap-4">

        {actions.map((action) => (
          <button
            key={action}
            className="rounded-xl border border-[#E2E8F0] bg-[#FAFBFD] p-5 text-center transition hover:border-[#163B8C]"
          >

            <p className="text-[14px] font-medium text-[#0F172A]">

              {action}

            </p>

          </button>
        ))}

      </div>

    </div>
  );
}