import "./App.css";
import {  useState } from "react";
import { publicRequest } from "./publicrequest";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AfterPage from "./AfterPage";

const New = () => {
  const [Name, setName] = useState();
  const [Url, setUrl] = useState();
  const [Details, setDetails] = useState();
  const [flag, setFlag] = useState(true);


  const edit_image = async (e) => {
    e.preventDefault();

    const res = await publicRequest.post(`/`, {
      ImgName: Name,
      ImgUrl: Url,
      ImgDetails: Details,
    });
    //setData(res.data);
    setFlag(false);
     console.log(res);
  };

  return (
    <>
      {flag == true ? (
        <div className="container">
          <h3 className="heading"> Add Image</h3>
          <form className="form" onSubmit={(e) => edit_image(e)} action="">
            <div className="form-group">
              <label htmlFor="ImgName">ImgName</label>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ImgUrl">ImgUrl</label>
              <input
                type="text"
                placeholder="Url"
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ImgDetails">ImgDetails</label>
              <textarea
                type="text"
                placeholder="Details"
                onChange={(e) => setDetails(e.target.value)}
                required
              />
            </div>
            <button className="btn edit-btn" onSubmit={(e) => edit_image(e)}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <AfterPage text="added" />
      )}
    </>
  );
};

export default New;
