import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';
import { GameController } from 'phosphor-react-native';

export interface DuoCardProps {
    id: string;
    name: string;
    weekDays: string[];
    useVoiceChannel: boolean;
    hourStart: string;
    hourEnd: string;
    yearsPlaying: number;
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
}

export const DuoCard: FC<Props> = ({ data, onConnect }) => {
    return (
        <View style={styles.container}>
            <DuoInfo label="Nome" value={data.name} />

            <DuoInfo label="Tempo de jogo" value={data.yearsPlaying} />

            <DuoInfo
                label="Disponibilidade"
                value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
            />

            <DuoInfo
                label="Chamada de áudio?"
                value={data.useVoiceChannel ? 'Sim' : 'Não'}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity onPress={onConnect} style={styles.button}>
                <GameController color={THEME.COLORS.TEXT} size={20} />
                <Text style={styles.buttonTitle}>Conectar</Text>
            </TouchableOpacity>
        </View>
    );
};
