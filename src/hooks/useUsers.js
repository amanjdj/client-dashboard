import { useEffect } from "react";
import { useState } from "react";
import { fetchUsers } from "../services/userApi";

export function useUsers() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return { users, error, loading };
}
