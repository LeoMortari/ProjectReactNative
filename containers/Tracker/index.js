import dayjs from "dayjs";
import { FlatList, View, Text } from "react-native";
import { Container, ProductDetails, ProductView } from "./styles";
import { Feather } from "@expo/vector-icons";

export default function Tracker({ ...props }) {
  const { encomenda } = props;

  return encomenda.number ? (
    <Container>
      <FlatList
        data={encomenda.events}
        renderItem={({ item }) => {
          const date = dayjs(item.date);

          return (
            <ProductView>
              <ProductDetails>{item.type}</ProductDetails>
              <ProductDetails>
                <Feather name="calendar" size={30} /> No dia{" "}
                {date.format("DD/MM/YYYY")} ás {date.format("HH:mm")}{" "}
              </ProductDetails>
            </ProductView>
          );
        }}
      />
    </Container>
  ) : (
    <View>
      <Text>Selecione uma encomenda</Text>
    </View>
  );
}
