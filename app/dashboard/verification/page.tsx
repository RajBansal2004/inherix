const verifications = [
  {
    name: "Rahul Sharma",
    role: "Spouse",
    status: "Nominee Verified",
  },

  {
    name: "Ajay Mehta",
    role: "CA",
    status: "Document Verified",
  },

  {
    name: "Vikas Desai",
    role: "Advocate",
    status: "Pending Review",
  },
];

export default function VerificationPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] p-6 lg:p-8">

      {/* HEADER */}

      <div>

        <h1 className="text-[34px] font-semibold tracking-tight text-[#020817]">

          Verification Center

        </h1>

        <p className="mt-2 text-slate-500">

          Verification status for nominees and records.

        </p>

      </div>

      {/* LIST */}

      <div className="mt-8 space-y-5">

        {verifications.map((item) => (
          <div
            key={item.name}
            className="rounded-[28px] border border-[#E2E8F0] bg-white p-6"
          >

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h3 className="text-lg font-semibold text-[#020817]">

                  {item.name}

                </h3>

                <p className="mt-1 text-sm text-slate-500">

                  {item.role}

                </p>

              </div>

              <span className={`rounded-full px-4 py-2 text-sm font-medium ${
                item.status === "Pending Review"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-emerald-100 text-emerald-700"
              }`}>

                {item.status}

              </span>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}