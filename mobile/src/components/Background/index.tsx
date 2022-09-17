import { FC, ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './styles';
import bgImg from '../../assets/background-galaxy.png';

interface Props {
    children: ReactNode;
}

export const Background: FC<Props> = ({ children }) => {
    return (
        <ImageBackground source={bgImg} defaultSource={bgImg} style={styles.container}>
            {children}
        </ImageBackground>
    );
};
