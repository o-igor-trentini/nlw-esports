import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { AppRoutes } from './app.routes';

export const Routes: FC = () => {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
};
