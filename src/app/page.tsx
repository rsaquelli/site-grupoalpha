import Image from "next/image";
import { site } from "@/lib/site";

const numeros = [
  { valor: "+300 mil", rotulo: "refeições por mês" },
  { valor: "+600 mil", rotulo: "cafés da manhã por mês" },
  { valor: "+180", rotulo: "colaboradores" },
  { valor: "+60", rotulo: "unidades alocadas" },
];

const solucoes = [
  ["Refeição Local", "Operação completa dentro da empresa, com cozinha montada e produção no próprio cliente."],
  ["Refeição Transportada", "Produção centralizada, controle de qualidade e logística até a operação."],
  ["Marmitex", "Refeições individuais produzidas, montadas e entregues com padrão e praticidade."],
  ["Café da Manhã e Lanches", "Soluções flexíveis para diferentes jornadas e perfis de equipe."],
  ["Almoço e Jantar", "Cardápios completos, equilibrados e adaptados à realidade de cada contrato."],
  ["Eventos Corporativos", "Ações especiais, datas comemorativas e experiências para colaboradores."],
];

const pilares = [
  ["24×7", "Operação preparada para jornadas contínuas."],
  ["Nutrição", "Equipe técnica especializada no acompanhamento da operação."],
  ["Qualidade", "Controle do recebimento ao serviço final."],
  ["Flexibilidade", "Modelos e cardápios sob medida para cada cliente."],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="Grupo Alpha Refeições">
          <Image
            src="/logo-alpha.png"
            alt="Grupo Alpha Refeições"
            width={86}
            height={86}
            priority
          />
        </a>

        <nav className="nav">
          <a href="#grupo">Grupo Alpha</a>
          <a href="#solucoes">Soluções</a>
          <a href="#qualidade">Qualidade</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="portalBtn" href={site.portalColaborador}>
          Portal do Colaborador
        </a>
      </header>

      <section id="inicio" className="hero">
        <div className="heroTexture" />
        <div className="heroCopy">
          <span className="eyebrow light">GRUPO ALPHA REFEIÇÕES</span>
          <h1>
            Alimentação corporativa com
            <span> sabor de comida de verdade.</span>
          </h1>
          <p>
            Soluções completas para empresas que precisam unir qualidade,
            segurança alimentar, escala e uma experiência melhor para seus colaboradores.
          </p>

          <div className="heroActions">
            <a className="button buttonWhite" href="#contato">
              Solicite uma proposta
            </a>
            <a className="button buttonGhost" href="#solucoes">
              Conheça nossas soluções
            </a>
          </div>

          <div className="heroSeal">
            <strong>37 anos</strong>
            <span>de experiência e tradição</span>
          </div>
        </div>

        <div className="heroArt">
          <div className="logoCard">
            <Image
              src="/logo-alpha.png"
              alt="Logo Grupo Alpha Refeições"
              width={440}
              height={440}
              priority
            />
          </div>
          <div className="accentCard">
            <span>OPERAÇÃO</span>
            <strong>24 × 7</strong>
            <small>estrutura preparada para diferentes turnos e volumes</small>
          </div>
        </div>
      </section>

      <section className="numbers">
        {numeros.map((item) => (
          <article key={item.rotulo}>
            <strong>{item.valor}</strong>
            <span>{item.rotulo}</span>
          </article>
        ))}
      </section>

      <section id="grupo" className="section history">
        <div className="sectionIntro">
          <span className="eyebrow">NOSSA HISTÓRIA</span>
          <h2>Tradição à mesa. Estrutura para crescer junto com o cliente.</h2>
        </div>

        <div className="historyBody">
          <p>
            Há 37 anos, a Alpha nasceu movida pela paixão por oferecer refeições
            de qualidade e sabor. Cresceu preservando a essência da comida caseira,
            ao mesmo tempo em que incorporou estrutura, processos, tecnologia e
            uma equipe técnica preparada para operações corporativas.
          </p>

          <div className="historyHighlight">
            <span>GRUPO ALPHA</span>
            <strong>Experiência que se sente no prato e na operação.</strong>
          </div>
        </div>
      </section>

      <section id="solucoes" className="section solutions">
        <div className="sectionIntro compact">
          <span className="eyebrow">SOLUÇÕES</span>
          <h2>Do café da manhã ao jantar. Da cozinha local à refeição transportada.</h2>
        </div>

        <div className="solutionGrid">
          {solucoes.map(([titulo, texto], index) => (
            <article className="solutionCard" key={titulo}>
              <div className="solutionTop">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i>↗</i>
              </div>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="qualidade" className="section quality">
        <div className="qualityVisual">
          <div className="photoFrame">
            <span>FOTO REAL DA OPERAÇÃO</span>
            <strong>Produção • Buffet • Equipe</strong>
            <small>No próximo pacote entram imagens reais do Grupo Alpha.</small>
          </div>
        </div>

        <div className="qualityCopy">
          <span className="eyebrow">QUALIDADE E SEGURANÇA</span>
          <h2>Controle em cada etapa. Cuidado em cada refeição.</h2>
          <p>
            Recebimento, armazenamento, produção, expedição e serviço com
            acompanhamento técnico e processos padronizados.
          </p>

          <div className="pillList">
            <span>Segurança alimentar</span>
            <span>Nutricionistas</span>
            <span>Cardápios personalizados</span>
            <span>Controle de processos</span>
            <span>Operação 24x7</span>
          </div>
        </div>
      </section>

      <section id="estrutura" className="section structure">
        <div className="sectionIntro">
          <span className="eyebrow">NOSSA ESTRUTURA</span>
          <h2>Uma base sólida para atender operações de diferentes portes.</h2>
        </div>

        <div className="pillarGrid">
          {pilares.map(([titulo, texto]) => (
            <article key={titulo}>
              <strong>{titulo}</strong>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portal">
        <div className="portalIcon">
          <Image src="/logo-alpha.png" alt="" width={120} height={120} />
        </div>
        <div className="portalCopy">
          <span className="eyebrow light">ÁREA DO COLABORADOR</span>
          <h2>O Grupo Alpha também é digital.</h2>
          <p>
            Acesse documentos, comunicados, pendências e informações pessoais
            através do Portal do Colaborador.
          </p>
        </div>
        <div className="portalActions">
          <a className="button buttonWhite" href={site.portalColaborador}>
            Entrar no Portal
          </a>
          <a href={site.primeiroAcesso}>Primeiro acesso</a>
          <a href={site.recuperarSenha}>Recuperar senha</a>
        </div>
      </section>

      <section className="section experience">
        <div className="sectionIntro compact">
          <span className="eyebrow">ALÉM DA REFEIÇÃO</span>
          <h2>Experiências que tornam o dia a dia mais especial.</h2>
        </div>
        <div className="experienceGrid">
          <article>
            <span>01</span>
            <strong>Datas comemorativas</strong>
            <p>Quebra de rotina com cardápios e ações especiais.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Padaria na operação</strong>
            <p>Pães preparados e assados na hora.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Eventos internos</strong>
            <p>Experiências pensadas para equipes e colaboradores.</p>
          </article>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="contactText">
          <span className="eyebrow light">FALE COM A ALPHA</span>
          <h2>Vamos desenhar a operação ideal para sua empresa?</h2>
          <p>
            Conte um pouco sobre a sua necessidade e nossa equipe comercial
            entra em contato.
          </p>

          <div className="contactMeta">
            <span>{site.telefone}</span>
            <span>{site.endereco}</span>
            <a href={site.instagram}>@grupoalpharefeicoes</a>
          </div>
        </div>

        <form className="formCard">
          <div className="formRow">
            <label>
              Nome
              <input placeholder="Seu nome" />
            </label>
            <label>
              Empresa
              <input placeholder="Nome da empresa" />
            </label>
          </div>
          <div className="formRow">
            <label>
              WhatsApp
              <input placeholder="(11) 99999-9999" />
            </label>
            <label>
              E-mail
              <input type="email" placeholder="voce@empresa.com.br" />
            </label>
          </div>
          <div className="formRow">
            <label>
              Refeições por dia
              <input placeholder="Ex.: 350" />
            </label>
            <label>
              Serviço
              <select defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Refeição Local</option>
                <option>Refeição Transportada</option>
                <option>Marmitex</option>
                <option>Café da Manhã / Lanches</option>
                <option>Eventos</option>
                <option>Ainda não sei</option>
              </select>
            </label>
          </div>
          <label>
            Mensagem
            <textarea placeholder="Conte um pouco sobre sua operação..." />
          </label>

          <button type="button" className="button buttonRed">
            Quero receber uma proposta
          </button>
          <small>Protótipo visual — envio do formulário será conectado na próxima etapa.</small>
        </form>
      </section>

      <footer className="footer">
        <div className="footerLogo">
          <Image src="/logo-alpha.png" alt="Grupo Alpha Refeições" width={120} height={120} />
        </div>
        <div className="footerLinks">
          <strong>Institucional</strong>
          <a href="#grupo">Grupo Alpha</a>
          <a href="#solucoes">Soluções</a>
          <a href="#qualidade">Qualidade</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="footerLinks">
          <strong>Colaboradores</strong>
          <a href={site.portalColaborador}>Portal do Colaborador</a>
          <a href={site.primeiroAcesso}>Primeiro acesso</a>
          <a href={site.recuperarSenha}>Recuperar senha</a>
        </div>
        <div className="footerRight">
          <span>© 2026 Grupo Alpha Refeições</span>
          <a href={site.instagram}>Instagram</a>
        </div>
      </footer>
    </main>
  );
}
