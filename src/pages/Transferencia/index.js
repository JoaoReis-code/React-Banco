import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Conta1 from '../../Conta/conta1'
import Conta2 from '../../Conta/conta2'

export default function Tranferencia(){
    
    let conta1 = Conta1.getInstance()
    let conta2 = Conta2.getInstance()
    let contaLogada = null
    let contaOff = null
    
    const [valor, setValor] = useState('')
    const [numero, setNumero] = useState('')

    if(conta1.getLogado() == true){
        contaLogada = conta1
        contaOff = conta2
    }else if(conta2.getLogado() == true){
        contaLogada = conta2
        contaOff = conta1
    }
        
    function tranferencia(){
        if(contaOff.getLogin() == numero){
            if(valor > 0){
                if(contaLogada.getSaldo() >= valor){
                    contaLogada.tranferencia(contaOff,parseFloat(valor).toFixed(2))
                    Alert.alert("Tranferencia realizada com sucesso")
                    setValor(0)
                    setNumero(0)
                }else{
                    Alert.alert("Voce nao possui saldo suficiente")
                    setValor(0)
                    setNumero(0)
                }
            }else{
                Alert.alert("Voce noa pode tranferir um valor negativo")
                setValor(0)
                setNumero(0)
            }
        }else if(contaLogada.getLogin() == numero){
            Alert.alert("Voce nao pode fazer uma tranferencia para voce mesmo!")
            setValor(0)
            setNumero(0)
        }else{
            Alert.alert("Nenhuma conta foi encontrada")
            setValor(0)
            setNumero(0)
        }
    }

    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Cliente -- {contaLogada.getName()}</Text>
            <Text style={styles.headerText}>Valor em conta: R${contaLogada.getSaldo()}</Text>
        </View>
        
        <Animatable.View animation="fadeInUp" delay={400} style={styles.containerForm}>
        <Text style={styles.title}>Valor</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={setValor}
                value={valor}
                placeholder="Informe quanto deseja tranferir"
            />
        <Text style={styles.title}>Destino</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={setNumero}
                value={numero}
                placeholder="Informe o numero da conta de destino"
            />
    
            <TouchableOpacity style={styles.button} onPress={tranferencia}>
                <Text style={styles.buttonText}>Tranferir</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex:1,
    },
    containerPrincipal:{
        backgroundColor: '#fff',
        flex:3,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    header:{
        backgroundColor: '#000',
        flex:1,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    title:{
        fontSize:20,
        marginTop:20,
        color: '#000'
    },
    headerText:{
        fontSize:20,
        color: '#fff',
        fontWeight: 'bold',
        padding:15,
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingVertical: 15,
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