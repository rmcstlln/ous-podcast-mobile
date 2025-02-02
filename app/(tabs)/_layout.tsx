import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white', 
        tabBarInactiveTintColor: 'white', 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: {
            backgroundColor: '#280000', 
            borderTopWidth: 0, 
            elevation: 0, 
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', opacity: focused ? 1 : 0.3 }}>
              <IconSymbol size={24} name="house.fill" color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', opacity: focused ? 1 : 0.3 }}>
              <IconSymbol size={24} name="house.fill" color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', opacity: focused ? 1 : 0.3 }}>
              <IconSymbol size={24} name="house.fill" color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', opacity: focused ? 1 : 0.3 }}>
              <IconSymbol size={24} name="house.fill" color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', opacity: focused ? 1 : 0.3 }}>
              <IconSymbol size={24} name="house.fill" color="white" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
