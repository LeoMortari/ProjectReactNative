import {
  Container,
  CustomButton,
  HeaderContent,
  OrderContent,
  ProductName,
} from "./styles";
import { order } from "../../order";
import { useState } from "react";
import { Text, FlatList, View } from "react-native";

const INFO = {
  0: "você precisa selecionar qual encomenda deseja rastrear",
  1: "Este é todo o rastreio de sua encomenda:",
};

export default function Header({ ...props }) {
  const { user, setEncomenda } = props;
  const [informative, setInformative] = useState(0);
  const [tracker, setTracker] = useState([]);

  const handlePress = (item) => {
    setEncomenda(item);
    setInformative(1);
    setTracker(item);
  };

  return (
    <Container>
      <HeaderContent>Positivo Track Order</HeaderContent>
      <OrderContent>
        {user}, {INFO[0]}
      </OrderContent>
      <FlatList
        data={order}
        renderItem={({ item }) => {
          return (
            <OrderContent>
              <CustomButton onPress={() => handlePress(item)}>
                <Text>{item.customName}</Text>
              </CustomButton>
            </OrderContent>
          );
        }}
      />

      {informative !== 0 && tracker ? (
        <View>
          <OrderContent>{INFO[1]}</OrderContent>
          <ProductName>{tracker.customName}</ProductName>
        </View>
      ) : null}
    </Container>
  );
}
