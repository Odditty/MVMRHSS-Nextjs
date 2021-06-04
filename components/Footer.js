function Footer() {
  return (
    <section className="footer-bottom bg-three">
      <div className="container">
        <div className="bottom-text text-center">
          <p>
            &copy;{new Date().getFullYear()} M V M Residential Higher Secondary
            School All rights reserved. Powered by{" "}
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.odditty.in"
            >
              Odditty
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
