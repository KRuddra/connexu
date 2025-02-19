import { StyleSheet, Image, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Link, Stack } from 'expo-router';

export default function SignIn() {
  
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/mainlogo.png')} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>LOG IN</Text>
        
        <TextInput
          style={styles.input}
          placeholder="School email"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        
        <Text style={styles.forgotPassword}><Link href="/auth/forgotpass">Forgot password?</Link></Text>
        
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        
        
        <Text style={styles.signupText}>Don’t have an account? <Text style={styles.signupLink}>
            <Link href="/auth/sign-up">Sign Up</Link>
        </Text></Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1f28',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: '#b0c4de',
    fontWeight: 'bold',
  },
  loginContainer: {
    backgroundColor: '#112531',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#1c3d50',
    padding: 15,
    borderRadius: 5,
    color: 'white',
    marginBottom: 15,
  },
  forgotPassword: {
    color: '#b0c4de',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#376980',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    color: '#b0c4de',
  },
  signupLink: {
    color: '#69a1d1',
    fontWeight: 'bold',
  },
});
