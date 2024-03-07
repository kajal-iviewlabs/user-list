export const addData = (data) => {
  return {
    type: "addData",
    payload: data,
  };
};

export const updateData = (selectedId, activestatus, accessStatus) => {
  return {
    type: "updateData",
    id: selectedId,
    status: activestatus,
    access: accessStatus,
  };
};

export const deleteData = (index) => {
  return {
    type: "deleteData",
    index: index,
  };
};

export const showCard = (index) => {
  return {
    type: "showCard",
    index: index,
  };
};
