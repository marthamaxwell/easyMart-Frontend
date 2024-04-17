import nikeShoe from "../../assets/images/nikeShoe.png";
import nikeTagLine from "../../assets/images/nikeTagline.png";
import good from "../../assets/images/good.png";

const ProductHero = () => {
  return (
    <div className="  w-[100%] md:w-[100%] bg-[#75FD75] h-[350px] flex flex-col md:flex-row items-center p-10 mt-5 ">
      <div className=" w-[50%] p-3 flex flex-col gap-[1.5rem]">
        <p className="  text-2xl  sm:ml-2 w-[300px] md:w-[400px] md:text-[45px] text-left font-extrabold capitalize leading-tight">
          mouth-watering deals on men's <br /> shoes
        </p>
        <button className="text-2xl bg-slate-50 w-[15rem] uppercase font-bold p-7 rounded-xl">
          shop now
        </button>
      </div>
      <div className=" md:w-[50%] md:h-full relative">
        <img
          src={good}
          alt=""
          className="hidden lg:block absolute  md:left-[-15%] bottom-[-20%] z-0 h-[360px]"
        />
        <img
          src={nikeShoe}
          alt="nike trainer shoes"
          className=" hidden lg:block absolute md:left-[-14%] w-[18rem] z-10 bottom-[-10%]"
        />

        <img
          src={nikeTagLine}
          alt="the_tagline"
          className="hidden lg:block   w-[12rem] h-[8rem] mt-[8rem] ml-[11rem]"
        />
      </div>
    </div>
  );
};

export default ProductHero;
