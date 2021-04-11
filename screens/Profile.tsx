import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";

const Profile = () => {
 const [balance,setBalance] = useState(0);
 const [cycles,setCycles] = useState(0);
 const [nameS,setName] = useState("");
 const [cardStatus,setcardStatus] = useState("");
  const getDataUsingGet = () => {
    //GET request
    fetch("https://na.developers.tsys.com/sandbox/issuing/business/account/card-4000000000002062/realtime", {
      method: 'GET',
      headers:{"Authorization": "Bearer viPC7H7nJ1vthf2cgfGWwgR/qsCnW3U0i1N2ICKjPFJyayqxXSmLPvdmyDhNh4BU"}
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        setBalance(responseJson.balance.available.amount.value);
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
   
        console.error(error);
      });
  };
  const getDataUsingGet2 = () => {
    //GET request
    fetch("https://na.developers.tsys.com/sandbox/issuing/digital/account/00000023879/customer/000006629/detail", {
      method: 'GET',
      headers:{"Authorization": "Bearer viPC7H7nJ1vthf2cgfGWwgR/qsCnW3U0i1N2ICKjPFJyayqxXSmLPvdmyDhNh4BU"}
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        
        setCycles(responseJson.cycleDates.length);
        setName(responseJson.customer.firstName+" "+responseJson.customer.lastName)
        setcardStatus(responseJson.customer.cardControlStatus)
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  };
getDataUsingGet();
getDataUsingGet2();
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name,
  } = DEMO[0];

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          
          <View style={styles.top}>
            <TouchableOpacity>
              <Icon
                name="chevron-back"
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.actionsProfile}>
       
          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="card" size={15} color={WHITE} />
            <Text style={styles.textButton}>{"\n"+balance.toString()+" $\n is real balance"}</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>

        <ProfileItem
          matches={"\n"+(balance*(1/cycles)).toFixed().toString()+" $"}
          name={nameS}
          age={"19 years"}
          location={"Moscow"}
          info1={"Card status is "+cardStatus}
          info2={info2}
          info3={info3}
          info4={info4}
        />

       
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
