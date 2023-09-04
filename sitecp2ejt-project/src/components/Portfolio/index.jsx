import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ScrollTitleEffect from "./ScrollTitleEffect";
import Exemplo from "../../assets/hold.png";
import "./Portfolio.css";

const PortfolioItem = ({ imageSrc, title }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div className="portfolio-item">
      <div className="portfolio-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div
        className={`portfolio-title ${isMouseOver ? "shrink" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3>{title}</h3>
        <button
          className={`portfolio-button ${isMouseOver ? "rotate-icon" : ""}`}
        ></button>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Portfolio = () => {
  const portfolioProps = [
    { id: 1, title: "Projeto 1", imageSrc: Exemplo },
    { id: 2, title: "Projeto 2", imageSrc: Exemplo },
    { id: 3, title: "Projeto 3", imageSrc: Exemplo },
    { id: 4, title: "Projeto 4", imageSrc: Exemplo },
    { id: 5, title: "Projeto 5", imageSrc: Exemplo },
    { id: 6, title: "Projeto 6", imageSrc: Exemplo },
  ];

  const calculateItemsPerRow = () => {
    return window.innerWidth < 768 ? 2 : 3;
  };

  const [itemsPerRow, setItemsPerRow] = useState(calculateItemsPerRow);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerRow(calculateItemsPerRow());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="portfolio-section" id="portfolio">
      <div className="portfolio-row">
        {portfolioProps.slice(0, itemsPerRow).map((item) => (
          <PortfolioItem key={item.id} title={item.title} imageSrc={item.imageSrc} />
        ))}
      </div>

      <ScrollTitleEffect />

      <div className="portfolio-row">
        {portfolioProps.slice(itemsPerRow).map((item) => (
          <PortfolioItem key={item.id} title={item.title} imageSrc={item.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;