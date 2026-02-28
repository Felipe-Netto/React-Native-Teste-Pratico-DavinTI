import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Toast from 'react-native-toast-message';

import Header from "../components/Header";
import ScreenView from "../components/ScreenView";
import { useTicket } from "../hooks/useTicket";
import { styles } from '../styles/NewTicket';

export default function NewTicket() {
  const navigation = useNavigation();
  const addTicket = useTicket((state) => state.addTicket);

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleSave = () => {
    if (!title.trim() || !details.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Campos obrigatórios',
        text2: 'Por favor, preencha o título e os detalhes.',
      });
      return;
    }

    addTicket({
      title,
      details,
      closingDeadline: deadline,
    });

    Toast.show({
      type: 'success',
      text1: 'Sucesso!',
      text2: 'Seu ticket foi aberto com sucesso.',
    });

    navigation.navigate('Home' as never);

    setTitle('');
    setDetails('');
    setDeadline(new Date());
  };

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(false);

    if (selectedDate) {
      setDeadline(selectedDate);
    }
  };

  return (
    <ScreenView>
      <Header />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.titlePage}>Abrir Novo Ticket</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Título</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Problema no servidor"
              placeholderTextColor="#999"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Detalhes do Problema</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Descreva detalhadamente o que está ocorrendo..."
              placeholderTextColor="#999"
              multiline
              numberOfLines={5}
              value={details}
              onChangeText={setDetails}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Prazo Estimado</Text>
            <TouchableOpacity
              style={styles.dateSelector}
              onPress={() => setShowPicker(true)}
              activeOpacity={0.7}
            >
              <Text style={styles.dateText}>
                {deadline.toLocaleDateString('pt-BR')}
              </Text>
            </TouchableOpacity>

            {showPicker && (
              <DateTimePicker
                value={deadline}
                mode="date"
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={onChangeDate}
                minimumDate={new Date()}
              />
            )}
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSave}
          >
            <Text style={styles.buttonText}>Salvar Ticket</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenView>
  );
}