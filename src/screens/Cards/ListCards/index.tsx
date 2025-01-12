import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import useGetCards from "../../../hooks/useGetCards";
import styles from "./styles";

const ListCards = () => {
    const { getUsersCards, loading, error } = useGetCards();

    // Usamos un useEffect para hacer log de las tarjetas cuando están disponibles
    useEffect(() => {
        if (!loading) {
            console.log("todas las tarjetas:", getUsersCards);
        }
    }, [getUsersCards, loading]);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Cargando tarjetas...</Text>
            </View>
        );
    }

    if (error) {
        return <Text style={styles.errorText}>Error: {error}</Text>;
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
                        <TouchableOpacity style={styles.cardButton} onPress={() => alert(`Ver detalles de ${item.cardHolderName}`)}>
                            <Text style={styles.cardButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};



export default ListCards;
