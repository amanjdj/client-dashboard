import { useNavigate } from "react-router-dom";

function UsersTable({ users }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-100 text-sm text-gray-700">
          <tr>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Email</th>
            <th className="text-left p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              className="border-t cursor-pointer hover:bg-gray-50 transition"
            >
              <td className="p-4 font-medium">{user.name}</td>
              <td className="p-4 text-gray-600">{user.email}</td>
              <td className="p-4">
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700 ">
                  Active
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
