import React from 'react';
import { ProfileSidebarMenuWrapper } from './styles';
import { ReactComponet as User } from '../../assets/icons/user.svg';
import { ReactComponet as Book } from '../../assets/icons/book.svg';
import { ReactComponet as Camera } from '../../assets/icons/camera.svg';
import { ReactComponet as Sun } from '../../assets/icons/sun.svg';
import { ReactComponet as Plus } from '../../assets/icons/plus.svg';
import { ReactComponet as Logout } from '../../assets/icons/logout.svg';

const BASE_URL = 'http://alurakut.vercel.app';
const v = '1';

export function ProfileSidebarMenu() {
  return (
    <ProfileSidebarMenuWrapper>
      <nav>
        {console.log(User)}
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
          Perfil
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
          Recados
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
          Fotos
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} />
          GitHub Trends
        </a>
        <a href="/logout">
          <img src={`${BASE_URL}/icons/logout.svg`} />
          Sair
        </a>
      </nav>
    </ProfileSidebarMenuWrapper>
  )
}
