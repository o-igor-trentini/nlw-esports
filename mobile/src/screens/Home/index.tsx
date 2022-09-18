import { useNavigation } from '@react-navigation/native';
import { FC, useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';

export const Home: FC = () => {
    const [games, setGames] = useState<GameCardProps[]>();
    const navigation = useNavigation();

    const onOpenGame = ({ id, title, bannerUrl }: GameCardProps): void =>
        navigation.navigate('game', { id, title, bannerUrl });

    useEffect(() => {
        fetch('http://192.168.0.110:4000/games')
            .then((response) => response.json())
            .then(setGames);
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg} defaultSource={logoImg} style={styles.logo} />

                <Heading title="Encontre seu duo!" subTitle="Selecione o game que deseja jogar..." />

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={games}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <GameCard
                            key={index}
                            data={item}
                            onPress={() =>
                                onOpenGame({
                                    id: item.id,
                                    title: item.title,
                                    bannerUrl: item.bannerUrl,
                                    _count: { ads: 0 },
                                })
                            }
                        />
                    )}
                    contentContainerStyle={styles.contentList}
                />
            </SafeAreaView>
        </Background>
    );
};
