import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react';
import {
  ScrollView,
} from "react-native";
import ClosedTicket from "../components/ClosedTicket";
import Header from "../components/Header";
import OpenTicket from "../components/OpenTicket";
import ScreenView from "../components/ScreenView";
import TicketInfoCard from "../components/TicketInfoCard";
import { useTicket } from "../hooks/useTicket";
import { styles } from "../styles/TicketDetails";
import { TicketStatus } from "../types/Ticket";

export default function TicketDetails() {
  const { id } = useRoute().params as { id: string };
  const navigation = useNavigation();

  const ticket = useTicket((state) => state.getTicketById(id));

  if (!ticket) return null;

  const isClosed = ticket.status !== TicketStatus.OPEN;

  return (
    <ScreenView>
      <Header showBackButton={true} onBackPress={() => navigation.goBack()} title="Detalhes do Ticket" />
      <ScrollView contentContainerStyle={styles.container}>
        <TicketInfoCard ticket={ticket} />

        {!isClosed ? (
          <OpenTicket ticket={ticket} />
        ) : (
          <ClosedTicket ticket={ticket} />
        )}
      </ScrollView>
    </ScreenView>
  );
}