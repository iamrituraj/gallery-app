import "./App.css";
import { useEffect, useState } from "react";
import { publicRequest } from "./publicrequest";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Edit = () => {
  const [data, setData] = useState([]);
  const [Url, setUrl] = useState();
  const [Details, setDetails] = useState();

    // const id = "mFRHM9QVdSLg96f1";
    
  const location = useLocation();
  const id = location.pathname.split("/")[1];

    useEffect(() => {
        try {
            const fetch_images = async () => {
                const res = await publicRequest.get(`/images/${id}`);
                setData(res.data[0]);
            };

            fetch_images();
        } catch (e) { console.log(e); }
   
  }, []);

    const edit_image = async (e) => {
        e.preventDefault();

      const res = await publicRequest.put(`/${id}/edit`, {
            ImgName:data.ImgName,
            ImgUrl: Url,
            ImgDetails:Details
    });
      //location.reload();
  };
  console.log(data);

  return (
    <>
      <div className="container">
        <h3 className="heading"> Edit Image</h3>
        {data != null ? (
          <form className="form" onSubmit={(e) => edit_image(e)} action="">
            <div className="form-group">
              <label htmlFor="ImgName">ImgName </label>
              <input type="text" value={data.ImgName} />
            </div>
            <div className="form-group value">
              <label htmlFor="ImgUrl">ImgUrl</label>
              <input type="text" onChange={(e) => setUrl(e.target.value)} />
            </div>
            <div className="form-group value">
              <label htmlFor="ImgDetails">ImgDetails</label>
              <textarea
                type="text"
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
            <button className="btn edit-btn" onSubmit={(e) => edit_image(e)}>
              Submit
            </button>
          </form>
        ) : (
          <div> Image does not exist .</div>
        )}
      </div>
     
    </>
  );
};

export default Edit;
