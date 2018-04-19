import React from "react";

const Footer = () => {
  return (
    <div className="personal-links-container">
      <div className="personal-links">
        <div>
          <span className="portfolio-by">By: </span>
          <a className="portfolio" href="https://www.harryappler.com">
            Harry Appler
          </a>
        </div>
        <div className="personal-links__icons">
          <a
            className="personal-links__angel"
            target="_blank"
            href="https://angel.co/harry-appler"
          />
          <a
            className="personal-links__github"
            target="_blank"
            href="https://github.com/happler/"
          />
          <a
            className="personal-links__linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/harryappler/"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
