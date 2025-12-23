function ErrorState({ message }) {
  return (
    <div className="text-center text-red-600 p-4">
      {message || "Something went wrong"}
    </div>
  );
}

export default ErrorState;
