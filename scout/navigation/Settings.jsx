import { React } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PasswordPrompt from './settings-nav/PasswordPrompt';
import SettingsPanel from './settings-nav/SettingsPanel';
import DeleteRobot from './settings-nav/DeleteRobot';


export default function Record() {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions=
      {
        {
          headerShown: false,
          animation: 'none',
        }
      }
    >

      <Stack.Screen name="PasswordPrompt" component={PasswordPrompt} />
      <Stack.Screen name="SettingsPanel" component={SettingsPanel} />
      <Stack.Screen name="DeleteRobot" component={DeleteRobot} />

    </Stack.Navigator>
  );
}
