import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MomentUploadStatusLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 100%;
  padding: 1rem;
  border-radius: 2rem;
  background-color: #d9d9d9;
`;

export const TitleSpan = styled.span`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: absolute;
  top: -1.9rem;
  padding: 0.3rem 1.7rem;
  border-radius: 1.5rem;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  line-height: 2.6rem;
`;

export const MomentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin-top: 1rem;
  gap: 1.5rem;
`;

export const MomentItem = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  gap: 1.1rem;
`;

export const MomentImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const UploadLinkWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #fff;
`;

export const UploadLink = styled(Link)`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  color: #000;
  text-align: center;
  font-size: 90px;
  line-height: 2.6rem;
`;

export const MomentTitleSpan = styled.span`
  color: #000;
  font-size: 18px;
  overflow-wrap: break-word;
  word-break: keep-all;
  text-align: center;
  line-height: 2.6rem;
`;
