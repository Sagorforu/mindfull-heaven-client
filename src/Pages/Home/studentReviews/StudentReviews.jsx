import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import PageTitle from "../../../Components/PageTitle/PageTitle";

const StudentReviews = () => {
  const [studentReviews, setStudentReviews] = useState([]);

  useEffect(() => {
    fetch("studentReview.json")
      .then((res) => res.json())
      .then((data) => setStudentReviews(data));
  }, []);

  return (
    <div>
      <div className="my-10">
        <PageTitle heading={"What Our Students Say..."}></PageTitle>
      </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {studentReviews.map((studentReview) => (
          <SwiperSlide key={studentReview.id}>
            <div className="my-20">
              <div className="avatar">
                <div className="w-32 mask mask-squircle">
                  <img src={studentReview.profilePic} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-700 my-5">
                {studentReview.name}
              </h2>
              <h4 className="text-lg font-semibold text-slate-700 px-20">
                {studentReview.review}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentReviews;
