import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Autocomplete from './Autocomplete';
import SearchMap from './SearchMap';

const Stack = createStackNavigator();

function SearchStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Autocomplete" component={Autocomplete} />
            <Stack.Screen name="Maps" component={SearchMap} />
        </Stack.Navigator>
    );
}

export default SearchStack;