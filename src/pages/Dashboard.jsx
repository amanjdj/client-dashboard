import { useUsers } from "../hooks/useUsers";

function Dashboard() {
  const { users, loading, error } = useUsers();
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Errrorrrrr</p>;
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Users</h1>
      <p className="">Total Users: {users.length}</p>
    </div>
  );
}

export default Dashboard;
