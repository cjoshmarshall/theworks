import React, { useEffect, useState } from "react";
import "./index.css";

function Accordion({ data }) {
  const { id, acronym, title, description } = data;
  const [showDesc, setShowDesc] = useState(false);

  const handleDesc = (id) => {
    let desc = document.getElementById(`accordion-description-${id}`);
    if (showDesc === false) {
      desc.style.display = "block";
    } else {
      desc.style.display = "none";
    }
    setShowDesc((prev) => !prev);
  };

  useEffect(() => {
    const closeAccordion = (e) => {
      if (!e.target.closest(`#accordion-container-${id}`)) {
        let desc = document.getElementById(`accordion-description-${id}`);
        setShowDesc(false);
        if (showDesc === true) {
          desc.style.display = "block";
        } else {
          desc.style.display = "none";
        }
      }
    };
    document.addEventListener("click", closeAccordion);

    return () => {
      document.removeEventListener("click", closeAccordion);
    };
  }, [id]);

  return (
    <div id={`accordion-container-${id}`} className="accordion-container">
      <div className="accordion-subcontainer">
        <div className="accordion-innercontainer">
          <h2 className="accordion-acronym">{acronym}</h2>
          <button className="accordion-button" onClick={() => handleDesc(id)}>
            {showDesc ? "-" : "+"}
          </button>
        </div>
        <p className="accordion-title">{title}</p>
        <p id={`accordion-description-${id}`} className="accordion-description">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Accordion;
