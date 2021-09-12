import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Ícones inputs e mensagem erro
import * as React from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../../../assets/Themes';
import Separator from '../../components/Separator';
import firebase, { db } from '../../config/firebase'; //db <- importação da referência do Firestore
import styles from './styles';

export default function Register({ navigation }) {
    const [state, setState] = React.useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const [passwordSecured, setPasswordSecured] = React.useState(true);
    const [passwordConfirmSecured, setPasswordConfirmSecured] = React.useState(true);
    const [statusRegisterError, setStatusRegisterError] = React.useState(false);
    const [messageRegisterError, setMessageRegisterError] = React.useState('');
    // Variavel de estado para ativar e desativar o ActivityIndicator (ampulheta)
    const [loading, setLoading] = React.useState(false);

    // Variáveis de estado dos inputs sendo atualizadas a cada digitação
    const handleChangeText = (key, value) => {
        if (statusRegisterError) {
            setStatusRegisterError(false);
        };
        setState({ ...state, [key]: value });
    }

    // Checa campos de preenchimento obrigatório
    function requiredFields() {
        if (!state.name || !state.phone || !state.email ||
            !state.password || !passwordConfirm)
            return false;
        else
            return true;
    }

    //Checa se "Senha" e "Confirma Senha" coincidem
    function validPassword() {
        if (state.password !== passwordConfirm)
            return false;
        else
            return true;
    }

    // Função do botão "Salvar"
    function registerFirebase() {
        if (!requiredFields()) {
            setMessageRegisterError('Todos os campos são de \npreenchimento obrigatório!');
            setStatusRegisterError(true);
        }
        else {
            if (!validPassword()) {
                setMessageRegisterError('Os campos "Senha" e "Confirma Senha" \nnão coincidem!');
                setStatusRegisterError(true);
            } else {
                setLoading(true);
                firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
                    .then((userCredential) => {
                        let userName = state.name,
                            userEmail = state.email;

                        // Não atualiza phone por aqui por ser campo de autenticaçao, apenas displayName
                        userCredential.user.updateProfile({
                            displayName: state.name,
                            // photoURL: state.photo, // Pode atualizar, mas não será usada
                        });

                        // Salva no banco Firestore dados complementares na
                        // coleção "Perfis" de cada usuário em relacionamento 1:1
                        // com a coleção "Users" do serviço Authetication
                        // no qual o id do documento Perfil é o uid do usuário criado
                        db.collection('Perfis').doc(userCredential.user.uid).set({ nome: state.name, email: state.email, telefone: state.phone, tipoUsuario: 'cliente' });

                        // Monta as variáveis globais do Usuário registrado/logado
                        // Caso necessite usá-las em outras telas
                        global.idUsuario = userCredential.user.uid;
                        global.emailUsuario = state.email;
                        global.nomeUsuario = state.name;
                        global.telefoneUsuario = state.phone;
                        global.tipoUsuario = 'cliente';

                        // Limpa variáveis de estado/inputs
                        setState({ name: '', email: '', phone: '', password: '' });
                        setPasswordConfirm('');
                        setLoading(false);

                        // Ao se registrar OK redireciona direto para tela Home (e não volta mais para login)
                        // Uma vez que o usuário registrado é considerado logado
                        // Lembrando que vai sem o displayName da credencial que não é obtido ao se registrar,
                        // mesmo após tendo invocado o método updteProfile
                        // Porém no próximo Login o displayName é obtido já na credencial
                        // Caso contrário teria que fazer o logout firebase.auth().signOut(); e voltar para tela Login
                        navigation.replace('HomeMenuBottomTab', {
                            screen: 'Home',
                            params: { uid: userCredential.user.uid, name: userName, email: userEmail }
                        });
                    })
                    .catch((error) => {
                        setLoading(false);
                        if (error.code === 'auth/email-already-in-use')
                            setMessageRegisterError('"E-mail" (Usuário) já cadastrado!');
                        else
                            setMessageRegisterError('"E-mail" e/ou "Senha" inválidos!\n(Senha com mínimo de 6 caracteres)');
                        setStatusRegisterError(true);
                        //console.log(error.code);
                        //console.log(error.message);
                    });
            }
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.titleText}>Dados do Usuário</Text>

            {loading ? <ActivityIndicator size='large' color={Colors.secondaryColor} /> : <></>}

            <View style={styles.inputView}>
                <MaterialIcons name="email" size={24} color={Colors.secondaryColor} />
                <TextInput
                    style={styles.input}
                    value={state.email}
                    onChangeText={(value) => handleChangeText('email', value)}
                    placeholder={'E-mail'}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputView}>
                <FontAwesome name="user" size={24} color={Colors.secondaryColor} />
                <TextInput
                    style={styles.input}
                    value={state.name}
                    onChangeText={(value) => handleChangeText('name', value)}
                    placeholder={'Nome'}
                />
            </View>

            <View style={styles.inputView}>
                <MaterialIcons name="phone" size={24} color={Colors.secondaryColor} />
                <TextInput
                    style={styles.input}
                    value={state.phone}
                    onChangeText={(value) => handleChangeText('phone', value)}
                    placeholder={'Telefone'}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputView}>
                <FontAwesome name="lock" size={24} color={Colors.secondaryColor} />
                <TextInput
                    style={styles.input}
                    value={state.password}
                    secureTextEntry={passwordSecured}
                    placeholder={'Senha'}
                    textContentType="password"
                    autoCapitalize="none"
                    onChangeText={(value) => handleChangeText('password', value)}
                />
                <TouchableOpacity
                    style={styles.touchableIcon}
                    onPress={() => setPasswordSecured(!passwordSecured)}>
                    {passwordSecured ? (
                        <FontAwesome name="eye" type="font-awesome" size={20} color={Colors.secondaryColor} />
                    ) : (
                        <FontAwesome name="eye-slash" type="font-awesome" size={20} color={Colors.secondaryColor} />
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.inputView}>
                <FontAwesome name="lock" size={24} color={Colors.secondaryColor} />
                <TextInput
                    style={styles.input}
                    value={passwordConfirm}
                    secureTextEntry={passwordConfirmSecured}
                    placeholder={'Confirma Senha'}
                    textContentType="password"
                    autoCapitalize="none"
                    onChangeText={(value) => setPasswordConfirm(value)}
                />
                <TouchableOpacity
                    style={styles.touchableIcon}
                    onPress={() => setPasswordConfirmSecured(!passwordConfirmSecured)}>
                    {passwordConfirmSecured ? (
                        <FontAwesome name="eye" type="font-awesome" size={20} color={Colors.secondaryColor} />
                    ) : (
                        <FontAwesome name="eye-slash" type="font-awesome" size={20} color={Colors.secondaryColor} />
                    )}
                </TouchableOpacity>
            </View>

            {statusRegisterError === true
                ?
                <View style={styles.contentAlert}>
                    <MaterialIcons
                        name='mood-bad'
                        size={24}
                        color='black'
                    />
                    <Text style={styles.warningAlert}>{messageRegisterError}</Text>
                </View>
                :
                <View></View>
            }

            <Separator marginVertical={10} />

            <TouchableOpacity style={styles.saveButton} onPress={registerFirebase}>
                <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>

            <Separator marginVertical={30} />

        </KeyboardAvoidingView>
    );
}