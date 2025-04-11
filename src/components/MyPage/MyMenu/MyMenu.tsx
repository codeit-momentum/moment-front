import { ReactNode } from 'react';
import * as S from './MyMenu.style';
import IcArrowRight from '../../../assets/svg/myPage/IcArrowRight';

interface MyMenuProps {
  menuItems: {
    label: string;
    name: string;
    icon: ReactNode;
    action: () => void;
  }[];
}

const MyMenu = ({ menuItems }: MyMenuProps) => {
  return (
    <S.MyMenuLayout>
      {menuItems.map((menuItem) => (
        <S.MyMenuItem key={menuItem.label}>
          {menuItem.icon}
          <S.ItemLabelSpan $isDelete={menuItem.name === 'cancel'}>
            {menuItem.label}
          </S.ItemLabelSpan>
          <S.BtnNavigate onClick={menuItem.action}>
            <IcArrowRight />
          </S.BtnNavigate>
        </S.MyMenuItem>
      ))}
    </S.MyMenuLayout>
  );
};

export default MyMenu;
