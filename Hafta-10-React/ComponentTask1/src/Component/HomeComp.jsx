export default function HomeComp() {
  return (
    <div>
      <Header />
      <BoxesCard />
      <Classes />
    </div>
  );
}
function Header() {
  return (
    <>
      <div>
        <header id="header">
          <section className=" header-section center">
            <nav>
              <div className="logo">
                <img src="./public/img/logo.png" alt="Powerfull Logo" />
              </div>
              <div className="link">
                <ul>
                  <li>
                    <a href="#header">Home</a>
                  </li>
                  <li>
                    <a href="#classes">Classes</a>
                  </li>
                  <li>
                    <a href="#trainer">Trainer</a>
                  </li>
                  <li>
                    <a href="#review">Review</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="#" className="nav-btn">
                      JOIN US
                    </a>
                  </li>
                </ul>
              </div>
              <input type="checkbox" id="check" />
              <label className="checkbtn">
                <i className="fas fa-bars"></i>
              </label>
            </nav>

            <article className="home-section">
              <p className="brand">POWERFULL</p>
              <h1>Group Practice With Trainer</h1>
              <p className="explanation">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quas voluptas ut eligendi omnis laborum, qui excepturi,
                laboriosam doloribus error autem accusamus quisquam. Laudantium
                ipsum consectetur adipisci? Vel fuga est necessitatibus vitae,
                tempora ducimus cumque!
              </p>
              <div className="home-section-buttons">
                <button className="signUp-btn">Sign Up</button>
                <button className="details-btn">Details</button>
              </div>
            </article>
          </section>
        </header>
      </div>
    </>
  );
}

function BoxesCard() {
  return (
    <>
      <div>
        <section className="home-boxes ">
          <article className="boxes-card">
            <div className="boxes-info">
              <p className="boxes-value">325</p>
              <p>Courses</p>
            </div>
            <div className="boxes-info">
              <p className="boxes-value">405</p>
              <p>Work Outs</p>
            </div>
            <div className="boxes-info">
              <p className="boxes-value">305</p>
              <p>Working Hours</p>
            </div>
            <div className="boxes-info">
              <p className="boxes-value">705</p>
              <p>Happy Clients</p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

function Classes() {
  return (
    <>
      <div>
        <section id="classes" className="classes-section center">
          <div className="classes-intro">
            <h2>OUR CLASSES</h2>
            <p></p>
            <p className="explanation">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical at Hampden-Sydney College.
            </p>
          </div>
          <div className="features" id="features">
            <button data-category="Yoga">Yoga</button>
            <button data-category="Group">Group</button>
            <button data-category="Solo">Solo</button>
            <button data-category="Stretching">Stretching</button>
          </div>
          <div className="classes-content"></div>
        </section>
      </div>
    </>
  );
}
