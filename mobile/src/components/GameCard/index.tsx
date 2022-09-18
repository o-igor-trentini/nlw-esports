import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface GameCardProps {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    };
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

export const GameCard: FC<Props> = ({ data, ...rest }) => {
    if (!data) return <Text>Nada</Text>;
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground source={{ uri: data.bannerUrl }} style={styles.cover}>
                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                    <Text style={styles.name}>{data.title}</Text>

                    <Text style={styles.ads}>{data._count.ads} anúncios</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};
