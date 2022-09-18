import { useNavigation, useRoute } from '@react-navigation/native';
import { FC, useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

export const Game: FC = () => {
    const [duos, setDuos] = useState<DuoCardProps[]>([]);
    const navigation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    const onBack = (): void => navigation.goBack();

    useEffect(() => {
        fetch(`http://192.168.0.110:4000/game/${game.id}/ads`)
            .then((response) => response.json())
            .then(setDuos);
    }, [game]);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onBack}>
                        <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20} />
                    </TouchableOpacity>

                    <Image source={logoImg} style={styles.logo} />

                    <View style={styles.right} />
                </View>

                <Image source={{ uri: game.bannerUrl }} resizeMode="cover" style={styles.cover} />

                <Heading title={game.title} subTitle="Conecte-se e comece a jogar" />

                <FlatList
                    data={duos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => <DuoCard key={index} data={item} onConnect={() => {}} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => <Text style={styles.emptyListText}>Nenhum anúncio públicado...</Text>}
                    contentContainerStyle={duos.length === 0 ? styles.emptyListContent : styles.contentList}
                    style={styles.containerList}
                />
            </SafeAreaView>
        </Background>
    );
};
