import "./App.css";
import { useEffect, useState } from "react";
import { publicRequest } from "./publicrequest";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const fetch_images = async () => {
      const res = await publicRequest.get(`/images`);
      setData(res.data);
    };

    fetch_images();
  }, []);

  const searchImage = (val) => {

    const temp =  data.filter((d) => {
       return (val.toLowerCase().includes(d.ImgName.toLowerCase()))
    });

    setData(temp);
   };

  const goToNextPage = () => {
    setPage((p) => p + 1);
  };

  const goToPreviousPage = () => {
    setPage((p) => p - 1);
  };

  const  changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = page * 9 - 9;
    const endIndex = startIndex + 9;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((page - 1) / 3) * 3;
    return new Array(3).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <div className="container">
        <div>
          <h3 className="heading">Gallery App 🖼️ </h3>
          <input
            onChange={(e) => searchImage(e.target.value)}
            type="Search"
            placeholder="Search in this gallery ..."
          />
        </div>
        <div className="image-wrapper">
          {
            getPaginatedData().map((item) => {
                return (
                  <div className="image-container">
                    <Link to={`/show/${item._id}`}>
                      <img
                        className="image"
                        key={item._id}
                        src={item.ImgUrl}
                      ></img>
                    </Link>
                  </div>
                );
            })
          }
        </div>

        {getPaginatedData().length > 0 ? (
          <div className="page-container">
            <button
              onClick={goToPreviousPage}
              className={`prev ${page === 1 ? "disabled" : ""}`}
            >
              prev
            </button>
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${page === item ? "active" : null}`}
              >
                <span>{item}</span>
              </button>
            ))}
            <button
              onClick={goToNextPage}
              className={`next ${page === 1 ? "disabled" : ""}`}
            >
              next
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
