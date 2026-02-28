export enum TicketStatus {
    OPEN = 'Aberto', 
    CLOSED = 'Encerrado',
    UNFOUNDED = 'Improcedente',
    CANCELED = 'Cancelado',
  }
  
  export interface Ticket {
    id: string;
    title: string;
    details: string;
    openingDate: Date;
    closingDeadline: Date;
    status: TicketStatus;
    closingDescription?: string;
    closingDate?: Date;
  }
  
  export interface TicketStore {
    tickets: Ticket[];
    addTicket: (ticket: Omit<Ticket, 'id' | 'openingDate' | 'status'>) => void;
    updateTicket: (ticket: Ticket) => void;
    deleteTicket: (id: string) => void;
    getTicketById: (id: string) => Ticket | undefined;
  }