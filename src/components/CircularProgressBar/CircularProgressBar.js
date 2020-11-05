import React, {useRef, useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import {Svg, Circle, Text as SVGText} from 'react-native-svg';

import styles from './CircularProgressBarStyles';
import {COLORS} from '../../constants/globalStyleValues';
const SIZE = 150;
const STROKE_WIDTH = 10;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUM = 2 * Math.PI * RADIUS;

export default ({progress}) => {
  // const progress = 25;
  const progressAnimationValue = useRef(new Animated.Value(100)).current;
  const progressAnimation = Animated.timing(progressAnimationValue, {
    toValue: 100 - progress,
    duration: 200,
    useNativeDriver: true,
  });
  const [progressDisplayValue, setProgressDisplayValue] = useState();
  useEffect(() => {
    progressAnimation.start();
    progressAnimationValue.addListener((prog) => {
      setProgressDisplayValue(Math.floor(prog.value));
    });
  }, [progressAnimation, progressAnimationValue]);

  return (
    <View style={styles.container}>
      <Svg height={SIZE} width={SIZE}>
        {/* START: BACK GROUND CIRCLE */}
        <Circle
          stroke={COLORS.SECONDARY_LIGHT}
          fill="none"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
        />
        {/* END: BACK GROUND CIRCLE */}

        {/* START: PROGRESS */}
        <Circle
          stroke={COLORS.SECONDARY}
          fill="none"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeDasharray={`${CIRCUM} ${CIRCUM}`}
          strokeDashoffset={RADIUS * 2 * Math.PI * (progressDisplayValue / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${SIZE / 2}, ${SIZE / 2})`}
          strokeWidth={STROKE_WIDTH}
        />
        {/* END: PROGRESS */}
        <SVGText
          fontSize={30}
          x={SIZE / 2 + 1}
          y={SIZE / 2 + 20 / 2}
          textAnchor="middle"
          fill={COLORS.SECONDARY_DARK}>
          {100 - progressDisplayValue + '%'}
        </SVGText>
      </Svg>
    </View>
  );
};
