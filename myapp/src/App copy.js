import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const apiUrl = "http://localhost:5000/api";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [userdata, setUserdata] = useState(10);
  const [currentpage, setCurrentpage] = useState(1);
  const [sortField, setSortField] = useState(null); // Track the sorting field
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order
  const handlePagination = (e) => {
    const newUserPage = parseInt(e.target.value, 10);
    setUserdata(newUserPage);
    setCurrentpage(1);
  };
  const startIndex = (currentpage - 1) * userdata;
  const endIndex = startIndex + userdata;
// Apply sorting logic to data before pagination
let sortedData = [...data];
if (sortField) {
  sortedData.sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === "string" && typeof bValue === "string") {
      if (sortOrder === "asc") {    
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    } else {
      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    }
  });
}


  const paginatedData = sortedData.slice(startIndex, endIndex);
  const totalPage = Math.ceil(sortedData.length / userdata);
  const handlePageChange = (newpage) => {
    setCurrentpage(newpage);
  };
  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
    setCurrentpage(1);
  };
  const fetchApiData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        throw new Error("Failed to fetch API data");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="table-container">
            <div className="pagination">
              <select value={userdata} onChange={handlePagination}>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort("id")}>ID</th>
                  <th onClick={() => handleSort("name")}>Name</th>
                  <th onClick={() => handleSort("username")}>Username</th>
                  <th onClick={() => handleSort("email")}>Email</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <button
                disabled={currentpage === 1}
                onClick={() => handlePageChange(currentpage - 1)}
              >
                Previous
              </button>
              <button
                disabled={currentpage === totalPage}
                onClick={() => handlePageChange(currentpage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
