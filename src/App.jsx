import React from "react";
import Books from "./components/Books";
import Members from "./components/Members";
import BorrowRecords from "./components/BorrowRecords";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import MemeberRegistration from "./components/MemeberRegistration.jsx";
import { BorrowProvider } from "./components/BorrowContext";

const App = () => {
  const [books, setBooks] = React.useState([]);
  const [members, setMembers] = React.useState([]);

  return (
    <BorrowProvider>
      <Router>
        <div>
          <Navbar />
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Books books={books} setBooks={setBooks} />} />
              <Route path="/members" element={<Members members={members} setMembers={setMembers} />} />
              <Route path="/records" element={<BorrowRecords />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/register" element={<MemeberRegistration />} />
            </Routes>
          </div>
        </div>
      </Router>
    </BorrowProvider>
  );
};

export default App;
