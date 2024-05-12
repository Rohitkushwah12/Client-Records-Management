import React, { useState } from "react";
import Pagination from "./Pagination";

const RecordList = ({ records, searchTerm, onDelete, onEdit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const filteredRecords = records.filter(
    (record) =>
      record.id.toString().includes(searchTerm.toLowerCase()) ||
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentRecords = filteredRecords.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="mb-4 mt-4 text-center">Records</h2>
      {currentRecords.length === 0 ? (
        <div className="mt-3 text-center">No records found</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>
                  <button
                    onClick={() => onEdit(record)}
                    className="btn btn-primary btn-sm ml-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(record.email)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {currentRecords.length !== 0 && (
        <Pagination
          recordsPerPage={recordsPerPage}
          totalRecords={filteredRecords.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default RecordList;
