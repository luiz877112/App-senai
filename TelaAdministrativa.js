import {StyleSheet, View, Text, ImageBackground, ScrollView,TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from 'expo-status-bar';

export default function TelaAdministrativa({ navigation }){
    return(
        <View style={estilos.container}>
            <ScrollView Style={estilos.cxScrollView}>
                <View style={estilos.cxTopo}>

                <View style={estilos.cxBemVindo}>
                    <Text style={{color:'white',
                        fontWeight:20
                    }}>
                        Bem Vindo,
                    </Text>
                    <Text style={{
                        color:'white',
                        fontSize: 25
                    }}>
                       Fulano de Tal!
                    </Text>
                </View>

                <View style={estilos.cxPessoa}>
                <Ionicons
                            name="person"
                            size={40}
                            color="#959595"
                        />
                </View>

            </View>

            <View style={estilos.cxMeio}>
                <View style={estilos.cxReque}>
                    <Text style={{
                        color:'white',
                        fontSize: 20,
                        
                    }}>
                        Requerimentos
                    </Text>
                </View>

                <View style={estilos.cxNotas}>
                    <Text style={{
                        color:'white',
                        fontSize: 20
                    }}>
                        Notas
                    </Text>
                </View>
                
            </View>

            <View style={estilos.cxMeio2}>
                <View style={estilos.cxFrequ}>
                    <Text style={{
                        color:'white',
                        fontSize: 20
                    }}>
                        Frequência
                    </Text>
                </View>
                <View style={estilos.cxAvali}>
                    <Text style={{
                        color:'white',
                        fontSize: 20
                    }}>
                        Avaliações
                    </Text>
                </View>

            </View>

            <View style={estilos.cxMeio3}>
                <View style={estilos.cxFinan}>
                    <Text style={{
                        color:'white',
                        fontSize: 20
                    }}>
                        Financeiro
                    </Text>
                </View>
                <View style={estilos.cxDoc}>
                    <Text style={{
                        color:'white',
                        fontSize: 20
                    }}>
                        Documentos
                    </Text>
                </View>

                
            </View>
            
            <View style={estilos.cxImagem}>
                <ImageBackground source={require('./assets/logo_senai.png')}
                style={{width:'23rem',

                    
                }}  
                 />
                </View>
            
            
            <StatusBar style="auto" />


            

            </ScrollView>
        </View>
    );
}

const estilos = StyleSheet.create({
container:{
    backgroundColor:'#3850D2',
    width:'100%',
    height:'100%',
    flex: 1,
    display:"flex"
},
scrollViewContent: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
},
cxTopo:{
    flexDirection: "row",
    width: "90%",
    marginTop: 60,
    
},
cxBemVindo:{
    marginLeft:400
},
cxPessoa:{
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 100,
    marginRight: 10,
    marginLeft: 390,
    cursor: 'pointer'
},


cxMeio:{
    flexDirection:'row'
},
cxReque:{
    backgroundColor:'#6079FF',
    marginLeft: 400,
    marginTop: 60,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 75,
    height: 200,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
},
cxNotas:{
    backgroundColor:'#6079FF',
    marginLeft: 30,
    marginTop: 60,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 115,
    height: 200,
    textAlignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
},


cxMeio2:{
    flexDirection:'row'
},

cxFrequ:{
    backgroundColor:'#6079FF',
    marginLeft: 400,
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 90,
    height: 200,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
},
cxAvali:{
    backgroundColor:'#6079FF',
    marginLeft: 30,
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 100,
    height: 200,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
},

cxMeio3:{
    flexDirection:'row'
},
cxFinan:{
    backgroundColor:'#6079FF',
    marginLeft: 400,
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 90,
    height: 200,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
},
cxDoc:{
    backgroundColor:'#6079FF',
    marginLeft: 30,
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 90,
    height: 200,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
},


cxImagem:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    marginTop: -250,
    marginLeft: 500
  },

});