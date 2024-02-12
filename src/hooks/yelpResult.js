import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async(searchTerm) => {
        console.log('searching' + searchTerm);
        try {
            setErrMsg('');
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'selangor'
                }
            });
            //console.log(response);
            setResults(response.data.businesses);
        } catch(err) {
            console.log(err);
            setErrMsg('Sth wrong');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errMsg];
};