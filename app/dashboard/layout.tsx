import SideNav from "@/app/ui/dashboard/sidenav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen md:overflow-hidden md:flex-row">
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

export default Layout;
