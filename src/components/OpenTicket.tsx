import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Toast from "react-native-toast-message";
import { useTicket } from "../hooks/useTicket";
import { styles } from "../styles/TicketDetails";
import { Ticket, TicketStatus } from "../types/Ticket";

export default function OpenTicket({ ticket }: { ticket: Ticket }) {
    const navigation = useNavigation();
    const updateTicket = useTicket((state) => state.updateTicket);

    const [description, setDescription] = useState('');
    const [value, setValue] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    const handleFinishTicket = () => {
        if (!value || !description.trim()) {
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Selecione um status e descreva o encerramento.',
            });
            return;
        }

        updateTicket({
            ...ticket,
            status: value as TicketStatus,
            closingDescription: description,
            closingDate: new Date(),
        });

        Toast.show({
            type: 'success',
            text1: 'Sucesso!',
            text2: 'Ticket encerrado com sucesso.',
        });

        navigation.goBack();
    };

    const data = [
        { label: 'Encerrado', value: TicketStatus.CLOSED, color: '#4CAF50' },
        { label: 'Improcedente', value: TicketStatus.UNFOUNDED, color: '#FF9800' },
        { label: 'Cancelado', value: TicketStatus.CANCELED, color: '#F44336' },
    ];
    return (
        <View style={styles.formCard}>
            <Text style={styles.sectionTitle}>Encerrar Ticket</Text>

            <Text style={styles.label}>STATUS DO ENCERRAMENTO</Text>

            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#6200ee' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Selecione o status' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />

            <Text style={styles.label}>DESCRIÇÃO DA SOLUÇÃO</Text>
            <TextInput
                style={styles.textArea}
                placeholder="Descreva o que foi feito..."
                multiline
                value={description}
                onChangeText={setDescription}
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleFinishTicket}>
                <Text style={styles.saveButtonText}>Confirmar Encerramento</Text>
            </TouchableOpacity>
        </View>
    )
}