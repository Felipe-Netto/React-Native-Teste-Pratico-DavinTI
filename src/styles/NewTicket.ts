import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 40,
    },
    titlePage: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 24,
    },
    formGroup: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      color: '#666',
      marginBottom: 8,
    },
    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 8,
      padding: 14,
      fontSize: 16,
      color: '#333',
    },
    textArea: {
      height: 120,
      textAlignVertical: 'top',
    },
    dateSelector: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 8,
      padding: 14,
      justifyContent: 'center',
    },
    dateText: {
      fontSize: 16,
      color: '#333',
    },
    button: {
      backgroundColor: '#6200ee',
      paddingVertical: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 12,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });