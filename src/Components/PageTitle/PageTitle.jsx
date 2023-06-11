const PageTitle = ({ heading }) => {
  return (
    <div className=" text-center -my-5 md:my-6 lg:my-10">
      <p className="text-2xl md:text-3xl  lg:text-4xl  text-[#0A5403] font-bold pl-2 py-4 uppercase">
        {heading}
      </p>
    </div>
  );
};

export default PageTitle;
