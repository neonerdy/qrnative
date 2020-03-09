import React from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
  BackHandler,
  Image
} from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon } from "native-base";
import styles from './Styles/LoginStyle';
import Metrics from './Styles/Metrics';

import LinearGradient from "react-native-linear-gradient";


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  /*
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }
  

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("FirstScreen");
    return true;
  };

  */

  render() {
 
    /*
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#fa6982", true);
      StatusBar.setTranslucent(true);
    }
    */

    return (
      <View style={styles.mainview}>
        <Container>
          <StatusBar barStyle="light-content" />

          <Header style={styles.headerBgSec}>
            <Left style={styles.leftAndRight}>
          
            </Left>
            
          
          
            <Right style={styles.leftAndRight} />
          
          </Header>


          <View style={styles.borderhorizontal} />

          <ScrollView>
            <View style={styles.mainrenderview}>

            <View style={{alignSelf: 'center'}}>
             

               <Image source={require('./assets/mpmrent.png')}
                         
                   />
                </View> 

              <View style={styles.emailpswdmainview}>
                <TextInput
                  ref="Name"
                  style={styles.textInput}
                  placeholder="E-Mail"
                  keyboardType="default"
                  returnKeyType="next"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#929292"
                  selectionColor="#929292"
                  onSubmitEditing={event => {
                    this.refs.password.focus();
                  }}
                  returnKeyType="next"
                />

                <View style={styles.border} />
                <View style={styles.passwordmainbg}>
                  <TextInput
                    ref="password"
                    style={styles.textInput}
                    placeholder="Password"
                    keyboardType="default"
                    returnKeyType="done"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#929292"
                    selectionColor="#929292"
                    returnKeyType="done"
                  />

                  <View style={styles.border} />
                </View>

            
               <TouchableOpacity
                  style={styles.Mainviewbtn}
                  onPress={() => this.props.navigation.navigate("Main")}
                >
                  <LinearGradient
                    locations={[0.1, 0.75]}
                    colors={["#f87363", "#fa6a80"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.LinearGradientmainview}
                  >
                    <Text style={styles.Logintext}>Log In</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
           
          </ScrollView>
        </Container>
      </View>
    );
  }
}
