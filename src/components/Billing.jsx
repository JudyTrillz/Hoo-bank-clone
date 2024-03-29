import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt='Billing Banner' className='w-[100%] h-[100%] relative z-5' loading='lazy' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-fill white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-fill pink__gradient' />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className='hidden sm:block' /> billing & invoicing{" "}
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quos. Vero, quis. Sint, omnis reprehenderit? Adipisci consequuntur nisi perferendis iusto optio molestias aliquid
          corrupti? Ipsum et deserunt unde laboriosam reiciendis?
        </p>

        <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
          <img src={apple} alt='Apple Store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />

          <img src={google} alt='Google play' className='w-[128px] h-[42px] object-contain  cursor-pointer' />
        </div>
      </div>
    </section>
  );
};

export default Billing;
