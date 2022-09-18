import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { Game } from '../screens/Game';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />

            <Screen name="game" component={Game} />
        </Navigator>
    );
};
