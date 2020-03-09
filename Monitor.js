
import React, {useState,useEffect} from 'react';


import {Container,Header,Body,Title,Text, View,
    List,ListItem,Right,Badge, Left, Icon,Content,Button} from 'native-base';

//import {Button} from 'react-native';


import { StackActions, NavigationActions } from 'react-navigation';
import Search from 'react-native-search-box';


const Monitor = (props) => {

    const [cars, setCars] = useState(
        [
             {id:1, carNumber: 'E1123BQ', carName: 'Honda Brio', status: 'Service',km: '200 km'},
             {id:2, carNumber: 'B3901AN', carName: 'Mazda 2', status: 'Rent', km: '1200 km'}
        ]
    );

    const [filteredCars, setFilteredCars] = useState([]);
    const [search,setSearch] = useState('');


    useEffect(()=> {
        setFilteredCars(cars);
    },[])



    const filterCar = (e) => {

        let filtered = cars.filter(c => c.carNumber.toLowerCase()
            .includes(e.toLowerCase())
            || c.carName.toLocaleLowerCase().includes(e.toLowerCase()) 
            || c.status.toLocaleLowerCase().includes(e.toLowerCase())
        );

        if (e == '') {
            setFilteredCars(cars);
        } else {
            setFilteredCars(filtered);
        }
    }

    


    const renderStatus = (status) => {
    
        if (status == "Rent") {
            return(
                <Badge success>
                    <Text>{status}</Text>
                </Badge>
            )
        } else if (status == 'Service') {
            return(
                <Badge danger>
                    <Text>{status}</Text>
                </Badge>
            )
        }
    }




    return (

    <Container>

      <Header style={{ backgroundColor: 'red' }}>
        <Body>
            <Title>Monitor</Title>
        </Body>

      </Header>

    <Content>

    <Search 
        backgroundColor="purple"
        onChangeText={(search)=>filterCar(search)}
        
          /**
          * There many props that can customizable
          * Please scroll down to Props section
          */
        />

    <List>

        {filteredCars.map(c=> 
        
        <ListItem key={c.id}

        >
            <Body>
            <Text>{c.carNumber}</Text>
            <Text note>{c.carName}</Text>

            {renderStatus(c.status)}
            
            </Body>
  
            <Right>
              <Text note>{c.km}</Text>
            </Right>
            
        </ListItem>

  
)}





</List>



    </Content>


    </Container>
   

  );
};

export default Monitor;

