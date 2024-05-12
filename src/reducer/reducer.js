const initialState = {
  records: JSON.parse(localStorage.getItem("records")) || [],
};

const rootReducer = (state = initialState, action) => {
  let updatedState;
  switch (action.type) {
    case "UPLOAD_FILE":
      const dataFromJsonFile = action.payload;
      const uniqueRecords = removeDuplicates(dataFromJsonFile, "email");
      const mergedRecords = mergeRecords(state.records, uniqueRecords);
      updatedState = { ...state, records: mergedRecords };
      break;

    case "DELETE_RECORD":
      const remRecords = state.records.filter(
        (record) => record.email !== action.payload
      );

      updatedState = { ...state, records: remRecords };
      break;

    case "EDIT_RECORD":
      const editedRecords = state.records.map((record) =>
        record.id !== action.payload.id ? record : action.payload
      );

      updatedState = { ...state, records: editedRecords };
      break;

    default:
      updatedState = state;
  }
  localStorage.setItem("records", JSON.stringify(updatedState.records));

  return updatedState;
};

const removeDuplicates = (array, key) => {
  const uniqueKeys = new Set();
  return array.filter((item) => {
    if (!uniqueKeys.has(item[key])) {
      uniqueKeys.add(item[key]);
      return true;
    }
    return false;
  });
};

const mergeRecords = (existingRecords, newRecords) => {
  const uniqueEmails = new Set(existingRecords.map((record) => record.email));
  const filteredNewRecords = newRecords.filter(
    (record) => !uniqueEmails.has(record.email)
  );
  return [...existingRecords, ...filteredNewRecords];
};

export default rootReducer;
