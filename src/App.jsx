import "./App.css";
import { useEffect, useState } from "react";
import weatherImage from "/weather_image.png";
import blogImage from "/blog_image.png";
import formImage from "/form_image.png";
import notesImage from "/notes_image.png";
import chronosImage from "/Chronos_Pomodoro.png";
import desapegueiImage from "/desapeguei.png";
import pensaRapidoImage from "/pensa_rapido.png";
import theBlogImage from "/TheBlog.png";
import { Project } from "./components/Project";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX + window.scrollX; // Considera a rolagem horizontal
      const mouseY = e.clientY + window.scrollY; // Considera a rolagem vertical

      const container = document.querySelector(".container");

      // Aplica o gradiente ao fundo conforme a posição do mouse
      container.style.background = `radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.2), transparent 80%)`;
    };

    // Adiciona o evento de movimento do mouse
    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  const [section, setSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experiences", "projects"];

      for (let id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container">
        <div className="app-container">
          <div className="nav-container">
            <div className="header">
              <a href="#about">
                <h1>Fernando Gonçalves</h1>
              </a>
              <h2>Full Stack Developer</h2>

              <nav>
                <ul>
                  <li>
                    <a
                      href="#about"
                      id={section === "about" ? "active-link" : ""}
                      onClick={() => setSection("about")}
                    >
                      <span
                        className={section === "about" ? "active" : "line"}
                      ></span>
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experiences"
                      id={section === "experiences" ? "active-link" : ""}
                      onClick={() => setSection("experiences")}
                    >
                      <span
                        className={
                          section === "experiences" ? "active" : "line"
                        }
                      ></span>
                      Experiências
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      id={section === "projects" ? "active-link" : ""}
                      onClick={() => setSection("projects")}
                    >
                      <span
                        className={section === "projects" ? "active" : "line"}
                      ></span>
                      Projetos
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="links-container">
              <a
                href="https://github.com/Fernando-Goncalves-Santos"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  aria-label="Icone do Github"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/fernando-gon%C3%A7alves-9369ba179/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  aria-label="Icone do Linkedin"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="infos-container" id="about">
            <div className="about">
              <h2 id="responsive-title">Sobre</h2>
              <p>
                Cientista da computação formado pela Universidade Presbiteriana
                Mackenzie, em minha última experiência profissional, atuei como
                consultor em soluções de tecnologia nas funções de gestão da
                mudança e PMO em projetos de implementação e melhorias de
                software. Durante minha jornada de aprendizado tive a
                oportunidade de me especializar em ferramentas modernas de
                desenvolvimento web front end como JavaScript, React, TypeScript
                e Jest além de ser capaz de atuar como back end também com Node,
                Express, Python, Django e bancos de dados Relacionais e Não
                relacionais. Tenho facilidade no aprendizado e busco trabalhar
                sempre equilibrando a realização das tarefas de forma autônoma
                com a construção de soluções em equipe.
              </p>
            </div>
            <div className="experiences" id="experiences">
              <h2 id="responsive-title">Experiências</h2>
              <div className="experience">
                <h3>
                  Consultor em Soluções de tecnologia, ERNST & YOUNG ASSESSORIA
                  EMPRESARIAL LTDA
                </h3>
                <p className="subtitle">JULHO 2021 - ABRIL 2024</p>
                <p>
                  Atuação como consultor de Gestão da Mudança e PMO em projetos
                  ágeis de tecnologia em empresas do setor hospitalar, bancário,
                  industrial, entre outros. Tinha a função de apoiar, guiar e
                  supervisionar projetos de implementação e/ou melhoria de
                  software para garantir que estivessem alinhados com os
                  objetivos estratégicos da organização.
                </p>
              </div>
              <div className="experience">
                <h3>Multiplicador de treinamento, CSU DIGITAL S.A</h3>
                <p className="subtitle">SETEMBRO 2019 - JULHO 2021</p>
                <p>
                  Responsável pela melhoria contínua dos indicadores nas
                  operações de atendimento ao cliente. Realizava a análise
                  detalhada dos dados, elaborava e implementava planos de ação,
                  ministrava treinamentos de modo presencial e on-line além da
                  apresentação dos resultados destacando a evolução e o impacto
                  das ações realizadas para promover um desempenho cada vez mais
                  alinhado aos objetivos da organização.
                </p>
              </div>
            </div>
            <div className="projects" id="projects">
              <h2 id="responsive-title">Projetos</h2>
              <Project
                name={"TheBlog"}
                link={"https://theblog-sable.vercel.app"}
                image={theBlogImage}
                description={
                  <p>
                    Aplicação full stack para publicação de artigos, onde você pode
                    criar, editar e compartilhar conteúdos de forma simples,
                    intuitiva e segura. O TheBlog oferece editor com suporte a
                    Markdown, upload de imagens, geração automática de slugs e
                    renderização protegida contra XSS. Gerencie seus posts com
                    facilidade e conte com recursos avançados como cache
                    inteligente, revalidação incremental (ISR), autenticação de
                    administrador e integração com banco de dados PostgreSQL via
                    Prisma Accelerate.
                  </p>
                }
                tags={[
                  "Next.js",
                  "App Router",
                  "Server Actions",
                  "SSR e ISR",
                  "Next Cache",
                  "Cookie Seguro",
                  "Tailwind CSS",
                  "Prisma Accelerate",
                  "PostgreSQL",
                  "TypeScript",
                  "React",
                  "React Markdown Editor",
                  "Rehype Sanitize",
                  "Zod",
                  "Uuid",
                  "Slugify",
                  "Cloudinary",
                  "Lucide Icons",
                  "Toastify",
                ]}
              />
              <Project
                name={"Chronos Pomodoro"}
                link={"https://timer-pomodoro-eta.vercel.app"}
                image={chronosImage}
                description={
                  <p>
                    Gerencie melhor o seu tempo e aumente sua produtividade com
                    a técnica Pomodoro. Uma aplicação que controla seus períodos
                    de foco e descanso por meio de ciclos, acompanhe seu
                    progresso através do histórico e ainda configure os
                    intervalos de produtividade e repouso para adaptar a melhor
                    metodologia de produtividade ao seu ritmo
                  </p>
                }
                tags={[
                  "HTML & CSS",
                  "TypeScript",
                  "JavaScript",
                  "Web Workers",
                  "React",
                  "React Router",
                  "React Context API",
                  "Reducer",
                  "Toastify",
                  "Lucide Icons",
                  "Temas Claro/Escuro",
                ]}
              />
              <Project
                name={"Pensa Rápido - Projeto FullStack"}
                link={"https://pensa-rapido.onrender.com"}
                description={
                  <p>
                    Aplicação web de quiz. Crie sua conta, teste seus
                    conhecimentos em um dos dois modos de jogo disponíveis e
                    dispute as melhores posições no ranking geral. Uma
                    implementação focada em gerenciamento de estados usando a
                    context API do React. No back end foi implementada API Rest
                    usando Node.Js e Express
                  </p>
                }
                tags={[
                  "HTML & CSS",
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "React Router",
                  "React Context API",
                  "Node.JS",
                  "Express",
                  "Mongo DB",
                  "Mongoose",
                  "Autenticação JWT",
                  "API REST",
                  "LocalStorage",
                  "Keep Alive/Github Actions",
                ]}
                image={pensaRapidoImage}
              />
              <Project
                name={"Desapeguei - Projeto FullStack"}
                link={"https://desapeguei-7iyh.onrender.com"}
                image={desapegueiImage}
                tags={[
                  "HTML & CSS",
                  "JavaScript",
                  "React",
                  "React Router",
                  "React Context API",
                  "Node.JS",
                  "Express",
                  "Mongo DB",
                  "Mongoose",
                  "Autenticação JWT",
                  "API REST",
                ]}
                description={
                  <p>
                    Inspirado na plataforma Enjoei, com ele é possível cadastrar
                    produtos à venda, editar, excluir e concluir a negociação
                    solicitada por outros usuários. Crie e personalize seu
                    perfil com a sua foto e seus dados de contato! Essa
                    aplicação web conta com back end, com API REST e sistema de
                    autenticação
                  </p>
                }
              />
              <Project
                name={"Aplicativo de Clima"}
                link={"https://fernando-goncalves-santos.github.io/weatherApp/"}
                image={weatherImage}
                description={
                  <p>
                    Aplicativo Web para saber as informações do clima
                    atualizadas de qualquer cidade do mundo. O app faz chamadas
                    para as APIs da meteoblue de geolocalização e de clima e faz
                    os tratamentos necessários para lidar com diferentes fusos
                    horários.
                  </p>
                }
                tags={[
                  "HTML & CSS",
                  "JavaScript",
                  "React",
                  "React Router",
                  "Integração com a API Meteoblue",
                ]}
              />
              <Project
                name={"CRUD em um Blog"}
                link={"https://fernando-goncalves-santos.github.io/blog_react/"}
                image={blogImage}
                description={
                  <p>
                    Implementação das operações CRUD - Create, Read, Update e
                    Delete com a API JSONPlaceholder
                  </p>
                }
                tags={[
                  "HTML & CSS",
                  "JavaScript",
                  "React",
                  "React Router",
                  "Axios",
                  "Integração com a API JSONPlaceholder",
                ]}
              />
              <Project
                name={"Formulário Multistep"}
                link={
                  "https://fernando-goncalves-santos.github.io/Formulario_Multistep_React_ts/"
                }
                image={formImage}
                description={
                  <p>
                    Uma implementação de formulário com múltiplos passos
                    componentizados compartilhando informações por meio de props
                  </p>
                }
                tags={["HTML & CSS", "JavaScript", "React", "Typescript"]}
              />
              <Project
                name={"Aplicativo de Notas"}
                link={"https://fernando-goncalves-santos.github.io/dev_notes/"}
                image={notesImage}
                description={
                  <p>
                    Aplicativo web para realizar anotações e lembretes.
                    Adicione, busque, edite, duplique, exclua e fixe suas notas.
                    Se preferir, é possível gerar o arquivo .csv com as
                    anotações
                  </p>
                }
                tags={[
                  "HTML & CSS",
                  "JavaScript",
                  "Manipulação do DOM",
                  "Uso da LocalStorage",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
