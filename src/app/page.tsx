import Image from "next/image";
import { site } from "@/lib/site";

const numeros = [
  { valor: "+300 mil", rotulo: "refeições mensais" },
  { valor: "+600 mil", rotulo: "cafés da manhã mensais" },
  { valor: "+180", rotulo: "colaboradores" },
  { valor: "+60", rotulo: "unidades alocadas" },
];

const solucoes = [
  ["01", "Refeição Local", "Operação dentro da empresa, com produção no próprio cliente e acompanhamento técnico."],
  ["02", "Refeição Transportada", "Produção centralizada, padrão de qualidade e logística até a operação."],
  ["03", "Marmitex", "Refeições individuais produzidas, montadas e entregues com praticidade."],
  ["04", "Café da Manhã", "Soluções flexíveis para diferentes jornadas, turnos e perfis de equipe."],
  ["05", "Almoço e Jantar", "Cardápios completos e adaptados à realidade de cada contrato."],
  ["06", "Eventos Corporativos", "Ações especiais para criar experiências e valorizar colaboradores."],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="Grupo Alpha Refeições">
          <Image src="/logo-alpha.png" alt="Grupo Alpha Refeições" width={118} height={118} priority />
        </a>

        <nav className="nav">
          <a href="#grupo">Grupo Alpha</a>
          <a href="#solucoes">Soluções</a>
          <a href="#qualidade">Qualidade</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#experiencias">Experiências</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="portalBtn" href={site.portalColaborador}>Portal do Colaborador</a>
      </header>

      <section id="inicio" className="heroPremium">
        <div className="heroPhoto">
          <Image
            src="/images/hero-alpha.webp"
            alt="Buffet e alimentação corporativa Grupo Alpha"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            priority
          />
          <div className="heroPhotoShade" />
          <div className="photoCaption">
            <span>OPERAÇÃO REAL</span>
            <strong>Comida de verdade, todos os dias.</strong>
          </div>
        </div>

        <div className="heroPanel">
          <div className="heroBrandLine">
            <span className="eyebrow light">37 ANOS DE EXPERIÊNCIA</span>
            <span className="heroDot" />
            <span>Barueri • São Paulo</span>
          </div>

          <h1>
            Alimentação corporativa
            <span>com sabor, escala e cuidado.</span>
          </h1>

          <p>
            Soluções completas para empresas que buscam qualidade, segurança
            alimentar e uma experiência melhor para seus colaboradores.
          </p>

          <div className="heroActions">
            <a className="button buttonWhite" href="#contato">Solicite uma proposta</a>
            <a className="button buttonOutline" href="#solucoes">Conheça as soluções</a>
          </div>

          <div className="heroProof">
            <div><strong>24×7</strong><span>capacidade operacional</span></div>
            <div><strong>37 anos</strong><span>experiência e tradição</span></div>
            <div><strong>sob medida</strong><span>para cada cliente</span></div>
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

      <section id="grupo" className="section manifesto">
        <div className="manifestoTitle">
          <span className="eyebrow">GRUPO ALPHA</span>
          <h2>Não servimos apenas refeições. Sustentamos a rotina de quem faz empresas acontecerem.</h2>
        </div>
        <div className="manifestoCopy">
          <p>
            Há 37 anos, a Alpha combina a essência da comida caseira com estrutura,
            processos, tecnologia e acompanhamento técnico para atender operações
            corporativas de diferentes portes.
          </p>
          <div className="signature">
            <span>ALPHA REFEIÇÕES</span>
            <strong>Experiência que se sente no prato e na operação.</strong>
          </div>
        </div>
      </section>

      <section id="solucoes" className="section solutionsPremium">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">SOLUÇÕES</span>
            <h2>Um modelo para cada operação.</h2>
          </div>
          <p>Do café da manhã ao jantar, da cozinha local à refeição transportada.</p>
        </div>

        <div className="solutionGrid">
          {solucoes.map(([n, titulo, texto]) => (
            <article className="solutionCard" key={titulo}>
              <div className="solutionNum">{n}</div>
              <h3>{titulo}</h3>
              <p>{texto}</p>
              <span className="solutionArrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="qualidade" className="section featureSection">
        <div className="featureImage tallImage">
          <Image
            src="/images/qualidade-alpha.webp"
            alt="Buffet e pratos preparados pelo Grupo Alpha"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <div className="imageOverlay" />
          <span className="imageLabel">OPERAÇÃO REAL • GRUPO ALPHA</span>
        </div>

        <div className="featureCopy">
          <span className="eyebrow">QUALIDADE E SEGURANÇA</span>
          <h2>Controle em cada etapa. Cuidado em cada refeição.</h2>
          <p>
            Recebimento, armazenamento, produção, expedição e serviço com
            processos padronizados e acompanhamento técnico.
          </p>

          <div className="featureList">
            <div><b>01</b><span>Segurança alimentar</span></div>
            <div><b>02</b><span>Nutricionistas e equipe técnica</span></div>
            <div><b>03</b><span>Cardápios personalizados</span></div>
            <div><b>04</b><span>Padronização e controle de processos</span></div>
          </div>
        </div>
      </section>

      <section id="estrutura" className="section structurePremium">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">ESTRUTURA</span>
            <h2>Escala para crescer junto com o cliente.</h2>
          </div>
          <p>Central em Barueri, operação contínua e logística preparada para diferentes demandas.</p>
        </div>

        <div className="structureGallery">
          <article className="galleryLarge">
            <Image src="/images/estrutura-alpha.webp" alt="Estrutura de refeitório Grupo Alpha" fill sizes="60vw" />
            <div className="galleryShade" />
            <div className="galleryText"><span>ESTRUTURA</span><strong>Ambientes preparados para grandes operações.</strong></div>
          </article>
          <article>
            <Image src="/images/frota-alpha.webp" alt="Frota Grupo Alpha Refeições" fill sizes="40vw" />
            <div className="galleryShade" />
            <div className="galleryText"><span>LOGÍSTICA</span><strong>Entrega com identidade e padrão.</strong></div>
          </article>
          <article>
            <Image src="/images/buffet-estacao.webp" alt="Estação de buffet Grupo Alpha" fill sizes="40vw" />
            <div className="galleryShade" />
            <div className="galleryText"><span>OPERAÇÃO</span><strong>Apresentação também é experiência.</strong></div>
          </article>
        </div>
      </section>

      <section className="portalPremium">
        <div className="portalBrand">
          <div className="portalLogo">
            <Image src="/logo-alpha.png" alt="" width={120} height={120} />
          </div>
          <span className="eyebrow light">ECOSSISTEMA DIGITAL ALPHA</span>
        </div>

        <div className="portalText">
          <h2>O cuidado com o colaborador também é digital.</h2>
          <p>
            Documentos, comunicados, informações pessoais e serviços em um
            ambiente próprio, conectado à experiência Alpha.
          </p>
        </div>

        <div className="portalActions">
          <a className="button buttonWhite" href={site.portalColaborador}>Entrar no Portal</a>
          <div>
            <a href={site.primeiroAcesso}>Primeiro acesso</a>
            <a href={site.recuperarSenha}>Recuperar senha</a>
          </div>
        </div>
      </section>

      <section id="experiencias" className="section experiences">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">ALÉM DA REFEIÇÃO</span>
            <h2>Momentos que transformam alimentação em experiência.</h2>
          </div>
        </div>

        <div className="experienceGallery">
          <article className="experienceMain">
            <Image src="/images/evento-alpha.webp" alt="Evento corporativo Grupo Alpha" fill sizes="50vw" />
            <div className="galleryShade" />
            <div className="galleryText"><span>EVENTOS</span><strong>Datas especiais com uma entrega à altura.</strong></div>
          </article>
          <article>
            <Image src="/images/buffet-alpha.webp" alt="Buffet Grupo Alpha Refeições" fill sizes="25vw" />
            <div className="galleryShade" />
            <div className="galleryText"><span>FRESCOR</span><strong>Cor, variedade e apresentação.</strong></div>
          </article>
          <article>
            <Image src="/images/churrasco-alpha.webp" alt="Ação especial Grupo Alpha" fill sizes="25vw" />
            <div className="galleryShade" />
            <div className="galleryText"><span>EXPERIÊNCIA</span><strong>Ações que quebram a rotina.</strong></div>
          </article>
        </div>
      </section>

      <section id="contato" className="contactPremium">
        <div className="contactCopy">
          <span className="eyebrow light">FALE COM A ALPHA</span>
          <h2>Sua operação merece uma solução sob medida.</h2>
          <p>
            Conte um pouco sobre sua necessidade e nossa equipe comercial entra em contato.
          </p>

          <div className="contactInfo">
            <span>{site.telefone}</span>
            <a href={site.maps} target="_blank" rel="noreferrer">{site.endereco}</a>
            <a href={site.instagram} target="_blank" rel="noreferrer">@grupoalpharefeicoes</a>
          </div>
        </div>

        <form className="formCard">
          <div className="formRow">
            <label>Nome<input placeholder="Seu nome" /></label>
            <label>Empresa<input placeholder="Nome da empresa" /></label>
          </div>
          <div className="formRow">
            <label>WhatsApp<input placeholder="(11) 99999-9999" /></label>
            <label>E-mail<input type="email" placeholder="voce@empresa.com.br" /></label>
          </div>
          <div className="formRow">
            <label>Refeições por dia<input placeholder="Ex.: 350" /></label>
            <label>
              Serviço
              <select defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Refeição Local</option>
                <option>Refeição Transportada</option>
                <option>Marmitex</option>
                <option>Café da Manhã / Lanches</option>
                <option>Eventos Corporativos</option>
                <option>Ainda não sei</option>
              </select>
            </label>
          </div>
          <label>Mensagem<textarea placeholder="Conte um pouco sobre sua operação..." /></label>
          <button type="button" className="button buttonRed">Quero receber uma proposta</button>
          <small>Protótipo visual — integração do envio entra na próxima etapa.</small>
        </form>
      </section>

      <footer className="footerPremium">
        <div className="footerLogo">
          <Image src="/logo-alpha.png" alt="Grupo Alpha Refeições" width={132} height={132} />
        </div>
        <div className="footerCol">
          <strong>Grupo Alpha</strong>
          <a href="#grupo">Quem somos</a>
          <a href="#solucoes">Soluções</a>
          <a href="#qualidade">Qualidade</a>
          <a href="#estrutura">Estrutura</a>
        </div>
        <div className="footerCol">
          <strong>Colaboradores</strong>
          <a href={site.portalColaborador}>Portal do Colaborador</a>
          <a href={site.primeiroAcesso}>Primeiro acesso</a>
          <a href={site.recuperarSenha}>Recuperar senha</a>
        </div>
        <div className="footerCol footerContact">
          <strong>Matriz</strong>
          <a href={site.maps} target="_blank" rel="noreferrer">{site.endereco}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <span>© 2026 Grupo Alpha Refeições</span>
        </div>
      </footer>
    </main>
  );
}
