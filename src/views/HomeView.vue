<template>
  <main class="grid justify-content-center text-center flex-column">
    <section class="news__section news__section--paralax">
      <div class="container">
        <h2>O futuro do trabalho é remoto?</h2>
        <h3>
          A procura por vagas que vão além do escritório aumentou, mas ainda
          existem dúvidas se essa modalidade é inclusiva
        </h3>
      </div>
    </section>
    <section class="news__section my-8 py-3">
      <div class="container pb-5">
        <p>
          Gustavo Rost, 22, acorda todo dia para trabalhar por volta das oito
          horas da manhã. Ele mora no bairro Jardim Carvalho, na Zona Leste de
          Porto Alegre e divide com a namorada um apartamento de três quartos
          que já era propriedade da família. Filho de uma química e um advogado,
          a faculdade foi uma certeza desde sua infância e a área de interesse
          também era clara: Ciência da Computação. Por escolher se
          profissionalizar na tecnologia, o trabalho remoto foi uma realidade
          esperada por ele antes mesmo de a pandemia tornar esse formato uma
          necessidade.
        </p>
      </div>
      <div id="first-section" class="inside-paralax"></div>
      <div class="container pt-8">
        <p>
          Segundo a pesquisa Gestão de Pessoas na Crise covid-19, elaborada pela
          Fundação Instituto de Administração (FIA) em 2020, 46% das empresas
          adotaram o modelo remoto como medida emergencial para não colocar em
          risco os trabalhadores. Para Gustavo, esse modelo se manteve durante e
          após o período de isolamento, uma prática já comum para quem trabalha
          com computação.
        </p>
        <p>
          O jovem ingressou na graduação na Unisinos em 2022 e sempre trabalhou
          de casa. Sobre a possibilidade de voltar ao formato tradicional de
          trabalho, ressalta:
          <q
            >[o trabalho remoto] é cansativo, igual ao trabalho presencial, no
            escritório, mas não deixa de ser produtivo, continuo tendo as mesmas
            responsabilidades, só que estou no conforto do meu lar. Nem por um
            salário maior ou outros benefícios eu trocaria pelo presencial</q
          >.
        </p>
      </div>
    </section>
    <section
      class="news__section news__section--image grid align-content-center"
    >
      <div
        class="col-12 md:col container flex flex-column align-items-center justify-content-center md:py-8 md:pr-8"
      >
        <p>
          Do outro lado da cidade, no Centro Histórico, a jornalista Brenda
          Vidal tem uma rotina parecida, mas uma trajetória completamente
          diferente. A atual gestora de redes sociais de um portal de jornalismo
          independente se formou na faculdade sem ter condições de comprar um
          notebook. Cópias, impressões e o seu celular foram suas ferramentas de
          estudo, sendo suas principais aliadas na trajetória acadêmica. Com
          determinação, Brenda se formou na Universidade Federal do Rio Grande
          do Sul
          <abbr
            title="Universidade Federal do Rio Grande
          do Sul"
            >(UFRGS)</abbr
          >
          em 2018 e já tinha seu lugar no mercado.
        </p>

        <p>
          Em 2020, ainda morando na antiga casa com sua mãe, por conta da
          pandemia, a comunicadora migrou para o modelo remoto na empresa em que
          já trabalhava. Agora ela tinha o computador, mas o espaço não era
          estruturado para trabalhar, nem era favorável à sua saúde.
        </p>
      </div>
      <div class="col-12 md:col news__image flex align-items-center">
        <img :src="`/src/assets/img/brenda_img.webp`" alt="" srcset="" />
      </div>
    </section>
    <section class="news__section container py-8">
      <blockquoteVue :data="firstQuotation"></blockquoteVue>
      <p>
        Foi sem escrivaninha, utilizando o sofá de casa e a parede do quarto de
        sua mãe que Brenda experimentou o modelo remoto pela primeira vez,
        atuando como repórter. Sem saber que esse modelo iria fazer parte da sua
        rotina, a jornalista continuou sendo pressionada pelo cenário
        pós-pandêmico, já que as únicas vagas que surgiam eram remotas. Para
        conseguir arcar com esse novo desafio do mercado, o que, por direito,
        deveria ser responsabilidade das empresas, Brenda teve que ir atrás. A
        jornalista equipou o seu ambiente com o essencial para poder produzir,
        mas só conseguiu isso gastando o dinheiro de trabalhos informais que
        também fazia.
      </p>
    </section>
    <section class="news__section py-8">
      <div class="container">
        <p>
          Em dezembro de 2023, o Google Trends divulgou um levantamento sobre o
          que os brasileiros mais pesquisaram na plataforma ao longo do ano.
          Entre as tendências que marcaram o período, o mercado de trabalho não
          poderia ficar de fora. Porém, diferente dos anos anteriores, não foi
          somente a pesquisa por “vaga de trabalho” que fez parte da rotina da
          população. Agora, as “vagas home office” ficaram em primeiro lugar nas
          buscas por novas oportunidades no Google.
        </p>
        <p>
          Só no ano passado, o aumento foi de 50%, mas segundo pesquisas
          anteriores, é possível ver que desde 2020, tanto profissionais quanto
          empresas têm questionado se manter uma base fixa ainda é necessário
          para exercer da melhor forma a rotina de trabalho. Mas ao olhar para
          as experiências como da Brenda e do Gustavo é inevitável questionar:
          será que esse modelo é o melhor para todo mundo?
        </p>
      </div>
    </section>
    <section class="news__section my-8 py-3">
      <iframe
        width="90%"
        height="780"
        src="https://www.youtube.com/embed/2onN7BlDvrk?si=kwKEN9wYfinG4JIz?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </section>
    <section class="news__section py-6">
      <div class="container">
        <h3 class="py-8 my-2">Home office x Trabalho Remoto</h3>

        <p>
          Há uma diferença importante entre o termo home office e trabalho
          remoto. Enquanto “home office” é uma expressão que vem do inglês e
          refere-se ao trabalho realizado no ambiente doméstico, o trabalho
          remoto, em teoria, é aquele que pode ser feito em qualquer lugar.
          Neste segundo caso, o profissional poderia realizar suas funções em
          casa, ou até mesmo, na praia se assim desejasse. O problema é que
          essas definições se confundem, principalmente entre as empresas que
          adotam os termos como sinônimos.
        </p>
        <p>
          O trabalho remoto, ou teletrabalho, também é o formato reconhecido
          pela legislação brasileira e assegurado pela Lei nº 14.442/22,
          promulgada em setembro de 2022. É ela que estabelece as condições para
          que o trabalho à distância seja realizado de forma segura e eficaz,
          garantindo os direitos dos profissionais. Contudo, as condições do
          serviço não podem ser relativas.
        </p>
        <p>
          Para a professora da Universidade Federal do Rio Grande do Sul e PhD
          em Recursos Humanos, Christine da Silva, existe um problema no
          trabalho remoto que está mais ligado à lógica do RH e das contratações
          do que no modelo. A profissional afirma que ao contratar pessoas
          periféricas, mães, pessoas com deficiência, existem formas de fazer
          adaptações no trabalho remoto para que ele seja cada vez mais viável.
          “Ele tem alto potencial de ser inclusivo. A pessoa periférica, que
          mora extremamente longe dos grandes centros ou dos centros comerciais,
          não vai ter que pegar três ônibus num dia, correndo risco de assalto,
          de violência, de trânsito, de se atrasar. Essas pessoas vão poder
          organizar sua rotina, podendo evitar os estímulos da rua, o estresse e
          o tempo”, diz a especialista.
        </p>
        <p>
          O problema é que as vagas não se preocupam em abraçar as diferenças.
          Segundo a PhD, o ideal seria que as organizações fossem inclusivas,
          desenvolvessem vagas adaptadas a diferentes necessidades, em que cada
          profissional pudesse se destacar. Para ela, isso deveria ser
          prioridade para as empresas independentes se o trabalho é remoto ou
          presencial. Porém, na prática, não é assim que acontece.
        </p>
        <p>
          Christine afirma que um trabalho que é feito fora de uma base
          presencial, seja ele feito de casa ou em outro espaço, há
          circunstâncias importantes para serem asseguradas, como as condições
          organizacionais, físicas e cognitivas do empregado.
        </p>
        <blockquoteVue :data="secondQuotation" class="mb-8"></blockquoteVue>
        <div class="flex news__icon-bar justify-content-around">
          <div class="flex md:col-5 gap-3">
            <i class="fa-solid fa-house"></i>
            <span>
              <b>Home Office:</b><br />
              trabalho realizado em casa
            </span>
          </div>
          <div class="flex md:col-5 gap-3">
            <i class="fa-solid fa-umbrella-beach"></i>
            <span>
              <b>Trabalho Remoto/Tele-trabalho:</b><br />
              trabalho que se concentra fora de uma base fixa, podendo ser
              realizado em qualquer lugar
            </span>
          </div>
        </div>
        <p class="mt-8">
          Isso significa que a base de um trabalho remoto saudável é a
          flexibilidade, tanto para trabalhador quanto para empresa. Para a
          estudante de publicidade que há três anos atua na área, Isabela
          Balconi, 26, os benefícios são vantajosos no remoto. “Maior
          concentração, mais conforto, silêncio, não precisar me locomover pela
          questão de tempo e questão financeira também”, conta a estudante. Em
          contrapartida, o desenvolvimento de relações profissionais e pessoais
          foi abalado. “Não consigo me aproximar tanto ou confiar, porque a
          abertura para amizades fica menor”, explica Isabela.
        </p>
      </div>
    </section>
    <section
      class="news__section news__section--image grid align-items-center"
      id="isabela"
    >
      <div class="md:col-3 news__image">
        <img :src="`/src/assets/img/isabela_img-1.webp`" alt="" srcset="" />
      </div>
      <div class="md:col-6 px-8">
        <p>
          A flexibilidade também se apresenta como uma ferramenta benéfica para
          o bem estar social. Para Isabela, o principal desafio que enfrentou
          estando nesse modelo de trabalho foi a solidão e a insegurança. "Foi
          minha primeira experiência na posição que ocupo hoje, então sentia que
          nunca desenvolveria a confiança que tenho hoje se estivesse sozinha em
          casa", comenta a estudante de publicidade.
        </p>
        <p></p>
      </div>
      <div class="md:col-3 news__image">
        <img :src="`/src/assets/img/isabela_img-2.webp`" alt="" srcset="" />
      </div>
    </section>
    <section class="news__section">
      <div class="container py-8">
        <p>
          O mesmo acontece com o estudante de Ciências Econômicas, Matheus
          Stremel, 25. Há 5 anos, ele está no mercado de trabalho e já enfrentou
          diferentes cenários: presencial, remoto e híbrido. Depois da pandemia,
          quando toda sua equipe voltou ao escritório, ele escolheu permanecer
          em casa para cuidar da mãe que enfrentava um câncer.
        </p>
        <p>
          A possibilidade de escolha fez a diferença para que ele não deixasse
          de trabalhar mesmo em um momento delicado, mas também trouxe os
          desafios que o distanciamento dos colegas exige.
        </p>
        <blockquoteVue :data="secondQuotation" class="mb-8"></blockquoteVue>
      </div>
      <div id="third-section" class="inside-paralax"></div>
      <div class="container py-8">
        <p>
          Por isso a flexibilidade é tão importante para garantir que o
          trabalhador encontre a forma de trabalho que melhor se encaixe em sua
          rotina. Precisar ou não de uma base fixa é uma discussão que deve
          estar centrada no bem-estar do profissional, e não necessariamente
          apenas nas vantagens para as empresas.
        </p>
        <p>
          Para além dos benefícios individuais para quem trabalha, os dados mais
          recentes mostram que o modelo remoto também enfrenta outro desafio:
          reconhecer e se adaptar às diferenças individuais de cada pessoa.
        </p>
      </div>
    </section>
    <section
      class="news__section news__section--chart container grid text-center justify-content-between align-items-center"
    >
      <h2 class="col-12 mb-4">
        Distribuição salarial por etnia no trabalho remoto em âmbito nacional.
      </h2>
      <div class="col-12 md:col-6">
        <ChartsPie :data="data" :options="options"></ChartsPie>
      </div>
      <div class="col-12 md:col-6 grid">
        <img
          :src="`/src/assets/img/chart-4.svg`"
          alt=""
          class="md:col-12 col-12"
        />
        <div class="grid col-12 justify-content-between">
          <p class="md:col-6 col-12 news__subtitle">
            29,6% <span>Pretos ou pardos</span>
          </p>
          <p class="md:col-6 col-12 news__subtitle">
            70,3% <span>Brancos</span>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BlockquoteVue from "../components/atom/BlockquoteVue.vue"
