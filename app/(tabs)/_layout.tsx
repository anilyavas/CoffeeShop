import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.brown,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000' },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name='home'
              color={focused ? Colors.brown : Colors.grey}
            />
          ),
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='info-circle'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name='shopping-bag'
              color={focused ? Colors.brown : Colors.grey}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='favorites'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name='heart'
              color={focused ? Colors.brown : Colors.grey}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name='bell'
              color={focused ? Colors.brown : Colors.grey}
            />
          ),
        }}
      />
    </Tabs>
  );
}
