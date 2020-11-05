import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './TabBarStyles';
import TabButton from '../TabButton/TabButton';
import withEssentials from '../../HOCs/withEssentials';
export const TabBar = ({state, descriptors, navigation, isPortrait}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.catagoriesTabContainer}>
      <FlatList
        horizontal={true}
        data={state.routes}
        keyExtractor={(route) => route.name}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => ({
          length: 150,
          offset: 150 * index,
          index,
        })}
        initialScrollIndex={2}
        renderItem={({item, index}) => {
          const {options} = descriptors[item.key];
          let iconDetail;
          if (item.params) {
            iconDetail = item.params.ICON;
          }
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : item.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: item.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(item.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: item.key,
            });
          };
          return (
            <TabButton
              key={index}
              index={index}
              isFocused={isFocused}
              options={options}
              accessibilityRole="button"
              onPress={onPress}
              onLongPress={onLongPress}
              label={label}
              iconDetail={iconDetail}
            />
          );
        }}
        style={styles.flatListBar}
        contentContainerStyle={!isPortrait ? styles.flatListBarContent : null}
      />

      {/* <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentOffset={{x: 300, y: 300}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          let iconDetail;
          if (route.params) {
            iconDetail = route.params.ICON;
          }
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            // <TouchableOpacity
            //   key={index}
            //   accessibilityRole="button"
            //   accessibilityStates={isFocused ? ['selected'] : []}
            //   accessibilityLabel={options.tabBarAccessibilityLabel}
            //   testID={options.tabBarTestID}
            //   onPress={onPress}
            //   onLongPress={onLongPress}
            //   style={[
            //     styles.catagoryTabButton,
            //     isFocused
            //       ? styles.catagorySelected
            //       : styles.catagoriesNotSelected,
            //   ]}>
            <TabButton
              key={index}
              index={index}
              isFocused={isFocused}
              options={options}
              accessibilityRole="button"
              onPress={onPress}
              onLongPress={onLongPress}
              label={label}
              iconDetail={iconDetail}
            />
            //  <Text
            //   style={[
            //     styles.catagoryName,
            //     isFocused
            //       ? styles.catagorySelectedText
            //       : styles.catagoriesNotSelectedText,
            //   ]}>
            //   {label}
            // </Text>
            // </TouchableOpacity>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

// import React from 'react';
// import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
// import {COLORS} from '../../constants/globalStyleValues';

// export default ({state, descriptors, navigation}) => {
//   const focusedOptions = descriptors[state.routes[state.index].key].options;

//   if (focusedOptions.tabBarVisible === false) {
//     return null;
//   }

//   return (
//     <View style={styles.catagoriesTabContainer}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             key={index}
//             accessibilityRole="button"
//             accessibilityStates={isFocused ? ['selected'] : []}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={[
//               styles.catagoryTabButton,
//               isFocused
//                 ? styles.catagorySelected
//                 : styles.catagoriesNotSelected,
//             ]}>
//             <Text
//               style={[
//                 styles.catagoryName,
//                 isFocused
//                   ? styles.catagorySelectedText
//                   : styles.catagoriesNotSelectedText,
//               ]}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   catagoriesTabContainer: {flexDirection: 'row', flexWrap: 'wrap'},
//   catagoryTabButton: {
//     padding: 20,
//   },
//   catagoryName: {
//     fontSize: 20,
//   },
//   catagorySelected: {
//     borderBottomWidth: 5,
//   },
//   catagorySelectedText: {
//     fontWeight: '600',
//   },
//   catagoriesNotSelected: {},
//   catagoriesNotSelectedText: {
//     color: COLORS.GRAY,
//   },
// });

export default withEssentials(TabBar);
