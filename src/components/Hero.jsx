import style from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id='#home' className={`flex md:flex-row flex-col ${style.paddingY}`}>
      <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='Discount' className='w-[32px] h-[32px]' />

          <p className={`${style.paragraph} ml-2`}>
            <span className='text-white'>20%</span> &nbsp; Discount For &nbsp;
            <span className='text-white'> 1 MONTH </span>&nbsp; Account
          </p>
        </div>

        <div className='flex flex-row items-center justify-between  w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[53px] text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden' />
            <span className='text-gradient'>Generation</span>&nbsp;
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full  sm:whitespace-nowrap'>Payment Method</h1>

        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees
        </p>
      </div>

      <div className={`flex-1 flex flex-col ${style.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt='Home Banner' className='w-[100%] h-[100%] object-contain relative z-[5]' />

        <div className='absolute z-0 w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-1 w-[80%] h-[85%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

        <div className={`ss:hidden ${style.flexCenter}`}>
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;
