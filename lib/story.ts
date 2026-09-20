export type Stage = {
  kicker: string;
  title: string;
  body: string;
};

export type Quadrant = {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  mode: "build" | "talk";
  stages: [Stage, Stage, Stage];
};

export const LINKEDIN = "https://www.linkedin.com/in/robertomachado/";

export function sectorPanel(id: number) {
  return `/setores/${String(id).padStart(2, "0")}.jpg`;
}

export function sectorStageImage(id: number, stage: number) {
  return `/setores/${String(id).padStart(2, "0")}-${stage + 1}.jpg`;
}

export const quadrants: Quadrant[] = [
  {
    id: 1,
    slug: "negocio",
    name: "O negócio",
    subtitle: "Todo negócio digital começa simples.",
    mode: "build",
    stages: [
      {
        kicker: "1.1",
        title: "Todo negócio digital começa simples.",
        body: "Uma casa. Uma operação. Nada além do essencial.",
      },
      {
        kicker: "1.2",
        title: "Um cliente. Um produto. Um pedido.",
        body: "Primeiros elementos surgem.",
      },
      {
        kicker: "1.3",
        title: "Até que começa a crescer.",
        body: "A operação começa.",
      },
    ],
  },
  {
    id: 2,
    slug: "complexidade",
    name: "A complexidade aparece",
    subtitle: "Mais canais. Mais pessoas. Mais decisões.",
    mode: "build",
    stages: [
      {
        kicker: "2.1",
        title: "Mais canais. Mais pessoas. Mais decisões.",
        body: "Canais começam a surgir.",
      },
      {
        kicker: "2.2",
        title: "Crescer também significa lidar com complexidade.",
        body: "Conexões se expandem.",
      },
      {
        kicker: "2.3",
        title: "A operação ganha escala.",
        body: "O mapa já não cabe numa mesa só.",
      },
    ],
  },
  {
    id: 3,
    slug: "conexoes",
    name: "Quando as conexões falham",
    subtitle: "O problema não está em uma única parte.",
    mode: "build",
    stages: [
      {
        kicker: "3.1",
        title: "O problema não está em uma única parte.",
        body: "Muito tráfego. Pouca conversão.",
      },
      {
        kicker: "3.2",
        title: "Estoque sem integração.",
        body: "Conexões se rompem.",
      },
      {
        kicker: "3.3",
        title: "Canais sem estratégia. Clientes sem recompra.",
        body: "O cliente sente o que a operação não vê.",
      },
    ],
  },
  {
    id: 4,
    slug: "entrada",
    name: "Minha entrada",
    subtitle: "Uma visão sistêmica para conectar as partes.",
    mode: "build",
    stages: [
      {
        kicker: "4.1",
        title: "Uma visão sistêmica para conectar as partes.",
        body: "Eu analiso a operação como um sistema.",
      },
      {
        kicker: "4.2",
        title: "Tudo passa a fazer sentido.",
        body: "As peças continuam as mesmas. A leitura muda.",
      },
      {
        kicker: "4.3",
        title: "Roberto Machado",
        body: "Estratégia e operações digitais.",
      },
    ],
  },
  {
    id: 5,
    slug: "diagnosticar",
    name: "Diagnosticar",
    subtitle: "Antes de propor, eu preciso entender.",
    mode: "build",
    stages: [
      {
        kicker: "5.1",
        title: "Antes de propor, eu preciso entender.",
        body: "Onde estamos? Onde queremos chegar?",
      },
      {
        kicker: "5.2",
        title: "O que está impedindo isso de acontecer?",
        body: "Pontos críticos acendem no mapa.",
      },
      {
        kicker: "5.3",
        title: "As questões que guiam o trabalho.",
        body: "Scans, indicadores e gargalos da operação.",
      },
    ],
  },
  {
    id: 6,
    slug: "organizar",
    name: "Organizar",
    subtitle: "Estratégia, operação e resultado alinhados.",
    mode: "build",
    stages: [
      {
        kicker: "6.1",
        title: "Estratégia, operação e resultado alinhados.",
        body: "Áreas ganham forma.",
      },
      {
        kicker: "6.2",
        title: "Tudo se conecta.",
        body: "Estratégia. Operação. Dados. Experiência. Gestão.",
      },
      {
        kicker: "6.3",
        title: "Experiência abre o caminho inteiro.",
        body: "UX, CRO, atendimento, entrega, embalagem, pós-venda.",
      },
    ],
  },
  {
    id: 7,
    slug: "conectar",
    name: "Conectar",
    subtitle: "Ferramentas são peças da estratégia.",
    mode: "build",
    stages: [
      {
        kicker: "7.1",
        title: "Ferramentas são peças da estratégia.",
        body: "VTEX, Shopify, Google, Meta, WhatsApp.",
      },
      {
        kicker: "7.2",
        title: "Tudo conectado.",
        body: "A peça só vale no encaixe.",
      },
      {
        kicker: "7.3",
        title: "Ferramentas não são a estratégia.",
        body: "São peças dela.",
      },
    ],
  },
  {
    id: 8,
    slug: "execucao",
    name: "Do plano à execução",
    subtitle: "Estratégia que não chega à operação é apenas apresentação.",
    mode: "build",
    stages: [
      {
        kicker: "8.1",
        title: "Estratégia que não chega à operação é apenas apresentação.",
        body: "Diagnóstico, prioridades, plano.",
      },
      {
        kicker: "8.2",
        title: "A operação avança.",
        body: "Responsáveis, execução, indicadores, evolução.",
      },
      {
        kicker: "8.3",
        title: "Da estratégia ao resultado real.",
        body: "Do plano ao impacto.",
      },
    ],
  },
  {
    id: 9,
    slug: "projetos",
    name: "Projetos reais",
    subtitle: "Problemas reais. Operações reais.",
    mode: "talk",
    stages: [
      {
        kicker: "9.1",
        title: "Problemas reais. Operações reais.",
        body: "Casa e construção. Moda. Indústria B2B. Arte e cultura. Varejo. Serviços.",
      },
      {
        kicker: "9.2 · Case",
        title: "Galeria Tapera",
        body: "O cenário. O desafio. O que foi feito. O que mudou.",
      },
      {
        kicker: "9.3 · Resultados",
        title: "Cenário, desafio e impacto.",
        body: "Clique para explorar o que a operação pediu.",
      },
    ],
  },
  {
    id: 10,
    slug: "trabalhar",
    name: "Como trabalhar comigo",
    subtitle: "Diferentes caminhos para o mesmo objetivo.",
    mode: "talk",
    stages: [
      {
        kicker: "10.1",
        title: "Diferentes caminhos para o mesmo objetivo.",
        body: "Diagnóstico, planejamento, consultoria, mentoring, projetos, treinamentos.",
      },
      {
        kicker: "10.2 · Oferta",
        title: "Três portas. O mesmo sistema.",
        body: "E-commerce. Funil de vendas. Experiência de compra.",
      },
      {
        kicker: "10.3 · Próximo passo",
        title: "Vamos conversar.",
        body: "Escolha o caminho ou fale direto.",
      },
    ],
  },
  {
    id: 11,
    slug: "quem",
    name: "Quem está por trás",
    subtitle: "Pessoas constroem operações.",
    mode: "talk",
    stages: [
      {
        kicker: "11.1",
        title: "Pessoas constroem operações.",
        body: "Eu gosto de negócios difíceis de explicar em uma frase.",
      },
      {
        kicker: "11.2 · Trajetória",
        title: "Experiência, projetos, aprendizados.",
        body: "Mais de duas décadas entre loja, lead e a mesa da decisão.",
      },
      {
        kicker: "11.3 · Propósito",
        title: "Mais que currículo.",
        body: "Conectar estratégia, tecnologia, pessoas e operação para construir negócios mais sólidos e duradouros.",
      },
    ],
  },
  {
    id: 12,
    slug: "contato",
    name: "Encerramento",
    subtitle: "Tudo conectado. Vamos conversar?",
    mode: "talk",
    stages: [
      {
        kicker: "12.1",
        title: "Tudo conectado. Vamos conversar?",
        body: "Seu negócio digital já possui muitas dessas peças.",
      },
      {
        kicker: "12.2 · Síntese",
        title: "A pergunta é: elas estão trabalhando juntas?",
        body: "Negócios digitais não crescem por partes.",
      },
      {
        kicker: "12.3 · Convite",
        title: "Vamos olhar sua operação juntos?",
        body: "Conversar comigo.",
      },
    ],
  },
];

export const services = [
  {
    href: "/ecommerce",
    name: "E-commerce",
    line: "A loja é um sistema. Não um site com pagamento.",
  },
  {
    href: "/funil",
    name: "Funil de vendas",
    line: "Lead sem operação é custo.",
  },
  {
    href: "/experiencia",
    name: "Experiência de compra",
    line: "Não termina no clique. Termina quando o cliente volta.",
  },
] as const;

export const sectors = [
  "Casa e construção",
  "Moda",
  "Indústria B2B",
  "Arte e cultura",
  "Varejo",
  "Serviços",
];

export const formats = [
  "Diagnóstico",
  "Planejamento",
  "Consultoria",
  "Business Mentoring",
  "Projetos especiais",
  "Treinamentos",
];

export const tools = ["VTEX", "Shopify", "Google", "Meta", "WhatsApp"];
