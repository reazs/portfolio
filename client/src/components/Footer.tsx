const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-[#e9eaeb] text-xl font-['Poppins']">
        <div className="max-w-screen-lg mx-auto flex flex-row justify-between py-[50px] ">
          <div className="mx-5">© {year} Copyright</div>
          <div>Reaz Shakil</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
