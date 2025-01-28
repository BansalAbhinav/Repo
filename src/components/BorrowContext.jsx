import React, { createContext, useReducer } from "react";

const initialState = {
  borrowRecords: [],
};

const borrowReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      return {
        ...state,
        borrowRecords: [...state.borrowRecords, action.payload],
      };
    case "RETURN_BOOK":
      return {
        ...state,
        borrowRecords: state.borrowRecords.map((record) =>
          record.id === action.payload.id
            ? { ...record, returnedDate: action.payload.returnedDate, penalty: action.payload.penalty }
            : record
        ),
      };
    default:
      return state;
  }
};

export const BorrowContext = createContext();

export const BorrowProvider = ({ children }) => {
  const [state, dispatch] = useReducer(borrowReducer, initialState);

  const getProgress = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const totalDays = 14; // Borrow duration in days
    const daysRemaining = Math.max(0, Math.ceil((due - today) / (1000 * 60 * 60 * 24)));
    return Math.min(100, ((totalDays - daysRemaining) / totalDays) * 100);
  };

  return (
    <BorrowContext.Provider value={{ state, dispatch, getProgress }}>
      {children}
    </BorrowContext.Provider>
  );
};
