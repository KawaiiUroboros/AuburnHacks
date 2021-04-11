import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { CardItemT } from "../types";
import styles, {
  DISLIKE_ACTIONS,
  FLASH_ACTIONS,
  LIKE_ACTIONS,
  STAR_ACTIONS,
  WHITE,
} from "../assets/styles";

const CardItem = ({
  description,
 
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  name,
  activity,
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = [
    {
      borderRadius: 8,
      width: hasVariant ? fullWidth / 2 - 20 : fullWidth - 50,
      height: hasVariant ? 170 : 450,
      marginBottom:-20,
      marginRight: 20,
      marginTop:10 
    },
  ];const imageStyle2 = [
    {
      borderRadius: 30,
      width:  70,
      height: 70,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      paddingBottom: hasVariant ? 5 : 7,
      color: WHITE, 
      fontSize: hasVariant ? 10 : 15,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      
     {activity&& (<Image  source={activity} style={imageStyle} />)}

     

      {/* NAME */}
     

     

      {/* STATUS */}
      {!description && (
        <View style={styles.status}>
          <View style={isOnline ? styles.online : styles.offline} />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      )}
 {/* MATCHES */}

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>
         
          <TouchableOpacity style={styles.button}>
          <Image source={image} style={imageStyle2} />
          </TouchableOpacity>

          <TouchableOpacity >
          {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
             {/* DESCRIPTION */}
             <Text style={nameStyle}>{name + " "}</Text>
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

          </Text>
        </View>
      )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
