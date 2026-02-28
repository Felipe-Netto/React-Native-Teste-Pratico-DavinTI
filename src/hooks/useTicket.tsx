import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Ticket, TicketStatus, TicketStore } from '../types/Ticket';

export const useTicket = create<TicketStore>()(
    persist(
        (set, get) => ({
            tickets: [],

            addTicket: (ticketData: Omit<Ticket, 'id' | 'openingDate' | 'status'>) => {
                const newTicket: Ticket = {
                    ...ticketData,
                    id: Date.now().toString(),
                    openingDate: new Date(),
                    status: TicketStatus.OPEN,
                };

                set((state) => ({
                    tickets: [newTicket, ...state.tickets].sort((a, b) => {
                        const dateA = new Date(a.openingDate).getTime();
                        const dateB = new Date(b.openingDate).getTime();

                        return dateB - dateA;
                    })
                }));
            },

            updateTicket: (ticket: Ticket) => {
                set((state) => ({
                    tickets: state.tickets.map(t => t.id === ticket.id ? ticket : t)
                }));
            },

            deleteTicket: (id: string) => {
                set((state) => ({
                    tickets: state.tickets.filter(t => t.id !== id)
                }));
            },

            getTicketById: (id: string) => {
                return get().tickets.find(t => t.id === id);
            }
        }),
        {
            name: 'ticket-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export const getStatusDetails = (status: TicketStatus): { color: string, icon: string, bg: string } => {
    switch (status) {
        case TicketStatus.OPEN:
            return { color: '#2196F3', icon: 'time-outline', bg: '#E3F2FD' };
        case TicketStatus.CLOSED:
            return { color: '#4CAF50', icon: 'checkmark-circle-outline', bg: '#E8F5E9' };
        case TicketStatus.CANCELED:
            return { color: '#F44336', icon: 'close-circle-outline', bg: '#FFEBEE' };
        case TicketStatus.UNFOUNDED:
            return { color: '#FF9800', icon: 'alert-circle-outline', bg: '#FFF3E0' };
        default:
            return { color: '#757575', icon: 'help-circle-outline', bg: '#F5F5F5' };
    }
};