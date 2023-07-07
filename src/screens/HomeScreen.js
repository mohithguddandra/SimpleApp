import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/actions";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "reactstrap";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  const handleItemPress = (item) => {
    navigation.navigate("Details", { item });
  };

  const cards = items.map((item) => (
    <Col xs={8} md={3}>
      <Card
        className="card border-primary align-items-stretch d-flex mb-3 h-80"
        style={{ width: "10rem" }}
      >
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.id}</Card.Title>
          <Card.Text>
            <b>{item.title}</b>
          </Card.Text>
          <Button
            variant="primary"
            onPress={() => handleItemPress(item)}
            title="Details"
          />
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <View>
      {/* {items.map((item) => (
        <Button
          key={item.id}
          title={item.title}
          onPress={() => handleItemPress(item)}
        />
      ))} */}
      <div>
        <Container>
          <Row className="show-grid">{cards}</Row>
        </Container>
      </div>
    </View>
  );
};

export default HomeScreen;
