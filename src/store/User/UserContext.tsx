import { createContext, ReactNode, useState } from 'react';
import { UserInfoType } from '../../types/user';

interface UserInfoContextType {
  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;
}

const initialValue: UserInfoType = {
  id: 0,
  nickname: '',
  email: '',
  friendCode: '',
  profileImage: '',
};

const UserInfoContext = createContext<UserInfoContextType>({
  userInfo: initialValue,
  setUserInfo: () => {},
});

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfoType>(initialValue);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContext;
