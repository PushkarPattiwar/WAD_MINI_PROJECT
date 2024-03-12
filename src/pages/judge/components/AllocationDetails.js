// AllocationDetails.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Buttons from "./button"; // Import the Buttons component

const AllocationDetails = () => {
  const [filteredProjects, setFilteredProjects] = useState([
    {
      id: "IM-J00023",
      allocated_project:
        "CO-CN0001, IM-DS0001, CO-WD0002, IM-CN0002, CO-AI0003, IM-DS0002, CO-WD0004, IM-CN0003, CO-AI0005, IM-DS0003",
    },
  ]);

  const [searchId, setSearchId] = useState("");
  const [searchedProjects, setSearchedProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects/")
      .then((response) => {
        setFilteredProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchedProjects(
      filteredProjects.filter((project) => project.id.includes(searchId))
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <form onSubmit={handleSearchSubmit}>
          <label className="mr-2">
            Search ID:
            <input
              type="text"
              value={searchId}
              onChange={handleSearchChange}
              className="border p-2 ml-2 text-black"
            />
          </label>
          {/* Use the Buttons component for the search button */}
          <Buttons
            type="submit"
            value="Search"
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSearchSubmit}
          />
        </form>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse mb-4">
          <thead className="bg-blue-500 text-yellow-200">
            <tr>
              <th colSpan="2" className="border p-2 text-center">
                Judge ID:{" "}
                {filteredProjects.length > 0 && filteredProjects[0].id}
              </th>
            </tr>
            <tr>
              <th className="border p-2 text-center">
                Allocated Projects ID's
              </th>
              <th className="border p-2 text-center">Marks Entry</th>
            </tr>
          </thead>
          <tbody>
            {searchedProjects.length > 0
              ? searchedProjects.map((project, index) => (
                  <tr key={index}>
                    <td className="border p-2">
                      {project.allocated_project
                        .split(", ")
                        .map((projectItem, projIndex) => (
                          <div key={projIndex} className="mb-2 text-center">
                            {/* Use the Buttons component for the Allocated Project IDs with rectangular border */}
                            <Buttons
                              value={projectItem}
                              className="text-blue-500 border border-gray-300 p-4 "
                              onClick={() => {}}
                            />
                            <hr className="my-2" />{" "}
                            {/* Line after each Allocated Project ID */}
                          </div>
                        ))}
                    </td>
                    <td className="border p-2">
                      {project.allocated_project
                        .split(", ")
                        .map((projectItem, projIndex) => (
                          <div key={projIndex} className="mb-2 text-center">
                            {/* Use the Buttons component for the Marks Entry link */}
                            <Buttons
                              value={`Marks Entry ${index + 1}`}
                              className="text-blue-500"
                              onClick={() => {}}
                            />
                            <hr className="my-2" />{" "}
                            {/* Line after each Marks Entry */}
                          </div>
                        ))}
                    </td>
                  </tr>
                ))
              : filteredProjects.map((project, index) => (
                  <tr key={index}>
                    <td className="border p-2">
                      {project.allocated_project
                        .split(", ")
                        .map((projectItem, projIndex) => (
                          <div key={projIndex} className="mb-2 text-center">
                            {/* Use the Buttons component for the Allocated Project IDs with button effect */}
                            <Buttons
                              value={projectItem}
                              className="text-blue-500 bg-gray-200 hover:bg-gray-300 p-4 rounded"
                              onClick={() => {}}
                            />
                            <hr className="my-2" />{" "}
                            {/* Line after each Allocated Project ID */}
                          </div>
                        ))}
                    </td>
                    <td className="border p-2">
                      {project.allocated_project
                        .split(", ")
                        .map((projectItem, projIndex) => (
                          <div key={projIndex} className="mb-2 text-center">
                            {/* Use the Buttons component for the Marks Entry link */}
                            <Buttons
                              value={`Marks Entry`}
                              className="text-blue-500"
                              onClick={() => {}}
                            />
                            <hr className="my-2" />{" "}
                            {/* Line after each Marks Entry */}
                          </div>
                        ))}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllocationDetails;
