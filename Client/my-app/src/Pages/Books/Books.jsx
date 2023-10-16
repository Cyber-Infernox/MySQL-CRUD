import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const PF = process.env.REACT_APP_SERVER_END;

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get(PF + "books");
        setBooks(response.data);
        // console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, [PF]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(PF + "books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Sayon's Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h3>{book.title}</h3>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </>
  );
};

export default Books;
