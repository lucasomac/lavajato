import { FontAwesome5 } from '@expo/vector-icons'; // Ícone mensagem erro
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from '../../../assets/Themes';
import Separator from '../../components/Separator';
import styles from './styles';

export default function Home({ navigation, route }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Lava a Jato L&M!</Text>
            <Image
                style={styles.imgLogo}
                source={require('../../../assets/car_washing_320.png')}
            />

            <Text style={styles.helloText}>Olá {route.params?.name},</Text>
            <Text style={styles.helloText}>Seja bem-vindo(a)!</Text>

            <Separator marginVertical={10} />

            <Text style={styles.helloText}>Não perca tempo e agende agora</Text>
            <View style={styles.contentAlert}>
                <Text style={styles.helloText}>a lavagem do seu carro </Text>
                <View style={styles.contentAlert}></View>
                <FontAwesome5
                    name='smile-wink'
                    size={24}
                    color={Colors.secondaryColor}
                />
            </View>
        </View>
    );
}