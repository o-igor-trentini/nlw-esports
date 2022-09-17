import { FC } from 'react';
import { FlatList, Image, View } from 'react-native';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

export const Home: FC = () => {
    return (
        <View style={styles.container}>
            <Image source={logoImg} defaultSource={logoImg} style={styles.logo} />

            <Heading title="Encontre seu duo!" subTitle="Selecione o game que deseja jogar..." />

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={GAMES}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => <GameCard key={index} data={item} />}
                contentContainerStyle={styles.contentList}
            />
        </View>
    );
};
