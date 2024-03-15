import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const date = new Date();
  const presentYear = date.getFullYear();

  return (
    <footer className={`${styles.flexCenter}, ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
        <div className={"flex-1 flex flex-col justify-start mr-10"}>
          <img src={logo} alt='footer logo' loading='lazy' className='w-[266px] h-[72px] object-contain' />

          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make your payments easy, reliable and secure</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-medium text-[18px] leading-[27px] mb-4'>{footerLink.title}</h4>

              <ul className='list-none'>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-normal text-[1rem] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition duration-500 ease-in-out ${
                      index === footerLink.links.length - 1 ? "mb-0" : "mb-3"
                    }`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3f3e45] justify-between  w-full'>
        <p className='font-normal text-center text-[18px] leading-[27px] mb-4'>{presentYear} HooBank. &copy; Rights Reserved</p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              alt={social.id}
              loading='lazy'
              key={social.id}
              className={`${index === socialMedia.length - 1 ? "mr-0" : "mr-6"} w-[21px] h-[21px] object-contain cursor-pointer hover:-translate-y-2 transition duration-500`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
