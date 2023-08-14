import React from "react";

export const SCREEN_S = 320;
export const SCREEN_M = 600;
export const SCREEN_L = 900;

export const useResize = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      
      const handleResize = () => {
        setTimeout(() => {setWidth(window.innerWidth)}, 3000);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return {
        width,
        isScreenS: width >= SCREEN_S && width < SCREEN_M,
        isScreenM: width >= SCREEN_M && width < SCREEN_L,
        isScreenL: width >= SCREEN_L,

      };
    };