import "./index.css";
import Accordion from "../../components/Accordion";

import { hemp } from "../../data.js";
import { useEffect, useState } from "react";

function Home() {
  const [filterData, setFilterData] = useState([]);

  const [filterValue, setFilterValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setFilterValue(value);
  };

  const handleSort = (e) => {
    const { value } = e.target;
    if (value === "ascending-order") {
      setFilterData((prev) =>
        [...prev].sort((a, b) => a.title.localeCompare(b.title))
      );
    }
    if (value === "descending-order") {
      setFilterData((prev) =>
        [...prev].sort((a, b) => b.title.localeCompare(a.title))
      );
    }
    if (value === "most-used") {
      setFilterData(hemp);
    }
  };

  useEffect(() => {
    setFilterData(hemp);
  }, []);

  useEffect(() => {
    setFilterData(
      hemp.filter((item) => item.title.toLowerCase().includes(filterValue))
    );
  }, [filterValue]);

  return (
    <div className="home-container">
      <div className="home-subcontainer home-subcontainer_options">
        <div className="home-innercontainer">
          <p>ALPHABETICALLY</p>
          <input
            type="text"
            name="input"
            id="input"
            className="home-input"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="home-innercontainer">
          <p>SORT BY</p>
          <select
            name="select"
            id="select"
            className="home-select"
            onChange={handleSort}
          >
            <option className="home-select_value" value="most-used">
              MOST USED
            </option>
            <option className="home-select_value" value="ascending-order">
              ASCENDING ORDER
            </option>
            <option className="home-select_value" value="descending-order">
              DESCENDING ORDER
            </option>
          </select>
        </div>
      </div>
      <div className="home-subcontainer">
        {filterData.length !== 0 ? (
          filterData.map((item, index) => (
            <Accordion data={item} index={index} key={item.id} />
          ))
        ) : (
          <p style={{ color: "black" }}>No Data</p>
        )}
      </div>
    </div>
  );
}

export default Home;
