import { StyleSheet, Image, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function TabTwoScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/mainlogo.png')} 
          style={styles.image}
          resizeMode="cover"
        />

        </View>
        <ThemedText style={{ textAlign: 'center', marginTop: 16, padding: 32, fontSize: 48, fontFamily: 'Roboto Slab'}}>
          Welcome To 
        </ThemedText>
        <ThemedText style={{ textAlign: 'center', color: '#376980', fontSize: 48, marginTop: -16, padding: 32, fontFamily: 'Roboto Slab'}}>CONNEXU</ThemedText>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ensures it takes up the full screen
    backgroundColor: '#0b1f28',
  },
  bottomSection: {
    flex: 0.6, // Adjust height ratio
    backgroundColor: '#112531', // Darker bottom half
    alignItems: 'center',
    paddingTop: 20,
  },
  imageContainer: {
    width: 250,
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

