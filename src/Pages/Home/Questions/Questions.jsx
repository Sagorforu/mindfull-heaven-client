import PageTitle from "../../../Components/PageTitle/PageTitle";
import Lottie from "lottie-react";
import questions from "../../../assets/questions.json";

const Questions = () => {
  return (
    <div className="mt-24 my-container">
      <PageTitle heading={"Frequently Asked Questions"}></PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-10">
        <div>
          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What are the benefits of practicing yoga?
            </div>
            <div className="collapse-content">
              <p>
                Regular yoga practice offers numerous benefits, including
                increased flexibility, strength, and balance; improved posture;
                stress reduction; relaxation; enhanced focus and concentration;
                improved breathing; increased mindfulness; and overall physical
                and mental well-being.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do I need to be flexible to do yoga?
            </div>
            <div className="collapse-content">
              <p>
                No, you do not need to be flexible to start practicing yoga.
                Yoga is a journey that helps improve flexibility over time. It
                is accessible to people of all fitness levels and body types.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What should I wear to a yoga class?
            </div>
            <div className="collapse-content">
              <p>
                It is best to wear comfortable, breathable clothing that allows
                for easy movement. Many people choose to wear stretchy pants or
                leggings and a fitted top. Avoid wearing clothes that are too
                loose or baggy, as they may interfere with certain poses.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do I need any special equipment for yoga?
            </div>
            <div className="collapse-content">
              <p>
                Basic yoga classes usually require minimal equipment. A non-slip
                yoga mat is often recommended to provide stability and
                cushioning during poses. Some people also use yoga blocks,
                straps, or bolsters to assist with certain poses or to modify
                them. These props are often provided by the yoga studio or
                instructor.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I eat before a yoga class?
            </div>
            <div className="collapse-content">
              <p>
                It is generally recommended to practice yoga on an empty stomach
                or at least a few hours after a meal. Practicing yoga with a
                full stomach may cause discomfort or interfere with some poses.
                However, if you need a small snack before class, choose
                something light and easily digestible, like a piece of fruit or
                a handful of nuts.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Lottie
            className="w-full mx-auto md:w-1/2"
            animationData={questions}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
