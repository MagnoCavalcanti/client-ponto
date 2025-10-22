import type { User } from "./User";

export interface AuthContextType {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (userData: User, empresa?:any) => Promise<boolean>;
  logout: () => void;
}