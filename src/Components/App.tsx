import { UserContext } from '../Services/UserContext';
import { User, Weather } from "../Types/Types";
import { MainPage } from './MainPage';
import { LoginPage } from './Login';
import { useState } from 'react';
import '../CSS/App.css';

export const App = () => {

  const [user, setUser] = useState<User>({} as User);
  const [weatherArray, setWeatherArray] = useState<Weather[]>([]);

  

  const isLoggedIn = (): boolean => {
    return typeof (user.userIdHash) !== 'undefined';
  }

  return <UserContext.Provider value={{ user, setUser, weatherArray, setWeatherArray }}>
    {
      isLoggedIn() ? <MainPage /> : <LoginPage />
    }
  </UserContext.Provider>
}
