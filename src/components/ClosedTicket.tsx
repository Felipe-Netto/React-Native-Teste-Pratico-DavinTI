import { Text, View } from "react-native";
import { styles } from "../styles/TicketDetails";
import { Ticket } from "../types/Ticket";

export default function ClosedTicket({ ticket }: { ticket: Ticket }) {

    return (
        <View style={styles.closedCard}>
            <Text style={styles.sectionTitle}>Dados do Encerramento</Text>
            <Text style={styles.label}>DESCRIÇÃO</Text>
            <Text style={styles.details}>{ticket.closingDescription}</Text>
            <Text style={styles.label}>FINALIZADO EM</Text>
            <Text style={styles.info}>
                {ticket.closingDate ? new Date(ticket.closingDate).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) : '-'}
            </Text>
        </View>
    )
}