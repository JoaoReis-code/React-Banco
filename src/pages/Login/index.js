import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import Conta1 from "../../Conta/conta1";
import Conta2 from "../../Conta/conta2";


export default function Login(){

    const navigation = useNavigation();

    let [login, setLogin] = useState('');
    let [senha, setSenha] = useState('');

    let conta1 = Conta1.getInstance()
    let conta2 = Conta2.getInstance()
    
    function verificaLogin(data){
        if(login == '' || senha == ''){
            Alert.alert("Preencha todos os campos")
        }else{
            if(conta1.getLogin() == login && conta1.getSenha() == senha){
                conta1.setLogado(true)
                conta2.setLogado(false)
                setLogin('')
                setSenha('')
                navigation.navigate('Home')
            }else if(conta2.getLogin() == login && conta2.getSenha() == senha){
                conta2.setLogado(true)
                conta1.setLogado(false)
                setLogin('')
                setSenha('')
                navigation.navigate('Home')
            }else{
                Alert.alert("Numero da conta ou senha incorretos, tente novamente!")
                setLogin('')
                setSenha('')
            }
        }
        console.log(conta1)
    }

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" style={styles.containerHeader}>
                <Text style={styles.message}>Insira seus dados</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={400} style={styles.containerForm}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setLogin}
                    value={login}
                    placeholder="Insira um login"
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry={true}
                    placeholder="Insira uma senha"
                />
                
                 
            <TouchableOpacity style={styles.button} onPress={verificaLogin}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '10%',
        paddingStart: '4%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingVertical: 15,
    },
    title:{
        fontSize:20,
        marginTop:20,
        color: '#000'
    },
    input:{
        borderBottomWidth:1,
        marginBottom:15,
        height:40,
        fontSize:16,
        color: '#000',
    },
    button:{
        backgroundColor:'#000',
        width:'100%',
        borderRadius:10,
        paddingVertical: 10,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    }
})