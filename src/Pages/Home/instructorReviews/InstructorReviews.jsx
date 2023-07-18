import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import "./instructorReview.css"

const InstructorReviews = () => {
  const [instructorReviews, setInstructorReview] = useState([]);

  useEffect(() => {
    fetch("instructorReview.json")
      .then((res) => res.json())
      .then((data) => setInstructorReview(data));
  }, []);

  return (
    <div>
      <div className="my-10 mx-1">
        <PageTitle heading={"What Our Instructors Say..."}></PageTitle>
      </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {instructorReviews.map((instructorReview) => (
          <SwiperSlide key={instructorReview.id}>
            <div className="my-20">
              <div className="avatar">
                <div className="w-32 mask mask-squircle">
                  <img src={instructorReview.profilePic} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-700 my-5">
                {instructorReview.name}
              </h2>
              <h4 className="text-lg font-semibold text-slate-700 lg:px-20">
                {instructorReview.review}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstructorReviews;
