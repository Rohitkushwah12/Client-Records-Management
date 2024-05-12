export const uploadFile = (file) => ({
  type: "UPLOAD_FILE",
  payload: file,
});

export const deleteRecord = (email) => ({
  type: "DELETE_RECORD",
  payload: email,
});

export const editRecord = (record) => ({
  type: "EDIT_RECORD",
  payload: record,
});

