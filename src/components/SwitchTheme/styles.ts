import styled from 'styled-components';
import moonImg from '../../assets/moon.svg';
import sunImg from '../../assets/sun.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 2.5rem 2rem;
`;

export const MoonIcon = styled.img.attrs(() => ({
  src: moonImg,
  alt: 'Dark'
}))`
  height: 75%;
`;

export const SunIcon = styled.img.attrs(() => ({
  src: sunImg,
  alt: 'Light'
}))`
  height: 75%;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20;
`;
