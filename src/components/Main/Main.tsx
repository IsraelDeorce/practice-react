import { Link, Outlet } from "react-router-dom";

function Main() {
  return (
    <div style={{ margin: '0 10%' }}>
      <h1>Choose the exercise below</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="search-filter">Search Filter</Link> |{" "}
        <Link to="simple-counter">Simple Counter</Link> |{" "}
        <Link to="display-list">Display a List</Link> |{" "}
        <Link to="accordion">Accordion</Link> |{" "}
        <Link to="image-slider">ImageSlider</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default Main;