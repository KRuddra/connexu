import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Image, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/mainlogo.png')} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>CONNEXU</Text>
      <View style={styles.bottomSection}>
        <Text style={styles.subtitle}>SIGN UP</Text>
        <TextInput style={styles.input} placeholder="School email" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry placeholderTextColor="#ccc" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Already have an account? <Text style={styles.linkText}>
            <Link href="/auth/sign-in">Sign In</Link>
            </Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1f28',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#112531',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  subtitle: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#376980',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    color: '#ccc',
    marginTop: 10,
  },
  linkText: {
    color: '#4aa8d8',
    fontWeight: 'bold',
  },
});