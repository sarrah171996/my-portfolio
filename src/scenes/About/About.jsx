import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import aboutPromoImg from '../../assets/about-promo.svg';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';
import test2 from '../../assets/test2.png'
// import avatar2 from '../../assets/avatart2.png';


const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Know Who <b className={s.purple}>I'M</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src={test2} alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          Professional <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />

        <h2 className={s.githubActivity}>
          Days I <b className={s.purple}>Code</b>
        </h2>
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
