import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backContainer:{
        backgroundColor: '#132d46',
        height: "100%",
    },
    container:{
        flex:1,
        backgroundColor: '#fff',
        width: "100%",
        height: "80%",
        borderRadius: 50,
        //borderTopRightRadius: 50,

        top: 100,
    },
    border:{
        width: "85%",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: '#132d46',
        backgroundColor: '#fff',
        top: 50,
        left: 30
    },
    backTitle:{
        width: "65%",
        height: "10%",
        backgroundColor: '#fff',
        top: -16,
        left: 60
    },
    title:{
        top: 5,
        left: 30,
        letterSpacing: 3,
    },
    input:{
        backgroundColor: '#B1BACC',
        borderRadius: 20,
        width: "80%",
        padding: 8,
        paddingLeft:16,
        top:0,
        left: 30,
        marginBottom:24
    },
    icon:{
        top: -60,
        left: 270,
    },
    btnGroupSC:{
        width: "100%",
        top: 160,
        left:32
    },
    btnCancelar:{
        backgroundColor: '#B1BACC',
        borderRadius: 50,
        width: "30%",
        top: -38,
        left: 220
    },
    textCancelar:{
        padding: 8,
        paddingLeft: 30
    },
    btnSalvar:{
        backgroundColor: '#132d46',
        borderRadius: 50,
        width: "30%",
    },
    textSalvar:{
        color:"#fff",
        padding: 8,
        paddingLeft: 40
    },
    mensagem:{
        color: '#132d46',
        top: -20
    },
    modalView: {
        margin: 20,
        top: 300,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        width: '100%',
        padding: 10,
        marginTop: 10,
        elevation: 2,
        backgroundColor: "#132d46",
        alignItems: 'center'
      },
      btnText:{
        color: "#fff",
        
      }
});

export default styles