import ChartsPie from "../components/molecules/ChartsPie.vue"

export default {
  name: "Home",
  components: { ChartsPie, BlockquoteVue },
  data() {
    return {
      data: {
        labels: ["Pretos ou pardos", "Brancos"],
        datasets: [
          {
            label:
              "Distribuição salarial por etnia no trabalho remoto em âmbito nacional",
            backgroundColor: ["#B2784A", "#EBDACC"],
            data: [29.6, 70.3],
            hoverOffset: 10,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true, // Adicione isso para exibir a legenda (pode ser false se não quiser)
            position: "bottom", // Posição da legenda
          },
          subtitle: {
            display: true,
            text: "Custom Chart Subtitle",
          },
        },
        canvas: {
          width: 200, // ajuste o valor conforme necessário
          height: 200, // ajuste o valor conforme necessário
        },
      },
      firstQuotation: {
        quote:
          "Era muito desconfortável. Eu passava o dia inteiro trabalhando no sofá e com o notebook nas coxas, então zero ergonomia. Sem o mínimo, eu fui tocando e sendo cobrada a produzir da mesma forma.",
        name: "Brenda Vidal",
      },
      secondQuotation: {
        quote:
          "Cada organização é uma, cada tipo de cargo é um e as pessoas são diferentes. Esse modelo não serve para todo mundo ou ao menos não serve em curto prazo. Existe toda uma preparação necessária para isso. Ele é um trabalho que é feito à distância, fora de uma base institucional presencial consolidada e ele pode ser muito bom, mas algumas pessoas realmente podem não se adaptar por vários motivos.",
        name: "Christine Souza, PhD em recursos humanos",
      },
      thirdQuitation: {
        quote:
          "O trabalho remoto tem muitos benefícios, mas somos seres sociáveis e acredito que precisamos de gente.",
        name: "Matheus Stremel",
      },
    }
  },
}
</script>

