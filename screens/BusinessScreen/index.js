import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';

import Schedules from './Schedules';

const TopTab = createMaterialTopTabNavigator();

function BusinessDrawer () {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Schedules" component={Schedules} />
        </TopTab.Navigator>
    );
}

export default BusinessDrawer;