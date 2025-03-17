import { useEffect, useState } from "react";

const UserQueries = () => {
  const [queries, setQueries] = useState<string[]>([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch("/api/queries");
        const data = await response.json();
        setQueries(data.queries);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, []);

  return (
    <div>
      <h2>User Queries</h2>
      <ul>
        {queries.map((query, index) => (
          <li key={index}>{query}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserQueries;
