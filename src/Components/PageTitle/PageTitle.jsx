const PageTitle = ({ heading }) => {
  return (
    <div>
      <div className="text-center mx-auto my-10 border-l-8 border-[#8ad33d]">
        <p className="text-4xl text-[#0A5403] font-bold pl-2 py-4 uppercase">
          {heading}
        </p>
      </div>
    </div>
  );
};

export default PageTitle;
