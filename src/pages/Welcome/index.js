import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image
                animation="fadeInUp"
                delay={200}
                source={require('../../extra/ECorp.png')}
                style={{ width: '100%' }}
                resizeMode="contain" 
            />
        </View>

            <Animatable.View delay={1200} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Juntos podemos mudar o mundo</Text>
            
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#000',
        justifyContent: 'center',
        alignItens: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#252526',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingStart: '10%',
        paddingEnd:'10%',
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginTop: 24,
        marginBottom:12,
        textAlign: "center",
        color: '#fff'
    },
    text:{
        color: '#fff',
    },
    button:{
        position: 'absolute',
        borderRadius: 50,
        backgroundColor: '#ffffff',
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize:20,
        color: '#000',
        fontWeight: 'bold'
    }
})