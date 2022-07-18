import "./App.css";

const AfterPage = (props) => {
  return (
    <div className="wrapper">
      <p>Image {props.text} Successfully. Click below to go to Main Page .</p>
      <p className="arrow">↓</p>
    </div>
  );
}

export default AfterPage