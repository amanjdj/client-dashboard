import { useState } from "react";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import Loader from "../components/Loader";
import UsersTable from "../components/UsersTable";

import { useUsers } from "../hooks/useUsers";

function Dashboard() {
  const { users, loading, error } = useUsers();

  const [search, setSearch] = useState("");
  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;
  if (users.length === 0) return <EmptyState />;

  const filteredUsers = users?.filter((user) => {
    return `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <h1 className="text-xl md:text-3xl font-semibold mb-2">
        Client Dashboard
      </h1>
      <p className="text-gray-600 mb-6">Manage and view client information</p>

      <input
        type="text"
        placeholder="Search users by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full md:w-1/3 px-3 py-2 border rounded focus:outline-none focus:ring"
      />
      {/* {search === "" ? (
        <UsersTable users={users} />
      ) : filteredUsers.length === 0 ? (
        <EmptyState />
      ) : (
        <UsersTable users={filteredUsers} />
      )} */}

      {filteredUsers.length === 0 ? (
        <EmptyState />
      ) : (
        <UsersTable users={filteredUsers} />
      )}
    </div>
  );
}

export default Dashboard;
