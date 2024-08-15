export default function FooterComp() {
  return (
    <div>
      <ContactUs />
      <Footer />
    </div>
  );
}
function ContactUs() {
  return (
    <>
      <div>
        <section id="contact" className="contact-us-section center">
          <div className="contact-us-intro">
            <h2>CONTACT US</h2>
            <p></p>
            <p className="explanation">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classNameical at Hampden-Sydney College.
            </p>
          </div>
          <div className="contact-us-content">
            <div className="contact-us-form">
              <div className="contact-us-form-head-section">
                <div className="head-left">
                  <h3>Mobile Number</h3>
                  <p>+135 773 321 4442</p>
                </div>
                <div className="head-right">
                  <h3>Email Address</h3>
                  <p>demo@demo.com</p>
                </div>
              </div>
              <div className="contact-us-form-sub-section">
                <ul>
                  <li>
                    <p>Make An Appointment</p>
                  </li>
                  <li>
                    <input type="text" placeholder="Your Name" />
                  </li>
                  <li>
                    <input type="email" placeholder="Your Email" />
                  </li>
                  <li>
                    <textarea
                      cols="30"
                      rows="5"
                      placeholder="Your Message"
                    ></textarea>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-us-map"></div>
          </div>
        </section>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div>
        <footer>
          <div className="footer-section center">
            <div className="footer-logo">
              <img src="./public/img/logo.png" alt="Powerfull Logo" />
            </div>
            <div className="footer-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                iste excepturi, debitis similique sint adipisci, asperiores
                voluptates totam quia dolore quasi esse sed iusto, distinctio
                modi dignissimos repellat! Quisquam, accusamus!
              </p>
            </div>
            <div className="footer-sub-section">
              <div className="footer-info">
                <h2>Information</h2>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#classes">Classes</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-help">
                <h2>Helpful Links</h2>
                <ul>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Supports</a>
                  </li>
                  <li>
                    <a href="">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
