import React  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Conta1 from '../../Conta/conta1'
import Conta2 from '../../Conta/conta2'

export default function Deposito(){
    
    let conta1 = Conta1.getInstance()
    let conta2 = Conta2.getInstance()
    let contaLogada = null
    

    if(conta1.getLogado() == true){
        contaLogada = conta1
    }else if(conta2.getLogado() == true){
        contaLogada = conta2
    }
    
    function situacaoFinanceira(){
        if(contaLogada.getSaldo() == 0){
            return(
                <Animatable.Image
                    animation="fadeInUp"
                    delay={1000}
                    source={require('../../extra/pobre.png')}
                    style={{ width: '100%', height: '100%'  }}
                    resizeMode="contain" 
                    />
            )
        }else if(contaLogada.getSaldo() > 0 && contaLogada.getSaldo() < 1500){
            return(
                <Animatable.Image
                    animation="fadeInUp"
                    delay={1000}
                    source={require('../../extra/pobre2.png')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain" 
                    />
            )
        }else if(contaLogada.getSaldo() >= 1500 && contaLogada.getSaldo() < 10000){
            return(
                <Animatable.Image
                    animation="fadeInUp"
                    delay={1000}
                    source={require('../../extra/pobre3.png')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain" 
                    />
            )
        }else if(contaLogada.getSaldo() >= 10000){
            return(
                <Animatable.Image
                    animation="fadeInUp"
                    delay={1000}
                    source={require('../../extra/comoeamigo.png')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain" 
                    />
            )
        }
    }

    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Cliente -- {contaLogada.getName()}</Text>
            <Text style={styles.headerText}>Valor em conta: R${contaLogada.getSaldo()}</Text>
        </View>
    
        <Animatable.View animation="fadeInUp" delay={400} style={styles.containerForm}>
                <Text style={styles.title}>Situacao financeira</Text>
                <>
                    {
                        situacaoFinanceira()
                    }
                </>
                
        </Animatable.View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex:1,
    },
    header:{
        backgroundColor: '#000',
        flex:1,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
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
        flex:6,
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