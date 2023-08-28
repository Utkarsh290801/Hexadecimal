import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const apiUrl = "http://localhost:5000/api";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [userdata, setUserdata] = useState(5);
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
          <>
            <div class="page-size">
              <select
                id="pagesize"
                value={userdata}
                onChange={handlePagination}
              >
                <option value={5}>5 Per Page</option>
                <option value={10}>10 Per Page</option>
              </select>
            </div>
            <div className="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th colspan="13">User Details</th>
                  </tr>
                  <tr>
                    <th rowspan="2" onClick={() => handleSort("id")}>
                      User id
                    </th>
                    <th rowSpan="2" onClick={() => handleSort("name")}>
                      Name <i class="fa-solid fa-arrow-up-a-z"></i>
                    </th>
                    <th rowSpan="2" onClick={() => handleSort("username")}>
                      Username <i class="fa-solid fa-arrow-up-a-z"></i>
                    </th>
                    <th rowSpan="2" onClick={() => handleSort("email")}>
                      Email <i class="fa-solid fa-arrow-up-a-z"></i>
                    </th>
                    <th colspan="4">Address</th>

                    <th rowspan="2">Phone Number</th>
                    <th rowspan="2">Website</th>
                    <th colspan="3">Company</th>
                  </tr>
                  <tr>
                    <th>Street</th>
                    <th>Stuite</th>
                    <th>City</th>
                    <th>ZipCode</th>
                    <th>Name</th>
                    <th>Catch Phrase</th>
                    <th>BS</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.address.street}</td>
                      <td>{item.address.suite}</td>
                      <td>{item.address.city}</td>
                      <td>{item.address.zipcode}</td>
                      <td>{item.phone}</td>
                      <td>{item.website}</td>
                      <td>{item.company.name}</td>
                      <td>{item.company.catchPhrase}</td>
                      <td>{item.company.bs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="button-container">
              <button
                class="button"
                disabled={currentpage === 1}
                onClick={() => handlePageChange(currentpage - 1)}
              >
                Previous
              </button>
              <button
                class="button"
                disabled={currentpage === totalPage}
                onClick={() => handlePageChange(currentpage + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
