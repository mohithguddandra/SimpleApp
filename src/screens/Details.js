import React from "react";
import { View, Text } from "react-native";

const Details = ({ navigation }) => {
  const { title, id, description, price } = navigation.state.params.item;

  return (
    <View>
      <h1>
        <b>ID:</b> {id}
      </h1>
      <h1>
        <b>title:</b>
        {title}
      </h1>
      <h2>
        <b>DESCRIPTION:</b> {description}
      </h2>
      <h3>PRICE: {price}</h3>
    </View>
  );
};

export default Details;
