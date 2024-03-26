/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Export default navigation functions in index.js to save lines in navigation.jsx
export { default as Home } from './navigation/Home';
export { default as Search } from './navigation/Search';
export { default as Record } from './navigation/Record';
export { default as Settings } from './navigation/Settings';

// Export default icon types to use. Refer to https://oblador.github.io/react-native-vector-icons/
export {default as Entypo} from 'react-native-vector-icons/Entypo';
export {default as AntDesign} from 'react-native-vector-icons/AntDesign';
export {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
export {default as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
export {default as Ionicons} from 'react-native-vector-icons/Ionicons';

AppRegistry.registerComponent(appName, () => App);