<style lang="scss">
main {
  .markdown-text {
    background: var(--marrom-claro);
    color: var(--bege);
    animation: background 1s ease-in;
  }
  .news {
    &__icon-bar {
      font-family: "Roboto";
      text-align: start;
      b {
        font-size: 1.25rem;
        color: var(--marrom-escuro);
      }
      i {
        font-size: 3.25rem;
        color: var(--marrom-escuro);
      }
    }
    &__subtitle {
      font-size: 1rem !important;
      width: fit-content;
      &:first-child {
        color: var(--marrom-claro);
      }
      &:last-child {
        color: var(--bege);
      }
    }
    &__image {
      background: url("../assets/img/brenda_img.webp");
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      height: 110vh;
      display: block;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.1);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9.1px);
        -webkit-backdrop-filter: blur(9.1px);
        z-index: 0;
      }
      @media (max-width: 992px) {
        height: auto;
      }
    }
    &__section {
      .inside-paralax {
        background-attachment: fixed;
        background-size: cover;
        width: 100vw;
        height: 100vh;
      }
      &:not(.news__section--paralax) {
        h3 {
          font-size: 4rem;
          font-weight: 300;
          position: relative;
          width: fit-content;
          margin: 0 auto;
          font-size: 3rem;
        }
      }
      &:nth-child(odd) {
        background-color: var(--bege);
      }
      &--chart {
        h2 {
          font-size: 2.5rem;
        }
      }
      blockquote {
        font-style: italic;
        position: relative;
        &::before {
          content: "";
          background: url("../assets/img/quotation.svg");
          background-size: 100%;
          width: 80px;
          height: 80px;
          display: block;
          left: -70px;
          top: -30px;
          position: absolute;
        }
        p {
          font-weight: 500;
        }
        span {
          font-size: 1.25rem;
        }
      }
      &--image {
        background: var(--bege);
        max-height: 100vh;
        &:not(#isabela) {
          padding-left: 10%;
          img {
            transform: translateX(-60px);
          }
        }
        &#isabela {
          background: var(--white);
          .news__image {
            height: fit-content;
            &:first-child {
              background-image: url("../assets/img/isabela_img-1.webp");
              transform: translateY(-50px);
            }
            &:last-child {
              background-image: url("../assets/img/isabela_img-2.webp");
              transform: translateY(50px);
            }
          }
        }
        img {
          object-fit: cover;
          position: relative;
          z-index: 1;
        }
      }
      &.container {
        z-index: 1;
        margin: 4rem auto;
      }
      p {
        margin-bottom: 3rem;
        font-size: 1.5rem;
        text-align: start;
        line-height: 2;
        font-weight: 400;
        q {
          font-style: italic;
        }
      }
      &--paralax {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-image: url("../assets/img/paralax.gif") !important;
        background-attachment: fixed;
        background-size: cover;
        &::before {
          content: "";
          background-color: #000000b2;
          width: 100vw;
          height: 100vh;
          display: block;
          position: absolute;
          top: -10px;
          left: 0;
          z-index: -1;
        }

        h2,
        h3,
        h5 {
          z-index: 1;
          color: var(--white);
        }
        h2 {
          font-size: 4.25rem;
          position: relative;
          &::after {
            content: "";
            border: 2px solid var(--bege);
            height: 3px;
            width: 100%;
            position: absolute;
            display: block;
            bottom: 0;
          }
        }
        h3 {
          font-size: 1.75rem;
          font-weight: 400;
        }
      }
    }
  }
}
#first-section {
  background-image: url("../assets/img/gustavo_img.webp");
}
#third-section {
  background-image: url("../assets/img/matheus_img.webp");
}
@keyframes background {
  from {
    max-width: 0;
  }
  to {
    max-width: 100%;
  }
}
</style>>