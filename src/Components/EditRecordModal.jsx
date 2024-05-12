import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditRecordModal = ({ record, onCancel, onSave }) => {
  const [editedRecord, setEditedRecord] = useState(record);
  const [validationError, setValidationError] = useState("");
  const records = useSelector((state) => state.records);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecord({ ...editedRecord, [name]: value });
  };

  const handleSave = () => {
    const isEmailUnique = records.every(
      (rec) => rec.email !== editedRecord.email
    );

    if (isEmailUnique) {
      onSave(editedRecord);
    } else {
      setValidationError("Email is already taken");
    }
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Record</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={editedRecord.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={editedRecord.email}
                  onChange={handleChange}
                />
              </div>
              {validationError && (
                <div className="alert alert-danger">{validationError}</div>
              )}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRecordModal;
