import { FC } from 'react';
import { Text, View, ViewProps } from 'react-native';
import { styles } from './styles';

interface Props extends ViewProps {
    title: string;
    subTitle: string;
}

export const Heading: FC<Props> = ({ title, subTitle, ...rest }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    );
};
