import React from "react";

const Footer = () => {
  return (
    <div className="personal-links-container">
      <div className="personal-links">
        <div className="attribution">
          <p className="inspired-by">
            Inspired by =>{" "}
            <a
              className="personal-links__links"
              href="https://www.goodreads.com"
            >
              {" "}
              GoodReads
            </a>{" "}
          </p>

          <p className="pipes"> || </p>
          <p className="portfolio-by">
            Built by =>{" "}
            <a
              className="portfolio personal-links__links"
              href="https://www.harryappler.com"
            >
              Harry Appler
            </a>
          </p>
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
