import { View, Text, StyleSheet, 
    ImageBackground, TouchableOpacity, 
    ScrollView} from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import TelaLogin from "./TelaLogin";

export default function TelaCadastro({ navigation }){
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [nomeUsuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaNovamente, setSenhaNovamente] = useState('');
    const [senhaOculta] = useState(true);

    const Cadastro = () => {
        console.log('Cadastro Realizado!');
    };

    return(
        <View style={estilos.container}>
        
         <Text style={estilos.cxText}>Cadastrar</Text>   

         <View style={estilos.container2}>
            <TextInput
            label='Nome Completo'
            mode="outlined"
            value={nomeCompleto}
            onChangeText={text => setNomeCompleto(text)}
            style={estilos.cxInput}
            />

            <TextInput
            label='Usuario'
            mode="outlined"
            value={nomeUsuario}
            onChangeText={text => setUsuario(text)}
            style={estilos.cxInput}
            />

            <TextInput
            label='Senha'
            mode="outlined"
            value={senha}
            secureTextEntry={senhaOculta}
            onChangeText={text => setSenha(text)}
            style={estilos.cxInput}
            />

            <TextInput
            label='Repita a senha'
            mode="outlined"
            value={senhaNovamente}
            secureTextEntry={senhaOculta}
            onChangeText={text => setSenhaNovamente(text)}
            style={estilos.cxInput}
            />
          
          <View style={estilos.container3}>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("Tela Login")}
            style={estilos.cxBotao}>
                <Text style={estilos.cxText2}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
          </View>

          <View style={estilos.cxImagem}>
            <ImageBackground source={require('./assets/logo_senai.png')}
                style={{width:'10rem',
                }}  
                 />
          </View>
            
            
         </View>
         
        </View>
    );
}
const estilos= StyleSheet.create({
container:{
    backgroundColor:'#3850D2',
    width: '100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
},
cxText:{
    color:'#FFFFFF',
    fontSize:'250%',
    fontWeight: 700,
    marginTop:-70,
},
cxInput:{
    width: '100%',
    height: '100%',
    marginTop: 15
},
container2:{
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
},
cxBotao:{
    marginTop:40,
    backgroundColor: '#6079FF',
    width: 300,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
},
cxText2:{
    color:'#FFFFFF',
    fontSize:'125%',
    fontWeight: 500
},
cxImagem:{
    width:'20%',
    height:'20%',
    justifyContent:'center',
    alignItems:'center',
    marginEnd: 30
  },
});