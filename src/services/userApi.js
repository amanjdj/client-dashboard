const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return await res.json();
}

export async function fetchUserBYID(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user details");
  }
  return await res.json();
}
