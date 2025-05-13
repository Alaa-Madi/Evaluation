import React, { useEffect, useRef } from 'react';
import './infinitScroll.css';

const SpinningReveal: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null); // 👈 Proper typing here

  useEffect(() => {
    const img = imageRef.current;
    if (img) {
      img.classList.add('reveal');
    }
  }, []);

  return (
    <div className="image-container">
      <img
        ref={imageRef}
        src="https://i0.wp.com/storiespub.com/wp-content/uploads/2022/03/2-5.webp?resize=819,1024&ssl=1"
        alt="Spinning Reveal"
        className="image"
        width={200}
        height={200}
      />
    </div>
  );
};

export default SpinningReveal;
