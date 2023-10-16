import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Update = () => {
  const PF = process.env.REACT_APP_SERVER_END;
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const params = useParams();

  //   const location = useLocation();
  //   const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${PF}books/${params.id}`, book);
      //   await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form">
        <h2>Update The Book</h2>
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="price"
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="cover"
          onChange={handleChange}
          name="cover"
        />
        <button className="formButton" onClick={handleClick}>
          Update
        </button>
      </div>
    </>
  );
};

export default Update;
