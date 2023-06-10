const PageTitle = ({ heading }) => {
  return (
      <div className="mx-auto my-10">
        <p className="text-4xl border-l-8 border-[#8ad33d] text-[#0A5403] font-bold pl-2 py-4 uppercase">
          {heading}
        </p>
      </div>
  );
};

export default PageTitle;
