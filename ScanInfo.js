
import React, {useState} from 'react';

import {Button,Container,Header,Body,Title,Text, View, Left,Right,Icon, Content} from 'native-base';
import {TextInput,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';



const ScanInfo = (props) => {

    const [fileData,setFileData] = useState();

    const { navigation } = props;
    
    const qrcode = navigation.getParam('qrcode');

    const scanQrCode = () => {
      
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Main' })],
      });
      props.navigation.dispatch(resetAction);
 
    }

    const launchCamera = () => {
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.launchCamera(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
          const source = { uri: response.uri };
          console.log('response', JSON.stringify(response));
          setFileData(response.data);
          
          
        }
      });
  
    }

    const renderFileData =()=> {

      if (fileData) {
        return <Image source={{ uri: 'data:image/jpeg;base64,' + fileData }}
          style={styles.images}
        />
      } else {
        
        return <Image source={require('./assets/imageicon.png')}
          style={styles.images} 
        />

      }
    }


    return (

    <Container>

        <Header style={{backgroundColor: 'red'}}>
         
          <Left>
            <Button transparent 
               onPress={scanQrCode}>
              <Icon name='arrow-back' />
            </Button>

          </Left>
         
          <Body>
            <Title>Scan Info</Title>
          </Body>

         
          <Right>
            
            <Button transparent onPress={scanQrCode}>
              <Text>Save</Text>
            </Button>

            
            <Button transparent 
               onPress={scanQrCode}>
              <Icon name='camera' />
            </Button>

          </Right>
        </Header>
    
      <Content>
        


          <View style={styles.body}>
            
            <Text style={{textAlign:'center',fontSize:25,paddingBottom:0, color:'blue'}} >        
               {qrcode}
            </Text>
            <Text style={{textAlign:'center',fontSize:25,paddingBottom:30, color: 'black'}} >        
               Honda Brio
            </Text>

            <Text style={{textAlign:'center',fontSize:18,paddingBottom:10, color: 'grey'}} >        
               Input Km
            </Text>
        
          <View style={styles.ImageSections}>
              <View>
              <TextInput
                  style={{ height: 50, width: 80, borderColor: 'gray', borderWidth: 1, fontSize: 20} }
              
              />

              </View>
            </View>



            
            <View style={styles.ImageSections}>
              <View>
                {renderFileData()}
              </View>
            </View>

            <View style={styles.btnParentSection}>

              <TouchableOpacity onPress={launchCamera} style={styles.btnSection}  >
                <Text style={styles.btnText}>Take Picture</Text>
              </TouchableOpacity>

            </View>

          </View>
     
        
        {/*}
        <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
          <Text
                  style={{
                    padding: 10,
                    fontSize: 30,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                      {qrcode}{'\n'}Honda Brio
            </Text>

            <TextInput placeholder="Input Km"
                  style={{ height: 50, borderColor: 'gray', borderWidth: 1, fontSize: 25} }
              
              />
           
         

        </View>
        {*/}         
        

        </Content>


    </Container>
   

  );
};



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
  },

  body: {
    backgroundColor: 'white',
    justifyContent: 'center',
    height: Dimensions.get('screen').height - 100,
    width: Dimensions.get('screen').width
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  images: {
    width: 150,
    height: 150,
    marginHorizontal: 3
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop:10
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold'
  }
});


export default ScanInfo;



