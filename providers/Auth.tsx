import React, { ReactNode, ReactElement } from 'react';
import { API_BASE_URL } from '../shared/constants';
import { User } from '../shared/types/user';

export type AuthContext = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = React.createContext<AuthContext>({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuthenticated: () => {},
});

export const AuthProvider = (
  {
    children
  }: {
  children: ReactNode;
}): ReactElement => {

  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const initializeAuth = async (): Promise<void> => {
      const response = await fetch(`${API_BASE_URL}/auth/is-auth`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.status === 200) {
        setAuthenticated(true);
        const data = await response.json();

        if (data?.user) {
          setUser(data.user);
        } else {
          throw new Error('auth is valid, but user not provided');
        }

      } else {
        setAuthenticated(false);
      }

      setLoading(false);
    };
    initializeAuth();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        setUser,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContext {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useIsAuthenticated(): boolean {
  const context = useAuth();
  return context.isAuthenticated;
}
