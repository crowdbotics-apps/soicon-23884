import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings220236Navigator from '../features/Settings220236/navigator';
import UserProfile220229Navigator from '../features/UserProfile220229/navigator';
import Settings220228Navigator from '../features/Settings220228/navigator';
import Settings220226Navigator from '../features/Settings220226/navigator';
import SignIn2220224Navigator from '../features/SignIn2220224/navigator';
import Settings193731Navigator from '../features/Settings193731/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings220236: { screen: Settings220236Navigator },
UserProfile220229: { screen: UserProfile220229Navigator },
Settings220228: { screen: Settings220228Navigator },
Settings220226: { screen: Settings220226Navigator },
SignIn2220224: { screen: SignIn2220224Navigator },
Settings193731: { screen: Settings193731Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
