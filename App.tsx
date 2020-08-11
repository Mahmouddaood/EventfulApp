
import React, { useCallback } from 'react';
import {
  StatusBar,
} from 'react-native';
const PushNotification = require('react-native-push-notification')

import firebase from 'react-native-firebase';
import SplashScreen from 'react-native-splash-screen'
import AppRoutes from './src/routes'
import colors from './src/utilities/colors'
import Store from './src/utilities/Context/index'
const {
  useEffect
} = React

const AppContainer: React.FC = (): JSX.Element => {

  const listenNotification = useCallback(async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // user has permissions
      // await firebase.messaging().requestPermission();
      firebase.notifications().onNotificationOpened((notificationOpen: any) => {
        const action = notificationOpen.action;
        const notification: any = notificationOpen.notification;
        console.log("notification", notification)
      })
    } else {
      try {
        await firebase.messaging().requestPermission();
        console.log("here")
      } catch (error) {
        // User has rejected permissions
        // RNToasty.Show({title: I18n.t('cannotRecieveNoti')});
      }
      // user doesn't have permission
    }
  }, [])
  useEffect(() => {

    SplashScreen.hide();


    listenNotification()
  }, [listenNotification])



  return (
    <Store>
      <StatusBar backgroundColor={colors.mainColor} />
      <AppRoutes />
    </Store>
  );
};
export default AppContainer;

