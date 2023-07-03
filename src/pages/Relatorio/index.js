import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Conta1 from '../../Conta/conta1'
import Conta2 from '../../Conta/conta2'

export default function Relatorio(){
    

    const [atualiza, setRelatorio] = useState('')
    let conta1 = Conta1.getInstance()
    let conta2 = Conta2.getInstance()
    let contaLogada = null

    if(conta1.getLogado() == true){
        contaLogada = conta1
    }else if(conta2.getLogado() == true){
        contaLogada = conta2
    }

    
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Registro de transaçoẽs</Text>
        </View>
    
        <View style={styles.containerPrincipal}>
            <Text style={styles.title}>{contaLogada.getHistorico()}</Text>
        </View>
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
        flex:1,
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