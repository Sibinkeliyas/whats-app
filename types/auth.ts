export interface IAuthProps {
  isLoggedIn: boolean;
  isInitialized: Boolean;
  user: IUserProps | null;
}

export interface IUserProps {
  id: number;
  userName: string;
  email: string;
}
