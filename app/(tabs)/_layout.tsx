import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Tabs, Redirect } from 'expo-router';

import { icons } from '@/constants';

const TabIcon = ({
	icon,
	color,
	focused,
	name,
}: {
	icon: ImageSourcePropType;
	color: string;
	focused: any;
	name: string;
}) => {
	return (
		<View className='items-center justify-center gap-1 w-40 flex-1'>
			<Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6' />
			<Text
				className={`text-xs ${focused ? 'font-psemibold' : 'font-pregular text-xs'}`}
				style={{ color }}
			>
				{name}
			</Text>
		</View>
	);
};

export default function Tablayout() {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: '#FFA001',
					tabBarInactiveTintColor: '#CDCDE0',
					tabBarStyle: {
						backgroundColor: '#161622',
						borderTopWidth: 1,
						borderTopColor: '#232533',
						height: 80,
						paddingBottom: 10,
						paddingTop: 10,
					},
				}}
			>
				<Tabs.Screen
					name='home'
					options={{
						title: 'Home',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon icon={icons.home} color={color} name='Home' focused={focused} />
						),
					}}
				></Tabs.Screen>
				<Tabs.Screen
					name='bookmark'
					options={{
						title: 'Bookmark',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon icon={icons.bookmark} color={color} name='Bookmark' focused={focused} />
						),
					}}
				></Tabs.Screen>
				<Tabs.Screen
					name='create'
					options={{
						title: 'Create',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon icon={icons.plus} color={color} name='Create' focused={focused} />
						),
					}}
				></Tabs.Screen>
				<Tabs.Screen
					name='profile'
					options={{
						title: 'Profile',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon icon={icons.profile} color={color} name='Profile' focused={focused} />
						),
					}}
				></Tabs.Screen>
			</Tabs>
		</>
	);
}
