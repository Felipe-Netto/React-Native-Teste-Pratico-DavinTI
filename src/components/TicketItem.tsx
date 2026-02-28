import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getStatusDetails } from "../hooks/useTicket";
import { styles } from "../styles/TicketItem";
import { Ticket } from "../types/Ticket";

interface TicketItemProps {
    ticket: Ticket;
    onPress: (id: string) => void;
}

export default function TicketItem({ ticket, onPress }: TicketItemProps) {
    const statusConfig = getStatusDetails(ticket.status);

    const dateFormatted = new Date(ticket.openingDate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => onPress(ticket.id)}
            activeOpacity={0.7}
        >
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title} numberOfLines={1}>{ticket.title}</Text>
                    <View style={[styles.statusBadge, { backgroundColor: statusConfig.bg }]}>
                        <Ionicons name={statusConfig.icon} size={14} color={statusConfig.color} />
                        <Text style={[styles.statusText, { color: statusConfig.color }]}>
                            {ticket.status}
                        </Text>
                    </View>
                </View>

                <Text style={styles.details} numberOfLines={2}>
                    {ticket.details}
                </Text>

                <View style={styles.footer}>
                    <View style={styles.infoRow}>
                        <Ionicons name="calendar-outline" size={14} color="#999" />
                        <Text style={styles.dateText}>{dateFormatted}</Text>
                    </View>

                    <Ionicons name="chevron-forward" size={18} color="#CCC" />
                </View>
            </View>
        </TouchableOpacity>
    );
}