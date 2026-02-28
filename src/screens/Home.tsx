import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, Text, View } from "react-native";
import EmptyList from "../components/EmptyList";
import Header from "../components/Header";
import ScreenView from "../components/ScreenView";
import TicketItem from "../components/TicketItem";
import { useTicket } from "../hooks/useTicket";
import { styles } from "../styles/Home";
import { RootStackParamList } from "../types/Navigation";

export default function Home() {
  const tickets = useTicket((state) => state.tickets);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenView>
      <Header />

      <View style={styles.titleSection}>
        <Text style={styles.mainTitle}>Meus Tickets</Text>
        <Text style={styles.ticketCount}>
          {tickets.length} {tickets.length === 1 ? 'registro' : 'registros'}
        </Text>
      </View>

      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TicketItem
            ticket={item}
            onPress={(id) => {
              navigation.navigate('TicketDetails', { id });
            }}
          />
        )}
        contentContainerStyle={[
          styles.listContent,
          tickets.length === 0 && { flex: 1 }
        ]}
        ListEmptyComponent={<EmptyList />}
        showsVerticalScrollIndicator={false}
      />
    </ScreenView>
  );
}