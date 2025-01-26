import * as S from './MyMenu.style';

interface MyMenuProps {
  menuItems: {
    label: string;
    name: string;
    icon: string;
    action: () => void;
  }[];
}

const MyMenu = ({ menuItems }: MyMenuProps) => {
  return (
    <S.MyMenuLayout>
      {menuItems.map((menuItem) => (
        <S.MyMenuItem key={menuItem.label}>
          <S.Icon />
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
