export default function SectionComp() {
  return (
    <div>
      <BmiCalculator />
      <Trainers />
      <Review />
    </div>
  );
}

function BmiCalculator() {
  return (
    <>
      <div>
        <section className="bmi-calculator ">
          <div className="calculator-text">
            <h2>BMI Calculator</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. earum
              sunt perferendis obcaecati pariatur consequuntur soluta dicta
              atque laudantium?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              obcaecati enim, iste veniam soluta itaque similique ullam voluptas
              iusto culpa quas reiciendis nemo, alias debitis non cum?
            </p>
            <div className="calculator-input">
              <form id="userForm">
                <div className="input-group">
                  <input
                    name="inputHeight"
                    id="inputHeight"
                    type="number"
                    placeholder="Your height"
                  />
                  <span>cm</span>
                </div>
                <div className="input-group">
                  <input
                    name="inputWeight"
                    id="inputWeight"
                    type="number"
                    placeholder="Your weight"
                  />
                  <span>kg</span>
                </div>
              </form>
            </div>
          </div>
          <div className="calculator-img">
            <h6>Your BMI</h6>
            <img src="./public/img/bmi-index.jpg" alt="" />
            <div className="indicator" id="indicator"></div>
          </div>
        </section>
      </div>
    </>
  );
}

function Trainers() {
  return (
    <>
      <div>
        <section id="trainer" className="trainers-section center">
          <div className="trainers-intro">
            <h2>OUR BEST TRAINERS</h2>
            <p></p>
            <p className="explanation">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical at Hampden-Sydney College.
            </p>
          </div>

          <div className="trainers-cards">
            <div className="trainers-card">
              <img src="./public/img/trainer1.jpg" alt="" />
              <div className="trainers-y"></div>
              <div className="trainers-x"></div>
              <div className="trainers-name">
                <h2>Zoe Doe</h2>
                <p>Yoga Trainer</p>
              </div>
            </div>
            <div className="trainers-card">
              <img src="./public/img/trainer2.jpg" alt="" />
              <div className="trainers-y"></div>
              <div className="trainers-x"></div>
              <div className="trainers-name">
                <h2>John Doe</h2>
                <p>Fitness Trainer</p>
              </div>
            </div>
            <div className="trainers-card">
              <img src="./public/img/trainer3.jpg" alt="" />
              <div className="trainers-y"></div>
              <div className="trainers-x"></div>
              <div className="trainers-name">
                <h2>Jane Doe</h2>
                <p>Cardio Trainer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Review() {
  return (
    <>
      <div>
        <section id="review" className="review-section center">
          <div className="review-intro">
            <h2>REVIEW CLIENT</h2>
            <p></p>
            <p className="explanation">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classNameical at Hampden-Sydney College.
            </p>
          </div>
          <div className="review-users-comments">
            <div className="review-cards">
              <div className="review-profile">
                <div className="review-figure">
                  <img src="./public/img/client1.jpg" alt="" />
                </div>
                <div className="review-info">
                  <h3>Diet Expert</h3>
                  <p>CFO</p>
                </div>
              </div>
              <div className="review-comment">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, quaerat doloribus enim dolore ad fuga dolores
                  culpa maiores optio pariatur delectus voluptate, beatae sed
                  dignissimos rem.
                </p>
              </div>
              <div className="review-comment-clip-path-all">
                <div className="review-comment-clip-path-left"></div>
                <div className="review-comment-clip-path-right"></div>
              </div>
            </div>

            <div className="review-cards">
              <div className="review-profile">
                <div className="review-figure">
                  <img src="./public/img/client2.jpg" alt="" />
                </div>
                <div className="review-info">
                  <h3>Cardio Trainer</h3>
                  <p>CEO</p>
                </div>
              </div>
              <div className="review-comment">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam quasi atque cumque harum quaerat, amet dolorum velit in
                  sequi. Doloribus voluptatem, animi laudantium provident nam
                  minus.
                </p>
              </div>
              <div className="review-comment-clip-path-all">
                <div className="review-comment-clip-path-left"></div>
                <div className="review-comment-clip-path-right"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
