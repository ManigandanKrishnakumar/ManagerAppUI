import React, {useState, useEffect} from 'react';
import {Dimensions, Platform} from 'react-native';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export default (Component) => {
  const OrientationComponent = (props) => {
    const [orientaion, setOrientaion] = useState(isPortrait());
    useEffect(() => {
      Dimensions.addEventListener('change', () => {
        setOrientaion(isPortrait());
      });

      return () => {
        Dimensions.removeEventListener('change');
      };
    }, []);
    return <Component {...props} isPortrait={orientaion} />;
  };
  return OrientationComponent;
};
