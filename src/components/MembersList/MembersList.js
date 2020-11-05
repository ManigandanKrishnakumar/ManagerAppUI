import React from 'react';
import {View, Image} from 'react-native';
import styles from './MembersListStyles';
export default ({members, imageConfig}) => {
  return (
    <View style={styles.membersListContainer}>
      {members.map((member, i) => {
        return <MemberIcon key={i} member={member} imageConfig={imageConfig} />;
      })}
    </View>
  );
};

const MemberIcon = ({member, imageConfig}) => {
  return (
    <View style={[styles.memberIconContainer, imageConfig]}>
      <Image source={{uri: member.image}} style={[styles.memberIconImage]} />
    </View>
  );
};
