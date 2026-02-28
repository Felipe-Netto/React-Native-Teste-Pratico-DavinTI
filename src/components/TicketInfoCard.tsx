import { Text, View } from "react-native";
import { getStatusDetails } from "../hooks/useTicket";
import { styles } from "../styles/TicketDetails";
import { Ticket, TicketStatus } from "../types/Ticket";

export default function TicketInfoCard({ ticket }: { ticket: Ticket }) {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>TÍTULO</Text>
            <Text style={styles.title}>{ticket.title}</Text>

            <Text style={styles.label}>DETALHES</Text>
            <Text style={styles.details}>{ticket.details}</Text>

            <View style={styles.row}>
                <View>
                    <Text style={styles.label}>ABERTO EM</Text>
                    <Text style={styles.info}>{new Date(ticket.openingDate).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })}</Text>
                </View>
                <View>
                    <Text style={styles.label}>STATUS ATUAL</Text>
                    <Text style={[styles.info, { color: getStatusDetails(ticket.status as TicketStatus).color }]}>
                        {ticket.status}
                    </Text>
                </View>
            </View>
        </View>
    )
}