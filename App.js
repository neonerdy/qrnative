import React, {Component} from 'react';

import {Container,Header,Body,Title,Text,Right,Icon, View,Button} from 'native-base';
import Dialog from "react-native-dialog";


import {
  AppRegistry,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  
  Dimensions
} from 'react-native';





import QRCodeScanner from 'react-native-qrcode-scanner';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class QrCode extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      inputDialogVisible : false,
      nopol: ''
    }
  }

  
  onInputDialogClicked = () => {
    this.setState({
      inputDialogVisible : true
    })
  }

 

  submitNoPol = () => {
    

    this.props.navigation.push('ScanInfo', {
      qrcode: this.state.nopol
    });

    
    this.setState({
      inputDialogVisible : false
    })
  } 


  onSuccess = e => {
    
      console.log(e.data);

       this.props.navigation.push('ScanInfo', {
         qrcode: e.data
       });

  };

  render() {
    return (
      <Container> 
        <Header style={{ backgroundColor: 'red' }}>
            <Body>
              <Title>Scan QR Code</Title>
            </Body>
            <Right>
            
            
            <Button transparent onPress={this.onInputDialogClicked}
              >
              <Icon name='ios-keypad' />
            </Button>

          </Right>


        </Header>


        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          
          <View>
            <QRCodeScanner
              onRead={this.onSuccess}
              showMarker={true}
              cameraStyle={{ height: SCREEN_HEIGHT - 100 }}
            />

          </View>
          <View>
          
          {/*}
          <Button title="Input No Pol" onPress={this.onInputDialogClicked}/>
        {*/}

          </View>
        
          <Dialog.Container visible={this.state.inputDialogVisible}>
                    <Dialog.Title>Input No Pol</Dialog.Title>
                    <Dialog.Input style={{borderWidth: 0.5}} autoFocus onChangeText={(nopol) => this.setState({nopol})}></Dialog.Input>
                    <Dialog.Button label="CANCEL" onPress={()=>this.setState({inputDialogVisible: false})} />
                    <Dialog.Button label="OK" onPress={this.submitNoPol} />
                    
            </Dialog.Container>


         {/*}
          <View tyle={styles.bottom}>

              <TextInput
                  style={{ height: 50, borderColor: 'gray', borderWidth: 1, color: 'red', fontSize: 25}}
              
              />

                <Button title="Process Input No Pol"
                />

          </View>

        {*/}


        {/*}
          <View>
            <Text
              style={{
                padding: 10,
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'red',
              }}>
              QR Code Scanner
            </Text>
          </View>
        {*/}
            
        
          </View>
            

          </Container>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('default', () => QrCode);
