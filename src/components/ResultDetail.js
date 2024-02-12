import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ( { detail } ) => {
    return (
        <View style={{marginLeft:10, marginBottom:10}}>
            <Image style={styles.img} source={{ uri: detail.image_url }} />
            <Text style={styles.title}>{detail.name}</Text>
            <Text>{detail.rating} Stars, {detail.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    title: {
        fontWeight: 'bold'
    }
});

export default ResultDetail;