import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] sm:mt-0 mt-5`} key={client.id}>
            <img src={client.logo} alt='Client' className='sm:w-[192px] w-[100px] object-contain ' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
