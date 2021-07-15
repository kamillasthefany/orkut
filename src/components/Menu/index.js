import React, { useState } from 'react';
import NextLink from 'next/link';
import { MenuWrapper, MenuLogo } from './styles';
import Logo from '../../assets/icons/logo.svg';
import MenuOpen from '../../assets/icons/menu-open.svg';
import MenuClosed from '../../assets/icons/menu-closed.svg';
import { ProfileSidebarMenu } from '../ProfileSidebarMenu';

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
        <MenuLogo src={Logo.src} />

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
          {isMenuOpen && <img src={MenuOpen.src} />}
          {!isMenuOpen && <img src={MenuClosed.src} />}
        </button>
      </div>

      {console.log(githubUser)}
      <ProfileSidebar githubUser={githubUser} />
    </MenuWrapper>
  )
}

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