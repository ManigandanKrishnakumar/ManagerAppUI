import React from 'react';
import {View, Text} from 'react-native';
import styles, {
  cmDataStyles,
  progressSquareStyle,
} from './VendorEfficiencyStyles';

import ModalPicker from '../ModalPicker/ModalPicker';
import {globalStyles} from '../../constants/globalStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../constants/globalStyleValues';
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';

export default ({efficiencyData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.monthlyDataContainer}>
        <View style={styles.monthlyDataWrapper}>
          <CurrentMonthData data={efficiencyData} />
        </View>
        <View style={styles.progressPercentWrapper}>
          <ProgressSquare progress={efficiencyData.netStatus} />
          <View style={styles.moreButton}>
            <Text style={styles.moreLabel}>More</Text>
          </View>
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.circularBarContainer}>
          <CircularProgressBar progress={efficiencyData.efficiency} />
        </View>

        <View style={styles.notesContainer}>
          <Text style={[styles.notesLabel, globalStyles.text]}>Notes :</Text>
          <Text style={[globalStyles.textBlack, styles.notes]}>
            {efficiencyData.notes}
          </Text>
          <View style={styles.editContainer}>
            <AntIcon name="edit" size={25} color={COLORS.FONT_BLACK_SHADE} />
            <Text style={[globalStyles.textBlack, styles.editLabel]}>Edit</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const CurrentMonthData = ({data}) => {
  return (
    <View style={cmDataStyles.container}>
      <ModalPicker
        value={data.month + ' ' + data.year}
        style={cmDataStyles.picker}
      />
      <View style={cmDataStyles.contractsContainer}>
        <Text style={[cmDataStyles.contract]}>{data.contracts}</Text>
        <Text style={[globalStyles.textBlack]}> contracts </Text>
      </View>
      <View style={cmDataStyles.contractsContainer}>
        <Text style={[globalStyles.textBlack, cmDataStyles.meetings]}>
          {data.meetings}
        </Text>
        <Text style={[globalStyles.textBlack]}> meetings </Text>
      </View>
    </View>
  );
};

const ProgressSquare = ({progress}) => {
  const prog = progress > 0 ? '+' + progress + '%' : '-' + progress + '%';
  return (
    <View style={[progressSquareStyle.containter, globalStyles.shadowEffect]}>
      <Text
        style={[
          progressSquareStyle.progText,
          progress > 0
            ? progressSquareStyle.positive
            : progressSquareStyle.negative,
        ]}>
        {prog}
      </Text>
    </View>
  );
};
