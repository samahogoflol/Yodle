import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
 
    const hash = location.hash; 

    if (hash) {
      const elementId = hash.substring(1); 
      
      const element = document.getElementById(elementId); 

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
      }
    }
  }, [location.hash]); 

  return null; 
};

export default ScrollToHashElement;
