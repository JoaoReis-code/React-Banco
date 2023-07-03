import React  from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Conta1 from '../../Conta/conta1'
import Conta2 from '../../Conta/conta2'

export default function Home(){
    
    const navigation = useNavigation()

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
            <Text style={styles.headerText}>Cliente -- {contaLogada.getName()}</Text>
            <Text style={styles.headerText}>Numero -- {contaLogada.getLogin()}</Text>
        </View>
    
        <View style={styles.containerPrincipal}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Saque')}>
            <Text style={styles.buttonText}>Saque</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Deposito')}>
            <Text style={styles.buttonText}>Deposito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tranferencia')}>
            <Text style={styles.buttonText}>Tranferencia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Relatorio')}>
            <Text style={styles.buttonText}>Relatorio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Saldo')}>
            <Text style={styles.buttonText}>Saldo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.buttonText}>Desconectar</Text>
        </TouchableOpacity>

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
        alignContent: 'center',
        backgroundColor: '#fff',
        flex:5,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    header:{
        backgroundColor: '#000',
        flex:1,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    headerText:{
        fontSize:20,
        color: '#fff',
        fontWeight: 'bold',
        padding:5,
        margin:8,
    },
    button:{
        backgroundColor:'#000',
        width:'80%',
        borderRadius: 10,
        paddingVertical: 14,
        marginTop: 24,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    }
})