import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ícone dos botões Editar e Excluir
import * as React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../assets/Themes';
import { db } from '../../config/firebase';
import styles from './styles';

export default function ScheduleItem(props) {

    function handleEditButton() {
        props.navigation.navigate('ScheduleDetails', { idAgendamento: props.item.id });
    }

    function handleDeletePress() {
        Alert.alert(
            "Atenção:",
            `Tem certeza que deseja excluir o agendamento do veículo "${props.item.placaVeiculo}"?`,
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Sim", onPress: () => {
                        db.collection("Agendamentos").doc(props.item.id).delete().then(() => {
                            // console.log('Documento deletado com sucesso!');
                            Alert.alert('Agendamento EXCLUÍDO com sucesso!');
                        }).catch((error) => {
                            // console.error('Erro ao tentar deletar documento de id anterior', error);
                            Alert.alert('ERRO ao tentar deletar Agendamento!');
                        });
                    }
                }
            ],
            { cancelable: false }
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.itemTextName}>Veículo Placa: <Text style={styles.itemTextNameRed}>{props.item.placaVeiculo}</Text></Text>
            <View style={styles.itemLayoutDetail}>
                <Text style={styles.itemTextDetailTitle}>Data-Hora Agendada: </Text>
                {/* <Text style={styles.itemTextDetail}>{new Date(props.item.dataHora).toString()}</Text> */}
                <Text style={styles.itemTextDetail}>{props.item.dataHoraFormatada}</Text>
            </View>
            <View style={styles.itemLayoutDetail}>
                //Faltando fazer a busca do nome do servico
                <Text style={styles.itemTextDetailTitle}>Serviço: </Text>
                <Text style={styles.itemTextDetail}>{props.item.idServico}</Text>
            </View>
            <View style={styles.itemLayoutDetail}>
                <Text style={styles.itemTextDetailTitle}>Preço: </Text>
                <Text style={styles.itemTextDetail}>{props.item.precoServicoFormatado}</Text>
            </View>
            <View style={styles.itemLayoutDetail}>
                //Faltaando fazer a busca do nome da forma de pagamento
                <Text style={styles.itemTextDetailTitle}>Forma Pagamento: </Text>
                <Text style={styles.itemTextDetail}>{props.item.idFPagamento}</Text>
            </View>
            <View>
                <Text style={styles.itemTextDetailTitle}>Recado/Observação: </Text>
                <View style={{ flex: 1 }}>
                    <Text style={styles.itemTextDetailMultiline}>{`${props.item.obsStatus}`}</Text>
                </View>
            </View>
            <View style={styles.itemLayoutDetail}>
                <Text style={styles.itemTextDetailTitle}>Cliente/Resp.: </Text>
                <Text style={styles.itemTextDetail}>{props.item.nomeUsuario}</Text>
            </View>
            <View style={styles.itemLayoutDetail}>
                <Text style={styles.itemTextDetailTitle}>Email: </Text>
                <Text style={styles.itemTextDetail}>{props.item.emailUsuario}</Text>
            </View>
            <View style={styles.itemLayoutDetail}>
                <Text style={styles.itemTextDetailTitle}>Telefone: </Text>
                <Text style={styles.itemTextDetail}>{props.item.telefoneUsuario}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
                    <MaterialCommunityIcons name="delete-forever" color={Colors.whiteColor} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} onPress={handleEditButton}>
                    <MaterialCommunityIcons name="file-document-edit-outline" color={Colors.whiteColor} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}