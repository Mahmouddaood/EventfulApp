package com.mytspro;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import fr.snapp.imagebase64.RNImgToBase64Package;


import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import com.imagepicker.ImagePickerPackage; // <-- add this import
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.reactnativecommunity.rnpermissions.RNPermissionsPackage; 
import cl.json.RNSharePackage;
import cl.json.ShareApplication;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;
import android.content.IntentFilter;
import io.rumors.reactnativesettings.RNSettingsPackage;
import io.rumors.reactnativesettings.receivers.GpsLocationReceiver;





public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
                      new ImagePickerPackage();
                      new GeolocationPackage();
                        new MapsPackage();
                        new RNPermissionsPackage();
                        new RNSharePackage();
                            new RNFirebasePackage();
                            new RNDateTimePickerPackage();
                            new RNSettingsPackage();
                        // new RNFirebaseMessagingPackage();
                        // new RNFirebaseNotificationsPackage();
                        new RNFirebaseAuthPackage();
                        packages.add(new RNFirebaseMessagingPackage());
                        packages.add(new RNFirebaseNotificationsPackage());




          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
        registerReceiver(new GpsLocationReceiver(), new IntentFilter("android.location.PROVIDERS_CHANGED"));
    initializeFlipper(this); // Remove this line if you don't want Flipper enabled

  }

  /**
   * Loads Flipper in React Native templates.
   *
   * @param context
   */
  private static void initializeFlipper(Context context) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
        aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
