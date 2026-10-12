
import fitnessHubLogo from '../assets/fitnesshub-logo.png';

const BrandLogo = ({ className = 'w-12 h-12' }) => {
  return (
    <img
      src={fitnessHubLogo}
      alt="Fitness Hub Logo"
      className={`${className} object-contain`}
    />
  );
};

export default BrandLogo;
