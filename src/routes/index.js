import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Saque from '../pages/Saque'
import Deposito from '../pages/Deposito'
import Tranferencia from '../pages/Transferencia'
import Relatorio from '../pages/Relatorio'
import Saldo from '../pages/Saldo'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Saque"
            component={Saque}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Deposito"
            component={Deposito}
            options={{headerShown: false}}
            /> 

            <Stack.Screen
            name="Tranferencia"
            component={Tranferencia}
            options={{headerShown: false}}
            /> 

            <Stack.Screen
            name="Relatorio"
            component={Relatorio}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Saldo"
            component={Saldo}
            options={{headerShown: false}}
            />  
        </Stack.Navigator>
    )
}