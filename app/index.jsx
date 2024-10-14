import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font-pblack">Home</Text>
            <Link href="/profile" style={{ color: 'blue' }}>Go to profile</Link>
        </View>
    );
}