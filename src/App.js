import React, { useEffect, useState } from "react";
// import react icons
import { FiChevronRight, FiChevronLeft, FiChevronsRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
// import data
import data from "./data";

// function
function App() {
  const [people, setPeople] = useState(data);
  // console.log(data);
  const [index, setIndex] = useState(0);
  // console.log(people);

  // using the use Effect
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  // set interval function
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="font-bold title">
        <h2>
          <span className="text-orange-700">/</span>review
        </h2>
      </div>
      <div className="section-container">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          // more step coming up
          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && position === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="image" />
              <h3 className="name">{name}</h3>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
