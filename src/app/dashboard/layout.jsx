import DashNav from "@/components/dashboard/DashNav";
import DashSidebar from "@/components/dashboard/DashSidebar";


export default function DashboardLayout({ children }) {
    return (
        <div className="flex gap-5">
            <DashNav/>
            <DashSidebar/>
            {children}
        </div>
    );
}