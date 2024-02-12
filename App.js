import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ViewDetail from './src/screens/ViewDetail';

const myApp = createStackNavigator(
    {
        Search: SearchScreen,
        Dtl: ViewDetail
    }, {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search'
        }
    }
);

export default createAppContainer(myApp);