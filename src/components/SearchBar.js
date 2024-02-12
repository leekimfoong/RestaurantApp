import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ( { val, onChg, onSubmit } ) => {
    return (
        <View style={styles.barView}>
            <Feather style={styles.barIcon} name="search" size={24} color="black" />
            <TextInput 
                style={styles.barInput} 
                placeholder="Search" 
                value={val}
                onChangeText={onChg} 
                onEndEditing={onSubmit} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    barView: {
        backgroundColor: `#CCCCCC`,
        height: 50,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row'
    },
    barIcon: {
        fontSize: 35,
        alignSelf: 'center',
        margin: 5
    },
    barInput: {
        flex: 1
    }
});

export default SearchBar;