import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div></div>
  );
}

export default AOSInitializer;
