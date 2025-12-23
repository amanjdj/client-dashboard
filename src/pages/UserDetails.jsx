import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchUserBYID } from "../services/userApi";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUserBYID(id);
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="p-4 md:p-8 max-w-xl mx-auto">
      <Link to="/" className="text-blue-600 text-sm mb-4 inline-block">
        ⬅️ Back to Dashboard
      </Link>
      <h2 className="text-2xl font-semibold mb-4">User Details</h2>

      <div className="space-y-2 bg-white p-6 border rounded-lg shadow-sm">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
