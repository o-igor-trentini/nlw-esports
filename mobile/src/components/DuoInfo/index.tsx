import { FC } from 'react';
import { ColorValue, Text, View } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

interface Props {
    label: string;
    value: string | number;
    colorValue?: ColorValue;
}

export const DuoInfo: FC<Props> = ({ label, value, colorValue = THEME.COLORS.TEXT }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <Text numberOfLines={1} style={[styles.value, { color: colorValue }]}>
                {value}
            </Text>
        </View>
    );
};
