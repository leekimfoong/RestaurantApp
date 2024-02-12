import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelpResult from "../hooks/yelpResult";
import SearchResult from "../components/SearchResult";

const SearchScreen = ( ) => {
    const [searchTxt, setSearchTxt] = useState('');
    const [searchApi, results, errMsg] = yelpResult();
    
    const priceList = ( filterPrice ) => {
        return results.filter(
            filterResult => {
                return filterResult.price === filterPrice;
            }
        );
    };

    return (
        <>
            <SearchBar 
                val={searchTxt} 
                onChg={setSearchTxt} 
                onSubmit={() => searchApi(searchTxt)}
            />
            <Text>Your Search: {searchTxt}</Text>
            <Text>{errMsg == '' ? `Result ${results.length}` : `${errMsg}`}</Text>
            <ScrollView>
            <SearchResult categoryName="Cost Effective" categoryList={priceList('$')} />
            <SearchResult categoryName="Bit Pricier" categoryList={priceList('$$')} />
            <SearchResult categoryName="Big Spender" categoryList={priceList('$$$')} />
            <SearchResult categoryName="High Class" categoryList={priceList('$$$$')} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;