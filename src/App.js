import logo from "./logo.svg";
import sunMoonImg from "./assets/sun-moon.png";
import "./App.css";
import {
  Button,
  P,
  CardProjeto,
  DivRepository,
  PTech,
  DivTechs,
  SunMoon,
  FixedMenu,
  TopButton,
  ThemeButton,
  Html,
  DivProjetos,
  DivSobre,
  Main,
} from "./styles";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { GiHeraldicSun, GiEvilMoon } from "react-icons/gi";
import * as DiIcons from "react-icons/di";
import * as IoIcons from "react-icons/io5";
import { projetos } from "./data";
// import { DiCss3 } from "react-icons/di";

function App() {
  const [initial, setInitial] = useState(0);
  const [day, setDay] = useState(true);

  function changeDay() {
    day === true ? setDay(false) : setDay(true);
  }

  const projetos_ = projetos;

  console.log(projetos_);

  const Techs = [
    {
      name: "CSS3",
      icon: "DiCss3",
    },
    {
      name: "HTML5",
      icon: "DiHtml5",
    },
    {
      name: "JavaScript",
      icon: "IoLogoJavascript",
    },
  ];

  return (
    <Main day={day}>
      <FixedMenu day={day}>
        <TopButton day={day} onClick={() => setInitial(1)}>
          Sobre
        </TopButton>
        <ThemeButton day={day}>
          {day ? (
            <GiHeraldicSun style={{}} onClick={() => setDay(false)} />
          ) : (
            <GiEvilMoon style={{}} onClick={() => setDay(true)} />
          )}
        </ThemeButton>

        {/* <SunMoon src={sunMoonImg} day={day} onClick={() => changeDay()} /> */}
        <TopButton day={day} onClick={() => setInitial(2)}>
          projetos
        </TopButton>
      </FixedMenu>

      {initial === 0 && (
        <>
          <Button onClick={() => setInitial(1)}>Sobre mim</Button>
          <Button onClick={() => setInitial(2)}>Meus projetos</Button>
        </>
      )}
      {initial === 1 && (
        <DivSobre day={day}>
          <P day={day}>Rafael Francisco Halquema dos Santos</P>
          <P day={day}>Desenvolvedor FullStack</P>
          <P day={day}>
            Aqui você encontrará meu portfólio com meus principais projetos
            pessoais de estudo.
          </P>
          <P day={day}>Minhas principais tecnologias</P>
          <DivTechs day={day}>
            {Techs.map((tech, i) => {
              const Icon =
                tech.icon[0] === "D"
                  ? DiIcons[tech.icon]
                  : tech.icon[0] === "I"
                  ? IoIcons[tech.icon]
                  : undefined;

              return (
                <PTech>
                  <Icon key={i} />
                  {tech.name}
                </PTech>
              );
            })}
            <P day={day}>
              JavaScript, ReactJS, Node.js, Python, Django, C#, .NET, GIT,
              Scrum, Context API, Redux, Microsoft SQL Server, Postgress SQL,
              MySQL e API Rest
            </P>
          </DivTechs>
        </DivSobre>
      )}
      {initial === 2 && (
        <DivProjetos day={day}>
          {projetos_.map((projeto, i) => {
            return (
              <CardProjeto key={i} day={day}>
                <a href={projeto.url}>{projeto.name}</a>
                <p>{projeto.desctiption}</p>
                <p>
                  <b>Tecnologias:</b> {projeto.technologies}
                </p>
                <DivRepository>
                  <a
                    href={projeto.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                    <p>repositório</p>
                  </a>
                </DivRepository>
              </CardProjeto>
            );
          })}
        </DivProjetos>
      )}
    </Main>
  );
}

export default App;
