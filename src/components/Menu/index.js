import React, { useState } from 'react';
import { MenuWrapper, MenuLogo } from './styles';
import { ReactComponet as Logo } from '../../assets/icons/logo.svg';
const BASE_URL = 'http://alurakut.vercel.app/';
import NextLink from 'next/link';
import { ProfileSidebarMenu } from '../ProfileSidebarMenu';
const v = '1';


function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export function Menu({ githubUser }) {
  const [isMenuOpen, setMenuState] = useState(false);
  return (
    <MenuWrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <MenuLogo src={Logo} />

        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/' }, { name: 'Amigos', slug: '/amigos' }, { name: 'Comunidades', slug: '/comunidades' }].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />}
        </button>
      </div>
      <ProfileSidebar githubUser={githubUser} />
    </MenuWrapper>
  )
}


//function AlurakutMenuProfileSidebar({ githubUser }) {
function ProfileSidebar({ githubUser }) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <ProfileSidebarMenu />
      </div>
    </div>
  )
}