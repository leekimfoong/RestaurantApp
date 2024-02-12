import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const SearchResult = ( { categoryName, categoryList, navigation } ) => {
    if (!categoryList.length) {
        return null;
    }

    return(
        <View>
            <Text style={styles.title}>{categoryName}</Text>
            <FlatList 
                horizontal 
                showsHorizontalScrollIndicator={false}
                data={categoryList} 
                keyExtractor={(categoryList) => categoryList.id} 
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Dtl', {id: item.id})} >
                            <ResultDetail detail={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default withNavigation(SearchResult);