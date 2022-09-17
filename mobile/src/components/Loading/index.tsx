import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export const Loading: FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={THEME.COLORS.PRIMARY} />
        </View>
    );
};
