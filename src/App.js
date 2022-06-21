import logo from "./logo.svg";
import "./App.css";
import { Button, P, CardProjeto, DivRepository } from "./styles";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

function App() {
  const [initial, setInitial] = useState(0);
  const projetos = [
    {
      name: "KenzieHub",
      url: "https://react-entrega-s2-kenzie-hub-rafaelfhsantos.vercel.app/cadastro",
      desctiption:
        "Projeto que visa centralizar as tecnologias de um estudante dentro de um curso categorizando-as por nível de aptidão.",
      technologies: "ReactJS, Styled Components, Axios, Router-Dom",
      repository: "https://github.com/rafaelfhsantos/kenzie-hub",
    },
    {
      name: "Bora Lá",
      url: "https://capstone-m3-grupo3-vilson-nov21.vercel.app/",
      desctiption:
        "A aplicação tem como intuito facilitar que os usuários e donos de estabelecimentos consigam, de maneira rápida e organizada, encontrar e publicar eventos de sua região.",
      technologies:
        "ReactJS, Context API, Styled Components, Axios, Router-Dom",
      repository: "https://github.com/rafaelfhsantos/borala",
    },
    {
      name: "Kenzie Food",
      url: "https://kenzie-food-beta.vercel.app/",
      desctiption:
        "Aplicaçao cujo tema é a venda de refeições com área tanto para cliente como administrativo autenticado por token. Utiliza-se também da integração com api para obtenção dos produtos base.",
      technologies: "HTML5, CSS3 e JavaScript Vanilla",
      repository: "https://github.com/rafaelfhsantos/kenzie-food",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {initial === 0 && (
          <>
            <Button onClick={() => setInitial(1)}>Sobre mim</Button>
            <Button onClick={() => setInitial(2)}>Meus projetos</Button>
          </>
        )}
        {initial === 1 && (
          <>
            <P>Rafael Francisco Halquema dos Santos</P>
            <P>
              Desenvolvedor FrontEnd com experiência em banco de dados SQL
              Server.
            </P>
            <P>
              Aqui você encontrará meu portfólio com meus principais projetos
              pessoais de estudo.
            </P>
            <P>
              Minhas principais tecnologias: CSS3, HTML5, JavaScript, ReactJS,
              GIT, Scrum, Context API, Redux, .NET 5, SQL Server e API Rest
            </P>
            <Button onClick={() => setInitial(2)}>Meus projetos</Button>
          </>
        )}
        {initial === 2 && (
          <>
            {projetos.map((projeto, i) => {
              return (
                <CardProjeto key={i}>
                  <a href={projeto.url}>{projeto.name}</a>
                  <p>{projeto.desctiption}</p>
                  <p>Tecnologias: {projeto.technologies}</p>
                  <DivRepository>
                    <AiFillGithub />
                    <a href={projeto.repository}>repositório</a>
                  </DivRepository>
                </CardProjeto>
              );
            })}
            <Button onClick={() => setInitial(1)}>Sobre mim</Button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
