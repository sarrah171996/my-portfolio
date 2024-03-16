import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import testcopy from '../../../assets/test2 copy.png'
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a Back-end Developer with two years of
              experience <br />
              specializing in  <br />
               in  <b className={s.purple}>
               Node.js and MongoDB .
                </b> 
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                Node.js, MongoDB, Express.js, JavaScript ,
                </b>
              </i>
              <br />
              I have been honing my skills in these technologies <br />
              and have successfully contributed to a variety of projects.
            </p>
{/* <p>
I have also worked on building APIs to retrieve and 
process data from databases, providing seamless functionality to the front-end.
</p> */}
            <p>
            I have also worked on building APIs to retrieve and <br />
process data from databases, providing seamless functionality <br />to the front-end.

              <i>
                <b className={s.purple}> front-end</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={false}   className='testimg '>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar}/>
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/sarrah171996"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/profile.php?id=100009292644457&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          {/* <li className={s.socialLink}>
            <a
              href="https://t.me/snaichuk_v"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li> */}
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/sarrah-mahmoud-2b2b53234/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
