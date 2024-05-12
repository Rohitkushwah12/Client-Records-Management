import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord, editRecord, uploadFile } from "../actions/actions";
import FileUploadComponent from "./FileUploadComponent";
import RecordList from "./RecordList";
import SearchBar from "./SearchBar";
import EditRecordModal from "./EditRecordModal";

const MainScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingRecord, setEditingRecord] = useState(null);
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records);

  const handleFileUpload = (file) => {
    dispatch(uploadFile(file));
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
  };

  const handleDelete = (email) => {
    dispatch(deleteRecord(email));
  };

  return (
    <>
    <div className="container mt-5">
      <h1 className="mb-4">Client Records Management</h1>
      <FileUploadComponent onFileUpload={handleFileUpload} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RecordList
        records={records}
        searchTerm={searchTerm}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
    {editingRecord && (
        <EditRecordModal
          record={editingRecord}
          onCancel={() => setEditingRecord(null)}
          onSave={(updatedRecord) => {
            dispatch(editRecord(updatedRecord));
            setEditingRecord(null);
          }}
        />
      )}
    </>
  );
};

export default MainScreen;
