import { AuthProvider } from '@/Context/AuthContext';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Slot />
    </AuthProvider>
  );
}
