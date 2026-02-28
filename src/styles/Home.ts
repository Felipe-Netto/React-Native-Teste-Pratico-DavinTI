import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleSection: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    mainTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    ticketCount: {
      fontSize: 14,
      color: '#999',
      marginBottom: 4,
    },
    listContent: {
      paddingBottom: 30,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40,
      marginTop: 50,
    },
    iconCircle: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    emptyTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#666',
      marginBottom: 8,
    },
    emptySubtitle: {
      fontSize: 14,
      color: '#999',
      textAlign: 'center',
      lineHeight: 20,
    },
  });