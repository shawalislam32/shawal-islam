import DashNav from '@/components/dashboard/DashNav';
import DashSidebar from '@/components/dashboard/DashSidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className='flex'>
      <DashNav />
      <DashSidebar />
      {children}
    </div>
  );
}
