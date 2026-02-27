export interface AuthStore {
    isLoggedIn: boolean;
    login: (login: Login) => void;
    logout: () => void;
}

export interface Login {
    username: string;
    password: string;
}