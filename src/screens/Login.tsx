import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Toast from 'react-native-toast-message';
import { useAuth } from '../hooks/useAuth';
import { Login as LoginType } from '../types/Auth';
import { styles } from '../styles/Login';

export default function Login() {
  const { login } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm<LoginType>({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = (data: LoginType) => {
    try {
      login(data);
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer login',
        text2: 'Verifique suas credenciais'
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Tickets</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>E-mail</Text>
          <Controller
            control={control}
            name="username"
            rules={{
              required: 'E-mail obrigatório',
              pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.username && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="admin@teste.com"
                autoCapitalize="none"
              />
            )}
          />

          {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

          <Text style={styles.label}>Senha</Text>
          <Controller
            control={control}
            name="password"
            rules={{ required: 'Senha obrigatória', minLength: { value: 6, message: 'Mínimo 6 caracteres' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="******"
                secureTextEntry
              />
            )}
          />

          {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit((data: LoginType) => onSubmit(data))}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}