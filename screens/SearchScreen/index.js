import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Autocomplete from './Autocomplete';
import SearchMap from './SearchMap';

const Stack = createStackNavigator();

function SearchStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Autocomplete" component={Autocomplete} options={{
                header: () => null,
            }} />
            <Stack.Screen name="Maps" component={SearchMap} options={{
            }} />
        </Stack.Navigator>
    );
}

export default SearchStack;