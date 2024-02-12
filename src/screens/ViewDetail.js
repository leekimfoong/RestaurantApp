import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ViewDetail = ( { navigation } ) => {
    const id = navigation.getParam('id');
    const [detail, setDetail] = useState(null);

    const getDetail = async(id) => {
        console.log(id);
        const response = await yelp.get(`/${id}`);
        console.log(response);
        setDetail(response.data);
    };

    useEffect(() => {
        getDetail(id);
    }, []);

    if (!detail) {
        return null;
    }

    return (
        <View>
            <Text>{detail.name}</Text>
            <FlatList 
                data={detail.photos} 
                keyExtractor={(item) => item} 
                renderItem={({item}) => {
                    return <Image style={styles.img} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250
    }
});

export default ViewDetail;