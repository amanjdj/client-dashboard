import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import Loader from "../components/Loader";
import UsersTable from "../components/UsersTable";

import { useUsers } from "../hooks/useUsers";

function Dashboard() {
  const { users, loading, error } = useUsers();
  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;
  if (users.length === 0) return <EmptyState />;

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <h1 className="text-xl md:text-3xl font-semibold mb-2">
        Client Dashboard
      </h1>
      <p className="text-gray-600 mb-6">Manage and view client information</p>
      <UsersTable users={users} />
    </div>
  );
}

export default Dashboard;
