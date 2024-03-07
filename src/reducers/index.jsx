const initialstate = {
  userdata: [],
  usercarddata: [],
};

export const userdetails = (state = initialstate, action) => {
  switch (action.type) {
    case `addData`: {
      const updateddata = action.payload.map((item) => ({
        ...item,
        status: "InActive",
        access: "Manager",
      }));

      return {
        ...state,
        userdata: updateddata,
      };
    }

    case `updateData`: {
      const updateddata = state.userdata.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            status: action.status,
            access: action.access,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        userdata: updateddata,
      };
    }

    case `deleteData`: {
      const updateddata = [...state.userdata];
      updateddata.splice(action.index, 1);

      return {
        ...state,
        userdata: updateddata,
      };
    }

    case `showCard`: {
      const data = [...state.userdata];
      let updatedcarddata = data[action.index];

      return {
        ...state,
        usercarddata: updatedcarddata,
      };
    }

    default:
      return state;
  }
};
