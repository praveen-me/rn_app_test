import React, {useState} from 'react';
import {View, Image, Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import EditIcon from 'viamagnus/src/assets/svg/EditIcon';
import Button from 'viamagnus/src/components/Button';

// import styles from 'viamagnus/src/styles/containers/EditProfile';

// import Button from 'audvice/src/components/Button';

import commonStyles from 'viamagnus/src/styles/common';
import styles from 'viamagnus/src/styles/components/AppAvatar';

const pictureUrl =
  'https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3497&q=80';

export default function AppAvatar() {
  const [userImage, setUserImage] = useState(pictureUrl);

  async function handleProfilePictureChange() {
    try {
      const {assets} = await launchImageLibrary({
        selectionLimit: 1,
        mediaType: 'photo',
      });

      if (assets && assets?.length > 0) {
        if (assets[0].uri) {
          setUserImage(assets[0].uri || '');
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={commonStyles.alignCenter}>
      <View style={[styles.container]}>
        <Image source={{uri: userImage}} style={styles.avatarImage} />
        <View
          style={[
            styles.editWrapper,
            commonStyles.justifyCenter,
            commonStyles.alignCenter,
          ]}>
          <Button onPress={handleProfilePictureChange}>
            <EditIcon />
          </Button>
        </View>
      </View>
    </View>
  );
}
