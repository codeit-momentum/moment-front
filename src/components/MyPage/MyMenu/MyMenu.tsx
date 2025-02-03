import React from 'react';
import * as S from './MyMenu.style';

interface MyMenuProps {
  menuItems: {
    label: string;
    name: string;
    icon: React.ReactNode;
    action: () => void;
  }[];
}

const MyMenu = ({ menuItems }: MyMenuProps) => {
  return (
    <S.MyMenuLayout>
      {menuItems.map((menuItem) => (
        <S.MyMenuItem key={menuItem.label}>
          {menuItems.icon}
          <S.ItemLabelSpan $isDelete={menuItem.name === 'cancel'}>
            {menuItem.label}
          </S.ItemLabelSpan>
          <S.BtnNavigate onClick={menuItem.action} />
        </S.MyMenuItem>
      ))}
    </S.MyMenuLayout>
  );
};

export default MyMenu;
