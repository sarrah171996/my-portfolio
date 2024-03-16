import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Sarrah Mahmoud </span>
        from <span className={s.purple}> Egypt.</span>
        <br />
        Software developer with expertise in Back-end development{' '}
        <br />
        using Node.js.
        <br />
        <br />
        {/* I have a Bachelor's degree in Computer Science and */}
        I have dedicated my time to mastering Node.js and MongoDB
        <br />
        <br />
        {/* Master's degree in Project Management from Ternopil Academy. */}
        My expertise extends to implementing<span className={s.purple}> authentication </span> and <br /> 
        <span className={s.purple}> authorization </span> mechanisms, <br />
        integrating third-party
        <span className={s.purple}> APIs </span> , and ensuring data 
        <span className={s.purple}> security </span> .
        <br />
        <br /> 
        I am also  well-versed in performance<br />
         optimization techniques to enhance application speed and scalability.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};



export default AboutTextCard;
