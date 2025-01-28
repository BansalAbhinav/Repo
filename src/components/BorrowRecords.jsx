import React from "react";
import { BorrowContext } from "./BorrowContext";
import AnimatedProgressbar from "./AnimatedProgressbar";

const BorrowRecords = () => {
  const { state, dispatch, getProgress } = React.useContext(BorrowContext);
  const [selectedBooks, setSelectedBooks] = React.useState("");
  const [selectedMember, setSelectedMember] = React.useState("");

  const books = [{ id: 1, title: "Book 1" }, { id: 2, title: "Book 2" }, { id: 3, title: "Book 3" }];
  const members = [{ id: 1, name: "Member 1" }, { id: 2, name: "Member 2" }, { id: 3, name: "Member 3" }];

  const handleBorrow = () => {
    const borrowBooksCount = state.borrowRecords.filter((record) => record.memberId === selectedMember && !record.returnedDate).length;
    if (borrowBooksCount >= 3)
      return alert("You can't borrow more than 3 books at a time!");

    if (!selectedBooks || !selectedMember) return alert("Please select a book and a member!");

    const newRecord = {
      id: Date.now(),
      bookId: selectedBooks,
      memberId: selectedMember,
      borrowDate: new Date().toISOString(),
      dueDate: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      returnedDate: null,
      penalty: 0,
    };
    dispatch({ type: "ADD_RECORD", payload: newRecord });
    setSelectedBooks("");
    setSelectedMember("");
  };

  const handleReturn = (recordId) => {
    const record = state.borrowRecords.find((record) => record.id === recordId);
    const dueDate = new Date(record.dueDate);
    const returnDate = new Date();
    let penalty = 0;
    if (returnDate > dueDate) {
      const daysOverdue = Math.ceil((returnDate - dueDate) / (1000 * 60 * 60 * 24));
      penalty = daysOverdue * 5; // $5 per day penalty
    }

    dispatch({
      type: "RETURN_BOOK",
      payload: {
        id: recordId,
        penalty: penalty,
        returnedDate: returnDate.toISOString(),
      },
    });
  };

  return (
    <div className="p-4">
      {/* Borrow Form */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <h2 className="text-lg font-bold">New Borrow Record</h2>
        <div className="flex gap-4 mb-4">
          <select
            className="bg-blue-100 p-2 rounded-lg"
            value={selectedBooks}
            onChange={(e) => setSelectedBooks(e.target.value)}
          >
            <option value="">Select Book</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
          <select
            className="bg-blue-100 p-2 rounded-lg"
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
          >
            <option value="">Select Member</option>
            {members.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleBorrow} className="bg-blue-400 p-2 rounded-lg text-white">
          Borrow
        </button>
      </div>

      {/* Borrow Records */}
      <div className="space-y-4">
        {state.borrowRecords.map((record) => (
          <div key={record.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">{record.bookId}</h3>
            <p>Member: {record.memberId}</p>
            <p>Borrow Date: {new Date(record.borrowDate).toLocaleDateString()}</p>
            <p>Due Date: {new Date(record.dueDate).toLocaleDateString()}</p>
            <div className="my-2">
              <AnimatedProgressbar progress={getProgress(record.dueDate)} />
            </div>
            {record.returnedDate && <p>Returned Date: {new Date(record.returnedDate).toLocaleDateString()}</p>}
            {!record.returnedDate && (
              <button
                onClick={() => handleReturn(record.id)}
                className="bg-blue-400 p-2 rounded-lg text-white"
              >
                Return
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowRecords;
