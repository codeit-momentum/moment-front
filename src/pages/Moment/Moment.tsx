import { useState } from 'react';
import MomentTabBar from '../../components/Moment/MomentTabBar/MomentTabBar';
import * as S from './Moment.style';

const Moment = () => {
  const [selected, setSelected] = useState<'moment' | 'bucket'>('moment');

  return (
    <S.MomentLayout>
      <MomentTabBar selected={selected} setSelected={setSelected} />
    </S.MomentLayout>
  );
};

export default Moment;
