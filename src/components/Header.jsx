import React from "react";

const Header = () => {
  //to get date

  const date = new Date();
  const day = date.getDate();

  //this will get month in string e.g(January)
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  console.log(day, month, year);

  return (
    <div className="w-full">
      <header className="bg-background w-full h-auto text-text-color flex flex-col justify-center items-center ">
        <p className="text-[22px] md:text-[30px]">
          Stay Organized, Stay Productive!
        </p>
        <p>
          <span>
            {day}-{month}-{year}
          </span>
        </p>
      </header>
    </div>
  );
};

export default Header;
