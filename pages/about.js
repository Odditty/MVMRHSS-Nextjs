function about() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <section
        className="page-title"
        style={{ background: "url(/images/school_images/title-image.jpg)" }}
      >
        <div className="container clearfix">
          <div className="title pull-left">
            <h2>About Us</h2>
          </div>
          <ul className="title-manu pull-right">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </section>

      <div
        style={{
          color: "black",
          paddingTop: "40px",
          paddingBottom: "40px",
          fontWeight: "100px",
          fontSize: "130%",
          lineHeight: "40px",
        }}
      >
        <div
          style={{
            color: "black",
            paddingTop: "40px",
            paddingBottom: "40px",
            fontWeight: "100px",
            fontSize: "1.05rem",
            lineHeight: "40px",
          }}
        >
          <div className=" row px-5 align-items-center">
            <ul className="col-md-7">
              <li>
                Assabah Association Trust is a well organized and established
                non-profit organization, under Muslim management. The trust is
                managing number of educational institutions. M.V.M.R.H.S.S
                founded in 1986 under Assabah Association Trust. School provides
                quality education for all community with affordable cost. Now
                the school has grown to a full fledged Higher Secondary School
                starting from K.G. to Higher Secondary level with reorganization
                of government of Kerala.
              </li>
            </ul>
            <div className="col-md-5 imgContainer">
              <img src="/images/school_images/3.jpg" alt="titlePageImg" />
            </div>
          </div>

          <div
            style={{
              color: "black",
              paddingTop: "40px",
              paddingBottom: "40px",
              fontWeight: "100px",
              fontSize: "130%",
              lineHeight: "40px",
            }}
          >
            <div className="container">
              <ul>
                <li>
                  •&nbsp;Conduct monthly test in every month, in addition to
                  terminal examination.
                </li>
                <li>
                  •&nbsp;Conduct the cultural programme in every week to develop
                  cultural talent of the pupil.
                </li>
                <li>
                  •&nbsp;Conduct arts, sports and games competition in every
                  year.
                </li>
                <li>
                  •&nbsp;Organize various game team such as football, volleyball
                  and basketball team through specialized training programme.
                </li>
                <li>
                  •&nbsp;Moral education mainly based on curriculum and syllabus
                  prescribed by educational board of Kerala Nadhvathul
                  Mujaheedeen.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
