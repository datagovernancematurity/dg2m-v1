import dimensionsPtBR from './dimensions-pt-BR';

const ptBR = {
  common: {
    level: 'Nível',
    people: 'Pessoas',
    policies: 'Políticas',
    capabilities: 'Capacidades',
    improvement: 'Melhorias e práticas sugeridas',
    mainAspects: 'Aspectos principais avaliados',
    dimensions: 'Dimensões',
    choose: 'Escolha uma das dimensões ao lado.'
  },
  dimensionsData: dimensionsPtBR,
  nav: {
    title: 'Framework DG2M - Versão 1',
    about: 'Sobre',
    levels: 'Níveis',
    dimensions: 'Dimensões',
    roles: 'Papéis',
    survey: 'Ajude a Aprimorar esse Framework!'
  },
  footer: {
    copyright: '© 2025 DG2M. Todos os direitos reservados.'
  },
  main: {
    title: 'Modelo de Maturidade de Governança de Dados (DG2M): O Framework',
    subtitle: 'Orientando Organizações para o Uso Estratégico de Dados',
    about: 'Sobre',
    aboutContent: 'Para operacionalizar o DG2M, é necessária uma metodologia que permita medir o nível atual de maturidade de uma organização nas dimensões e aspectos definidos. A metodologia tem caráter tanto diagnóstico — voltada à identificação de lacunas existentes — quanto desenvolvimental — com o objetivo de orientar melhorias estratégicas ao longo do tempo. O modelo é composto por seis níveis de maturidade, que vão do Nível 0 (Não Iniciado) ao Nível 5 (Otimizado).',
    dimensionsTitle: 'Dimensões Avaliadas',
    dimensionsContent: 'A maturidade organizacional é avaliada a partir de seis dimensões centrais:',
    dimensionsList: [
      'Estratégia e Governança de Dados',
      'Equipes, Pessoas e Estrutura Organizacional',
      'Formalização e Processos de Gestão de Dados',
      'Qualidade dos Dados',
      'Infraestrutura de Dados',
      'Dados Abertos (opcional)'
    ],
    aspectsTitle: 'Aspectos Analíticos',
    aspectsContent: 'O modelo avalia cada dimensão com base em três aspectos analíticos:',
    aspectPeople: 'analisa o envolvimento dos profissionais na gestão de dados, incluindo conhecimento técnico, engajamento das equipes e clareza nas responsabilidades.',
    aspectPolicies: 'examina as diretrizes, normas e processos institucionais relacionados ao uso e à gestão de dados, como segurança, privacidade e conformidade com legislações.',
    aspectCapabilities: 'considera os recursos técnicos disponíveis, como ferramentas, tecnologias e infraestrutura voltadas ao processamento, análise e integração de dados.',
    aspectsConclusion: 'A combinação desses três aspectos permite uma avaliação da maturidade em governança de dados, cobrindo desde o engajamento humano até os recursos técnicos utilizados na prática. Cada resposta da avaliação é associada a um nível de maturidade conforme critérios predefinidos.',
    minLevelTitle: 'Regra do Nível Mínimo',
    minLevelContent: 'A maturidade de cada dimensão é determinada pela Regra do Nível Mínimo, ou seja, considera-se o menor nível entre os três aspectos, destacando possíveis gargalos.'
  },
  levels: {
    title: 'Níveis de Maturidade em Governança de Dados',
    subtitle: 'Este modelo define seis níveis de maturidade que ajudam as organizações a avaliar e aprimorar suas práticas de governança de dados. Cada nível representa uma etapa na jornada que vai de práticas de dados não estruturadas até uma governança de dados totalmente otimizada e orientada pela inovação.',
    level0: {
      title: 'Nível 0: Não Iniciado',
      description: 'Neste estágio, a organização não possui iniciativas nem consciência em relação à governança de dados ou à ciência de dados. Não há reconhecimento do valor estratégico dos dados, e as decisões são tomadas sem qualquer apoio informacional estruturado.\n\nOrganizações neste nível carecem completamente de práticas e estruturas para a gestão de dados. A ausência de processos e de qualquer esforço voltado à governança dificulta que se obtenham os benefícios que uma gestão eficaz de dados poderia proporcionar.'
    },
    level1: {
      title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
      description: 'No nível inicial, as primeiras iniciativas relacionadas à gestão de dados começam a surgir, mas de maneira desorganizada e sem alinhamento estratégico. A organização está em uma fase de aprendizado, explorando ferramentas e tecnologias sem uma visão estruturada de longo prazo.\n\nAs decisões são reativas e baseadas na intuição, com projetos exploratórios ocasionais voltados à compreensão dos possíveis usos dos dados. No entanto, a falta de documentação e de processos padronizados limita a evolução dessas iniciativas.'
    },
    level2: {
      title: 'Nível 2: Repetível – Práticas Emergentes, Iniciativas Incipientes e Transformação de Ativos',
      description: 'Além dos avanços do estágio anterior, neste nível os dados passam a ser reconhecidos como um ativo estratégico, e a organização começa a utilizar ferramentas como dashboards e processos básicos para apoiar a tomada de decisões.\n\nO desenvolvimento de protótipos e os primeiros investimentos tecnológicos caracterizam esse nível. Algumas áreas começam a padronizar processos, e as decisões passam a se basear em informações extraídas dos dados. Contudo, a adoção dessas práticas ainda ocorre de maneira isolada dentro da organização, sem uma governança formal consolidada.'
    },
    level3: {
      title: 'Nível 3: Definido – Estruturado e Padronizado',
      description: 'Com base nos avanços dos estágios anteriores, neste nível a governança de dados torna-se parte integrante da estratégia organizacional, com processos bem definidos e documentados. A organização estabelece papéis e responsabilidades claros para a gestão de dados, promovendo uma abordagem estruturada e integrada entre diferentes áreas.\n\nA padronização dos processos permite maior eficiência e confiabilidade no uso dos dados. Além disso, ferramentas avançadas de análise e monitoramento começam a ser implementadas, aumentando a capacidade da organização de tomar decisões baseadas em dados.'
    },
    level4: {
      title: 'Nível 4: Gerenciado – Medido e Preditivo',
      description: 'Além dos avanços dos estágios anteriores, neste nível a organização atinge um controle significativo sobre seus processos de governança de dados, utilizando métricas quantitativas e indicadores estatísticos para monitorar, gerenciar e prever resultados.\n\nAs decisões tornam-se totalmente orientadas por dados, eliminando a subjetividade e reduzindo os riscos operacionais. A governança baseia-se em indicadores-chave de desempenho (KPIs), assegurando conformidade contínua e eficiência. Sistemas e processos são monitorados em tempo real para garantir que o desempenho esteja adequado e alinhado às necessidades do negócio.'
    },
    level5: {
      title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
      description: 'Avançando, no nível mais avançado a governança de dados e a ciência de dados tornam-se ativos estratégicos, impulsionando a inovação e promovendo um ciclo de melhoria contínua baseado em aprendizado e análise preditiva.\n\nA organização utiliza processos altamente refinados, com métricas, indicadores e análises constantemente aprimorados para atender aos objetivos estratégicos. Soluções inovadoras são integradas entre os stakeholders e as cadeias de valor, promovendo colaboração e alinhamento em toda a estrutura organizacional. Além disso, tecnologias avançadas e automação são amplamente utilizadas para otimizar operações e gerar vantagem competitiva.'
    }
  },
  dimensions: {
    title: 'Dimensões do DG2M',
    subtitle: 'Para avaliar os níveis de maturidade, foram desenvolvidas seis dimensões as quais estão disponíveis abaixo.'
  },
  roles: {
    title: 'Principais Papéis no DG2M',
    subtitle: 'Compreendendo Responsabilidades no Modelo de Maturidade',
    overview: 'Visão Geral',
    overviewContent: 'Uma governança de dados eficaz requer papéis e responsabilidades definidos. Cada papel contribui de forma única para o sucesso das iniciativas de governança, garantindo que os dados sejam gerenciados como um ativo importante na organização.',
    strategic: 'Nível Estratégico',
    strategicCDO: 'No nível estratégico, o CDO (Chief Data Officer ou Diretor/a de Governança de Dados) é responsável por alinhar as iniciativas de dados aos objetivos de negócio e supervisionar a implementação da governança. Esse papel colabora com patrocinadores executivos e conselhos de qualidade de dados para garantir que os ativos de dados apoiem as metas organizacionais.',
    strategicCommittees: 'Comitês de Dados—como Comitês Diretivos e Conselhos de Qualidade—supervisionam a qualidade dos dados, a aplicação de políticas e decisões estratégicas.',
    strategicPrivacy: 'Especialistas em Privacidade e Conformidade (por exemplo, Encarregados de Proteção de Dados) garantem a conformidade com as leis de proteção de dados e os protocolos internos de segurança, assegurando o uso legal e ético dos dados.',
    operational: 'Nível Operacional/Tático',
    operationalCurators: 'Curadores/as de Dados gerenciam a qualidade, as definições e o ciclo de vida dos dados nos domínios de negócio—garantindo consistência e confiabilidade.',
    operationalManagers: 'Gerentes de Equipes de Dados coordenam as equipes de projetos de dados, gerenciando recursos, cronogramas e entregas.',
    operationalConsumers: 'Consumidores de Dados utilizam os produtos de dados para análise, tomada de decisão e operações. Seus feedbacks frequentemente orientam as prioridades da governança e melhorias nos sistemas.',
    technical: 'Nível Técnico',
    technicalAnalysts: 'Analistas de Dados e Cientistas de Dados analisam, interpretam e modelam dados para gerar relatórios e documentos que informam e fortalecem as estratégias de negócio. Esses profissionais geralmente atuam em equipes de analytics sob a liderança de profissionais de ciência de dados ou da gestão estratégica.',
    technicalIT: 'Especialistas em TI e Bancos de Dados garantem o desempenho, a disponibilidade e a segurança da infraestrutura de dados. Eles também oferecem suporte essencial aos Curadores/as de Dados e outros papéis.',
    integration: 'Integração de Papéis ao Longo dos Níveis de Maturidade',
    integrationContent: 'À medida que a organização evolui, esses papéis tornam-se cada vez mais definidos, integrados e fortalecidos—contribuindo para uma cultura de dados mais ágil, ética e orientada por valor.'
  },
  survey: {
    title: 'Participe da Pesquisa sobre Governança de Dados',
    thanks: 'Desde já, agradeço muito pela sua colaboração!',
    fillForm: 'Preencha o formulário clicando aqui (desativado)',
    scheduleMeeting: 'Marque uma reunião comigo, se tiver dúvidas (desativado)',
    contact: 'Ou fale comigo em (email)',
    presentation: 'Apresentação',
    objective: 'O objetivo é validar uma proposta de Modelo de Maturidade da Governança de Dados (DG2M).',
    target: 'O survey é direcionado a profissionais que atuam com dados, governança, tecnologia da informação e áreas correlatas, e busca reunir percepções e feedbacks sobre o modelo proposto. Todas as respostas são sigilosas e utilizadas exclusivamente para fins acadêmicos.'
  }
};

export default ptBR;
