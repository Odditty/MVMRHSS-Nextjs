function management() {
  return (
    <div>
      <section
        className="page-title"
        style={{ background: " url(/images/resources/research.jpeg)" }}
      >
        <div className="container clearfix">
          <div className="title pull-left">
            <h2>Management</h2>
          </div>
          <ul className="title-manu pull-right">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </li>
            <li>Management</li>
          </ul>
        </div>
      </section>

      <div
        className="container managementContainer"
        style={{
          color: "black !important",
          padding: "40px 10px",
          fontWeight: "100px",
          lineHeight: "40px",
          width: "80%",
          textAlign: "center",
        }}
      >
        <p>
          The management of school vested in the hands of managing committee.
          the managing committee consist of the following members
        </p>

        <div className="row mt-5">
          <div className=" col-md-3 mb-4 align-center">
            <div className="facilitiesCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/chairman.jpg"
                  alt="Chairman"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Chairman</b>
                </h6>
                <p className="mb-0 text-muted">Abdul Azeez K P</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-4">
            <div className="facilitiesCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/president.jpg"
                  alt="President"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>President</b>
                </h6>
                <p className="mb-0 text-muted">Basheer Pallikkara</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-4">
            <div className="facilitiesCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/vice_president.jpg"
                  alt="Vice President"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Vice President</b>
                </h6>
                <p className="mb-0 text-muted">Mohammadunni Haji</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-4">
            <div className="facilitiesCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/general_secretary.jpg"
                  alt="General Secretary"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>General Secretary</b>
                </h6>
                <p className="mb-0 text-muted">Kunjimohammed Panthavoor</p>
              </div>
            </div>
          </div>

          {/* <div className=" col-md-3 mb-4 align-center">
            <div className="facilitiesCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/education_secretary.jpg"
                  alt="Educational Secretary"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Educational Secretary</b>
                </h6>
                <p className="mb-0 text-muted">Mohammedkutty M K</p>
              </div>
            </div>
          </div> */}

          <div className=" col-md-3 mb-4">
            <div className="facilitiesCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/secretary.jpg"
                  alt="Secretary"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Secretary</b>
                </h6>
                <p className="mb-0 text-muted">N Hameed Kokkur</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-4">
            <div className="facilitiesCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/secretary_2.jpg"
                  alt="Secretary"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Secretary</b>
                </h6>
                <p className="mb-0 text-muted">Moosakutty V V</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-4">
            <div className="facilitiesCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/treasurer.jpg"
                  alt="Treasurer"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Treasurer</b>
                </h6>
                <p className="mb-0 text-muted">Salih M V</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default management;
