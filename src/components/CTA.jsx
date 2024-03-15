import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col md:flex-row bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2}`}>Try our services now!</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments <br className='hidden sm:block' /> and grow your business anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} ml-0 sm:ml-10 mt-10 md:mt-0`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
