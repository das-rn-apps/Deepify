import { Color } from '@/Constants/Color';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  const screens = [
    { name: 'home', icon: 'home' as const, title: 'Home' },
    { name: 'find', icon: 'search' as const, title: 'Find' },
    { name: 'library', icon: 'library' as const, title: 'Library' },
    { name: 'profile', icon: 'people' as const, title: 'Profile' },
  ];

  return (
    <LinearGradient
      colors={Color.gradients.background2}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { position: Platform.OS === 'ios' ? 'absolute' : 'relative' },
          tabBarActiveBackgroundColor: Color.background.dark,
          tabBarInactiveBackgroundColor: Color.background.dark,
        }}
      >
        {screens.map(({ name, icon, title }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title,
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: Color.buttons.disabled,
              tabBarIcon: ({ focused }) => (
                <Ionicons size={28} name={icon} color={focused ? Color.borders.active : Color.buttons.disabled} />
              ),
            }}
          />
        ))}
      </Tabs>
    </LinearGradient>
  );
}
