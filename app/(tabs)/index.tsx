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
            // source={require('./image.png')} // Local image
            source={{ uri: 'https://assets.api.uizard.io/api/cdn/stream/0ac8934d-2065-4571-9d0f-16c76e890936.png' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <ThemedText style={{ textAlign: 'center', marginTop: 16, padding: 32, fontSize: 48 }}>
          Welcome To 
        </ThemedText>
        <ThemedText style={{ textAlign: 'center', color: '#376980', fontSize: 48, marginTop: -16, padding: 32}}>CONNEXU</ThemedText>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0b1f28',
  },
  imageContainer: {
    width: 269,
    height: 255,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
