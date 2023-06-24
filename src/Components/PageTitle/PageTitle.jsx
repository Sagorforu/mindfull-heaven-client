import { Fade, Slide } from "react-awesome-reveal";

const PageTitle = ({ heading }) => {
  return (
    <div className=" text-center -my-5 md:my-6 lg:my-10">
      <Slide>
        <Fade cascade damping={0.2}>
          <p className="text-2xl md:text-3xl  lg:text-4xl  text-[#8ad33d] font-bold pl-2 py-4 uppercase">
            {heading}
          </p>
        </Fade>
      </Slide>
    </div>
  );
};

export default PageTitle;
