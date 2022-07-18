import "./App.css";
import { useEffect, useState } from "react";
import { publicRequest } from "./publicrequest";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Image = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);

  useEffect(() => {
    try {
      const fetch_images = async () => {
        const res = await publicRequest.get(`/images/${id}`);
        setData(res.data);
        console.log(res.data);
      };
      fetch_images();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const deleteImage = async () => {
    try {
      const res = await publicRequest.delete(`/delete/${id}`);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    margin:"20px",
  }

  console.log(data);

  return (
    <>
      <div>
        {data.length > 0 ? (
          data.map((item) => {
            console.log(item.ImgUrl);
            return (
              <div className="img-container" key={item._id}>
                <h3 className="heading">{item.ImgName}</h3>
                <div className="img">
                  <img src={item.ImgUrl} alt="new"></img>
                </div>
                <div className="button-wrapper">
                  <Link to={`/new`}>
                    <button className="btn">New</button>
                  </Link>
                  <Link to={`/${item._id}/edit`}>
                    <button className="btn">Edit</button>
                  </Link>
                  <Link to={`/delete`}>
                    <button className="btn" onClick={deleteImage}>
                      Delete
                    </button>{" "}
                  </Link>
                </div>
                <p className="details">{item.ImgDetails}</p>
              </div>
            );
          })
        ) : (
          <div style={style}> <h3>Image does not exist</h3> .</div>
        )}
      </div>
      
    </>
  );
};

export default Image;
