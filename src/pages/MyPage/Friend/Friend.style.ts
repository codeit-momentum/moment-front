import styled from 'styled-components';

export const FriendLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;
export const SearchForm = styled.form`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
  height: 20rem;
  padding-top: 4.4rem;
  margin-bottom: 9rem;
`;
export const SubtitleSpan = styled.span`
  font-size: 16px;
  line-height: 3.7rem;
  padding-bottom: 2rem;
`;
export const InputContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
`;
export const CodeInput = styled.input`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  width: 25rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: 5px;
  border: none;

  font-size: 16px;
  text-align: center;
`;
//아이콘 나오면 수정
export const BtnSearch = styled.button`
  background: transparent;
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  right: 1rem;
`;
export const WarningSpan = styled.span`
  color: ${({ theme }) => theme.colors.red};
  height: 4rem;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  margin-top: 1rem;
`;
export const CodeBox = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 150px;
  height: 40px;
`;
export const InfoTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 12px;
  line-height: 2rem;
  margin-top: 1rem;
`;
