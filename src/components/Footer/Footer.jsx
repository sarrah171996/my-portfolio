import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ by sarrah mahmoud</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/sarrah171996"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100009292644457&mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebookSquare />
              </a>
            </li>
            {/* <li>
              <a
                href="https://t.me/snaichuk_v"
                target="_blank"
                rel="noreferrer"
                aria-label="TelegramPlane"
              >
                <FaTelegramPlane />
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/sarrah-mahmoud-2b2b53234/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
