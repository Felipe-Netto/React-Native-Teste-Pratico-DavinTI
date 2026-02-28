import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AuthStore, Login } from '../types/Auth';

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,

      login: (login: Login): void => {
        if (login.username === 'admin@teste.com' && login.password === '123456') {
          set({ isLoggedIn: true });
          return;
        }

        throw new Error('Invalid username or password');
      },

      logout: (): void => {
        set({ isLoggedIn: false });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);