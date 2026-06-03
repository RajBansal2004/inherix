import TopHeader from "@/components/dashboard/TopHeader";
import OverviewCards from "@/components/dashboard/OverviewCards";
import ActivityLogs from "@/components/dashboard/ActivityLogs";
import VerificationStatus from "@/components/dashboard/VerificationStatus";
import QuickActions from "@/components/dashboard/QuickActions";
import GovernanceSection from "@/components/dashboard/GovernanceSection";
import EmergencyStatus from "@/components/dashboard/EmergencyStatus";
import AuditActivity from "@/components/dashboard/AuditActivity";
import BackupExport from "@/components/dashboard/BackupExport";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      <TopHeader />

      <OverviewCards />

      <div className="grid gap-6 lg:grid-cols-2">

        <VerificationStatus />

        <EmergencyStatus />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <ActivityLogs />

        <AuditActivity />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <QuickActions />

        <GovernanceSection />

      </div>

      <BackupExport />

    </div>
  );
}