import React from 'react';
import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './HomeScreenStyles';
import Header from '../../components/Header/Header';
import TasksTab from '../../components/TasksTab/TasksTab';
import TabBar from '../../components/TabBar/TabBar';
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction';
import {HOME_PAGE_CONSTANTS} from '../../constants/AppConstants';

const TABS = {
  Tasks: () => <TasksTab />,
  Alerts: () => <UnderConstruction />,
  Traffic: () => <UnderConstruction />,
  Options: () => <UnderConstruction />,
  Bugs: () => <UnderConstruction />,
  Bugs1: () => <UnderConstruction />,
  Bugs2: () => <UnderConstruction />,
  Bugs3: () => <UnderConstruction />,
  Bugs4: () => <UnderConstruction />,
  Bugs5: () => <UnderConstruction />,
  Bugs6: () => <UnderConstruction />,
};

export default ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <Header config={{showBack: false}} navigation={navigation} />
      <ScrollView style={styles.tabsScrollView}>
        <Tab.Navigator
          tabBar={(props) => <TabBar {...props} />}
          initialRouteName="Tasks">
          {HOME_PAGE_CONSTANTS.TABS.map((tab, index) => {
            return (
              <Tab.Screen
                key={index}
                name={tab.name}
                component={TABS[tab.name]}
                initialParams={tab.data}
              />
            );
          })}
        </Tab.Navigator>
      </ScrollView>
    </View>
  );
};

// tabBar={(props) => <TabBar {...props} />}
