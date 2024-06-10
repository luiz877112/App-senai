import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TelaLogin from "./TelaLogin";
import TelaAdministrativa from "./TelaAdministrativa";
import TelaCadastro from "./TelaCadastro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Tela Login">
      <Stack.Screen name="Tela Login" component={TelaLogin} options={{headerShown:false}}/>
      <Stack.Screen name="Tela Administrativa" component={TelaAdministrativa} options={{headerShown:false}}/>
      <Stack.Screen name="Tela Cadastro" component={TelaCadastro} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  ); 
}
