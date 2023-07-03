import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Conta1 from '../../Conta/conta1'
import Conta2 from '../../Conta/conta2'

export default function Saque(){
    
    let conta1 = Conta1.getInstance()
    let conta2 = Conta2.getInstance()
    let contaLogada = null
    
    const [valor, setValor] = useState('')
    

    if(conta1.getLogado() == true){
        contaLogada = conta1
    }else if(conta2.getLogado() == true){
        contaLogada = conta2
    }
     
    function saque(){
        if(valor > 0){
            if(contaLogada.getSaldo() >= valor){
                contaLogada.saque(parseFloat(valor).toFixed(2))
                Alert.alert("Saque realizado com sucesso")
                setValor(0)
            }else{
                Alert.alert("Voce nao possui esse valor disponivel para saque")
                setValor(0)
            }
        }else{
            Alert.alert("Voce nao pode sacar um valor negativo")
            setValor(0)
        }
        
        console.log(contaLogada.getSaldo())
    }

    

    return(
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Cliente -- {contaLogada.getName()}</Text>
            <Text style={styles.headerText}>Valor disponivel para saque --  R${contaLogada.getSaldo()}</Text>
        </View>
    
        <Animatable.View animation="fadeInUp" delay={400} style={styles.containerForm}>
                <Text style={styles.title}>Saque</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setValor}
                    value={valor}
                    placeholder="Informe quanto dejesa sacar"
                />
            <TouchableOpacity style={styles.button} onPress={saque}>
                <Text style={styles.buttonText}>Sacar</Text>
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