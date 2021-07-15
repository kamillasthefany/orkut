import React, { useState } from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { Menu } from '../src/components/Menu';
import { ProfileSidebarMenu } from '../src/components/ProfileSidebarMenu';
import { IconSet } from '../src/components/IconSet';

function ProfileSideBar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '5px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github/${props.githubUser}`} >
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <ProfileSidebarMenu />
    </Box>
  )
};

export default function Home() {

  const [comunidades, setComunidades] = useState(['alura']);
  const githubUser = 'kamillasthefany';
  const pessoasFavoritas = ['juunegreiros', 'peas', 'omariosouto', 'rafaballerini'];

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    console.log(e.target);
    setComunidades(...comunidades);
  };

  return (
    <>
      <Menu />
      <MainGrid>
        <div style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo
            </h1>
            <IconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={() => handleSubmit(e)}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div style={{ gridArea: 'relationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href="#">
                      <img src={`http://picsum.photos/300/300`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
