import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import useGetCards from "../../../hooks/useGetCards";
import styles from "./styles";
import CustomLayout from "../../../components/modals/CustomLayout";
import { netNetWorkError } from "../../../assets";
import { colors } from "../../../assets/theme";

const ListCards = () => {
    const { getUsersCards, loading, error } = useGetCards();
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
      if (loading || error) {
        setModalVisible(true);
      }
    }, [loading, error]);

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Cargando tarjetas...</Text>
        </View>
      );
    }

    if (error) {
        return (
            <CustomLayout
                title={"Error"}
                colorTitle={colors.red[500]}
                subTitle={"Lo sentimos, intente más tarde"}
                colorSubTitle={colors.red[500]}
                logo={netNetWorkError}
                visible={modalVisible}
                onClose={toggleModal}
                onAccept={() => {
                    setModalVisible(false);
                }}
                tintColor={colors.red[500]}
                borderColor={colors.red[500]}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de tarjetas</Text>
            <FlatList
                data={getUsersCards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardTitle}>{item.cardHolderName}</Text>
                        <Text style={styles.cardNumber}>************ {item.cardNumber.slice(-4)}</Text>
                        <Text style={styles.expirationDate}>Válida hasta: {item.expirationDate}</Text>
                        <TouchableOpacity
                            style={styles.cardButton}
                            onPress={() => alert(`Ver detalles de ${item.cardHolderName}`)}
                        >
                            <Text style={styles.cardButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default ListCards;
