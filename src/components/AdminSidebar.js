import AdminSidebar from './components/AdminSidebar';

function AdminPanel() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-4"> {/* Right content area */}</div>
    </div>
  );
}
