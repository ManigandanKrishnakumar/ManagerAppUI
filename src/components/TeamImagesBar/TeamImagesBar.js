import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TeamImagesBarStyles';
import ProfileImageButton from '../ProfileImageButton/ProfileImageButton';
import {SHOW_TEAM_MEMBERS_LENGTH} from '../../constants/AppConstants';

export default ({team, focusedMember, onPressOfMember}) => {
  const teamMembersToShow = team.slice(0, SHOW_TEAM_MEMBERS_LENGTH);

  return (
    <View style={styles.container}>
      {teamMembersToShow.map((member, i) => {
        let focused = focusedMember.id === member.id;

        return (
          <ProfileImageButton
            member={member}
            isFocused={focused}
            key={member.id}
            onPress={onPressOfMember}
          />
        );
      })}
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}>
          +{team.length - SHOW_TEAM_MEMBERS_LENGTH}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
