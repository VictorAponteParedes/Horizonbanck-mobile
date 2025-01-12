import { useState, useEffect } from "react";
import CardService from "../services/cards";
import { Card } from "../@types";

const useGetCards = () => {
    const { getAllCards } = CardService;
    const [getUsersCards, setGetUsersCards] = useState<Card[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await getAllCards();
            setGetUsersCards(response.data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { getUsersCards, loading, error };
};

export default useGetCards;
