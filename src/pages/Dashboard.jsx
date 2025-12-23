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
    <div className="p-6">
      <h1 className="text-xl font-semibold">Client Dashboard</h1>
      <UsersTable users={users} />
    </div>
  );
}

export default Dashboard;
