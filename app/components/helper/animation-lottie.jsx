"use client"

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import defaultAnimation from '../../assets/lottie/js.json';

const AnimationLottie = ({ animationPath, width }) => {
  const animationData = animationPath || defaultAnimation;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    style: {
      width: width || '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;