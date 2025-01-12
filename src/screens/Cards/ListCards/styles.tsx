import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f8f8",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: "#333",
    },
    errorText: {
        fontSize: 16,
        color: "red",
        textAlign: "center",
    },
    cardContainer: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    cardNumber: {
        fontSize: 16,
        color: "#777",
        marginTop: 5,
    },
    expirationDate: {
        fontSize: 14,
        color: "#aaa",
        marginTop: 10,
    },
    cardButton: {
        marginTop: 15,
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    cardButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;