import { Link } from "react-router-dom";
import Footer from "../../sections/Footer/Footer";
import Navbar from "../../sections/Navbar/Navbar";
import Topbar from "../../sections/Topbar/Topbar";
import "./styles.css";

const ServicesPage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      {/* Section 1 */}
      <header
        className="page-header"
        data-stellar-background-ratio="0.7"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/page-header-bg.jpg"
          })`,
          backgroundPosition: "0px -33px",
        }}
      >
        <div className="container">
          <h2>Services</h2>
          <p>
            Take the complexity out of customs Freight Solutions
            <br />
            with customs brokerage services
          </p>
        </div>
      </header>
      {/* Section 2 */}
      <main>
        <section className="content-section">
          <div className="container">
            <div className="vc_row row wpb_row vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="vc_row row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="section-title"
                              style={{ color: "#212223" }}
                            >
                              <figure>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/section-title-shape.png"
                                  }
                                  alt="Image_logo"
                                />
                              </figure>
                              <h2>
                                Reliable UK &amp; Ireland Transport
                                <br /> Logistics Since 1973
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-6 col-md-6">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="text-box ">
                              <p>
                                At Cardinal, we believe the supplier-vendor
                                relationship to be an important, strong and long
                                term partnership. Both the client and the
                                logistics partners will concentrate on their
                                lead competencies and work closely together with
                                the common aim to be a leader in each other’s
                                sector. We want to service you in a reliable,
                                efficient and flexible manner, so that your
                                company can compete in its business, not only by
                                selling quality products, but also by satisfying
                                customers with high value logistics services.
                              </p>
                              <p>
                                With so many options available you can rest
                                assured that we will be able to deliver your
                                consignment, regardless of its size. And if
                                there’s ever a time where you need some advice
                                on choosing the right solution, our transport
                                team, who have more than 120 years’ experience.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-6 col-md-6">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="text-box ">
                              <p>
                                Since our inception in 1998, we have developed
                                according to our clients’ needs from a
                                traditional freight forwarding company to a full
                                service logistics provider. We provide all the
                                necessary services for highly-engineered supply
                                chain solutions and combine these with a range
                                of warehousing and freight forwarding services
                                to provide a complete solution.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_empty_space" style={{ height: "50px" }}>
                      <span className="vc_empty_space_inner"></span>
                    </div>
                    <div className="vc_row row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="service-box">
                              <div className="inner">
                                <h6>
                                  Supply Chain
                                  <br /> Solutions
                                </h6>
                                <figure>
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/icon05.png"}
                                    alt="icon04"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="service-box">
                              <div className="inner">
                                <h6>
                                  3PL
                                  <br /> Services
                                </h6>
                                <figure>
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/icon05.png"
                                    }
                                    alt="icon05"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="service-box">
                              <div className="inner">
                                <h6>
                                  Internet
                                  <br />
                                  Fulfilment
                                </h6>
                                <figure>
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/icon06.png"
                                    }
                                    alt="icon06"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="service-box">
                              <div className="inner">
                                <h6>
                                  Global Freight
                                  <br />
                                  Forwarding
                                </h6>
                                <figure>
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/icon07.png"
                                    }
                                    alt="icon07"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-section no-spacing"
          style={{ backgroundColor: "#f9f7ef" }}
        >
          <div className="container">
            <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604246132900 vc_row-o-content-middle vc_row-flex">
              <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-6 col-md-6">
                <div className="vc_column-inner vc_custom_1604246213879">
                  <div className="wpb_wrapper">
                    <div className="side-content left">
                      <h2>
                        Supply Chain
                        <br />
                        Solutions
                      </h2>
                      <p>
                        At Cardinal, we’re passionate about helping our clients
                        operate their supply chains more effectively. To achieve
                        this we design and implement transformative solutions
                        that are customised for every individual client and
                        their unique supply chain challenges.
                      </p>
                      <a href="/about/" className="custom-button">
                        DISCOVER ALL
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-6 col-md-6">
                <div className="vc_column-inner vc_custom_1604246217232">
                  <div className="wpb_wrapper">
                    <figure className="side-image full-right">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/side-image03.jpg"
                        }
                        alt="Image_"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section no-spacing">
          <div className="container">
            <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604246148255 vc_row-o-content-middle vc_row-flex">
              <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-6 col-md-6">
                <div className="vc_column-inner vc_custom_1604246220479">
                  <div className="wpb_wrapper">
                    <figure className="side-image full-left ">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/side-image04.jpg"
                        }
                        alt="Image_"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-6 col-md-6">
                <div className="vc_column-inner vc_custom_1604246143201">
                  <div className="wpb_wrapper">
                    <div className="side-content right ">
                      <h2>Internet Fulfilment</h2>
                      <p>
                        We pick, pack and dispatch your orders, to save you
                        <br />
                        time and money. We take away the hassle of storing,
                        <br />
                        delivering and handling any product returns and
                        <br />
                        manage your fulfilment so you can concentrate on
                        <br />
                        your key business objectives.
                      </p>
                      <ul>
                        <li>Dedicated secure facilities</li>
                        <li>Customs clearances</li>
                        <li>Online inventory reporting</li>
                        <li>
                          Full order management &amp; back office integration
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-section no-spacing"
          style={{ backgroundColor: "#212223" }}
        >
          <div className="container">
            <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604246153589 vc_row-o-content-middle vc_row-flex">
              <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-6 col-md-6">
                <div className="vc_column-inner vc_custom_1604246157702">
                  <div className="wpb_wrapper">
                    <div
                      style={{ backgroundColor: "#ffffff" }}
                      className="side-content left "
                    >
                      <h2>Supply Chain Solutions</h2>
                      <p>
                        At Cardinal, we’re passionate about helping our clients
                        operate their supply chains more effectively. To achieve
                        this we design and implement transformative solutions
                        that are customised for every individual client and
                        their unique supply chain challenges.
                      </p>
                      <p>
                        Using an innovative approach to manage
                        <br />
                        supply chains we’ve given our clients true supply
                        <br />
                        chain visibility with revolutionary views of their
                        supply
                        <br />
                        chain. We continually work towards achieving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-6 col-md-6">
                <div className="vc_column-inner vc_custom_1604246161374">
                  <div className="wpb_wrapper">
                    <figure className="side-image full-right ">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/side-image05.jpg"
                        }
                        alt="Image_"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section">
          <div className="container">
            <div className="vc_row row wpb_row vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="vc_row row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="section-title"
                              style={{ color: "#212223" }}
                            >
                              <figure>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/section-title-shape.png"
                                  }
                                  alt="Image_"
                                />
                              </figure>
                              <h2>Our Global World</h2>
                              <p>Advice and best practice from our own team</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row row wpb_row vc_inner vc_row-fluid justify-content-center">
                      <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-4 col-md-4">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="image-content-box text-center">
                              <figure>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/service-image01.jpg"
                                  }
                                  alt="service-image01"
                                />
                              </figure>
                              <h6>Forwarding</h6>
                              <p>
                                Our dedicated fleet of vehicles operates
                                nationally throughout the UK delivering both
                                full, part loads.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-4 col-md-4 ">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="image-content-box text-center">
                              <figure>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/service-image02.jpg"
                                  }
                                  alt="service-image02"
                                />
                              </figure>
                              <h6>Supply Chain</h6>
                              <p>
                                Sending smaller consignments of less than 10
                                pallets used to be expensive business, but we
                                have a solution us.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-4 col-md-4 ">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="image-content-box text-center">
                              <figure>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/service-image03.jpg"
                                  }
                                  alt="service-image03"
                                />
                              </figure>
                              <h6>Logisctics</h6>
                              <p>
                                In addition to our UK services, through our
                                trusted and fully-vetted network of partners, we
                                offer a full import.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section no-spacing">
          <div className="container">
            <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604214001517">
              <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      style={{ background: "#fed300", color: "#212223" }}
                      className="contact-bar "
                    >
                      <h2>Contact us today!</h2>
                      <p>
                        Contact us today for your airfreight
                        <br />
                        requirements
                      </p>
                      <Link to="/contact">CLICK HERE TO CONTACT US!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
