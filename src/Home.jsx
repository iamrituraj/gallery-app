import "./App.css";
import { useEffect, useState } from "react";
import { publicRequest } from "./publicrequest";
import {  Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  // const location = useLocation();
  // const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetch_images = async () => {
      console.log("hey");
      const res = await publicRequest.get(`/images`);
      setData(res.data);
    };

    fetch_images();
  }, []);

  console.log(data);

  return (
    <>
      <div className="container">
        <div>
          <h3 className="heading">Gallery App 🖼️ </h3>
        </div>
        <div className="image-wrapper">
          {data.map((item) => {
            console.log(item);
            return (
              <div className="image-container">
                <Link to={`/show/${item._id}`}>
                  <img className="image" key={item._id} src={item.ImgUrl}></img>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
     
    </>
  );
};

export default Home;
