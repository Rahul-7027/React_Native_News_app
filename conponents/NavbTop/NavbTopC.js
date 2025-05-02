import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import GeneralData from '../NewsItemData/GeneralData'
import Bussiness from '../NewsItemData/Bussiness'
import MainDataPart from '../NewsItemData/MainDataPart'


const API_Key = "4deb9f466b364a5f91e1a59caf5a8eb5"


const Top = createMaterialTopTabNavigator()

const NavbTopC = () => {
    return (
        <NavigationContainer>
            <Top.Navigator>
                <Top.Screen name='General' component={MainDataPart} initialParams={{ category: 'general', API_Key }} />
                <Top.Screen name='Bussiness' component={MainDataPart} initialParams={{ category: 'business', API_Key }} />
                <Top.Screen name='Entertainment' component={MainDataPart} initialParams={{ category: 'entertainment', API_Key }} />
                {/* <Top.Screen name='Health' component={MainDataPart} initialParams={{ category: 'health', API_Key }} /> */}
                {/* <Top.Screen name='Science' component={MainDataPart} initialParams={{ category: 'science', API_Key }} /> */}
                {/* <Top.Screen name='Sports' component={MainDataPart} initialParams={{ category: 'sports', API_Key }} /> */}
                {/* <Top.Screen name='Technology' component={MainDataPart} initialParams={{ category: 'technology', API_Key }} /> */}
            </Top.Navigator>
        </NavigationContainer>
    )
}

export default NavbTopC
