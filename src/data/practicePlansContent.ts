// Planos de Prática Estruturados do Manuscrito Sagrado
// Planos de 7, 14 e 21 dias

export interface DayActivity {
  day: number;
  title: string;
  objective: string;
  mainActivity: {
    name: string;
    duration: string;
    description: string;
  };
  microExercise: {
    name: string;
    times: string;
    description: string;
  };
  reflection: string;
  affirmation: string;
}

export interface PracticePlan {
  id: string;
  duration: number;
  title: string;
  subtitle: string;
  icon: string;
  introduction: string;
  objective: string;
  whatYouWillNeed: string[];
  days: DayActivity[];
  conclusion: string;
}

export const practicePlans: PracticePlan[] = [
  {
    id: "plan-7",
    duration: 7,
    title: "Reconexão com a Consciência",
    subtitle: "7 dias para despertar a atenção plena",
    icon: "sunrise",
    introduction: `Este plano de 7 dias é uma introdução gentil às práticas de consciência. Não requer experiência prévia e pode ser feito por qualquer pessoa disposta a dedicar alguns minutos diários.

O objetivo não é alcançar um estado especial, mas desenvolver o hábito de pausar e observar. A maioria das pessoas vive no modo automático - este plano quebra esse automatismo, um dia de cada vez.`,
    objective: "Estabelecer uma base de prática meditativa e desenvolver o hábito da auto-observação através de práticas curtas e acessíveis.",
    whatYouWillNeed: [
      "15-20 minutos diários (manhã e noite)",
      "Um espaço tranquilo para práticas sentadas",
      "Seu diário de jornada para registros",
      "Disposição para seguir o plano mesmo em dias difíceis"
    ],
    days: [
      {
        day: 1,
        title: "O Primeiro Passo",
        objective: "Estabelecer a intenção e fazer sua primeira prática formal",
        mainActivity: {
          name: "Respiração Consciente",
          duration: "10 minutos",
          description: "Sente-se confortavelmente, feche os olhos e observe sua respiração natural por 10 minutos. Quando a mente vagar, gentilmente retorne à respiração."
        },
        microExercise: {
          name: "Três Respirações",
          times: "5x ao dia",
          description: "Em momentos de transição (antes de comer, ao entrar em um local, ao pegar o celular), pare e faça três respirações profundas conscientes."
        },
        reflection: "O que me trouxe a este plano? O que espero cultivar nesses 7 dias?",
        affirmation: "Eu inicio esta jornada com abertura e sem expectativas rígidas."
      },
      {
        day: 2,
        title: "Consciência Corporal",
        objective: "Desenvolver a atenção ao corpo como âncora para o presente",
        mainActivity: {
          name: "Escaneamento Corporal",
          duration: "12 minutos",
          description: "Deite-se e percorra mentalmente cada parte do corpo, da cabeça aos pés, notando sensações sem tentar mudá-las."
        },
        microExercise: {
          name: "Check-in Corporal",
          times: "3x ao dia",
          description: "Pause e pergunte: Como meu corpo está agora? Onde há tensão? Respire para essas áreas."
        },
        reflection: "Que sinais meu corpo me envia que normalmente ignoro?",
        affirmation: "Meu corpo é meu aliado nesta jornada de consciência."
      },
      {
        day: 3,
        title: "Observando Pensamentos",
        objective: "Desenvolver distanciamento dos pensamentos",
        mainActivity: {
          name: "Meditação dos Pensamentos",
          duration: "10 minutos",
          description: "Sente-se e observe seus pensamentos como nuvens passando. Rotule-os mentalmente: 'pensamento sobre trabalho', 'pensamento sobre passado'. Não os siga."
        },
        microExercise: {
          name: "Notando a Mente",
          times: "Ao longo do dia",
          description: "Várias vezes ao dia, note: Qual pensamento está passando agora? Isso é fato ou interpretação?"
        },
        reflection: "Que tipos de pensamentos dominam minha mente? O que isso revela?",
        affirmation: "Eu não sou meus pensamentos - sou aquele que os observa."
      },
      {
        day: 4,
        title: "O Coração da Gratidão",
        objective: "Cultivar a perspectiva de apreciação",
        mainActivity: {
          name: "Meditação da Gratidão",
          duration: "12 minutos",
          description: "Traga à mente três coisas pelas quais você é grato. Para cada uma, sinta genuinamente a gratidão em seu corpo. Expanda essa sensação."
        },
        microExercise: {
          name: "Momentos de Apreciação",
          times: "3 momentos ao dia",
          description: "Escolha três momentos ordinários (uma refeição, uma conversa, um momento de descanso) e conscientemente aprecie-os."
        },
        reflection: "O que em minha vida eu tomo como garantido que merece gratidão?",
        affirmation: "A gratidão transforma o comum em extraordinário."
      },
      {
        day: 5,
        title: "Presença nas Ações",
        objective: "Trazer consciência para atividades cotidianas",
        mainActivity: {
          name: "Atividade Consciente",
          duration: "15 minutos",
          description: "Escolha uma atividade rotineira (cozinhar, comer, caminhar) e faça-a com total atenção. Note cada detalhe sensorial. Quando a mente vagar, retorne à atividade."
        },
        microExercise: {
          name: "Uma Coisa de Cada Vez",
          times: "O dia todo",
          description: "Hoje, quando possível, faça apenas uma coisa de cada vez. Quando perceber multitarefa, escolha uma e se dedique a ela."
        },
        reflection: "Quanto de minha vida eu perco por estar mentalmente ausente?",
        affirmation: "A presença transforma tarefas em práticas."
      },
      {
        day: 6,
        title: "Acolhendo Emoções",
        objective: "Desenvolver capacidade de estar com emoções sem reatividade",
        mainActivity: {
          name: "Meditação das Emoções",
          duration: "12 minutos",
          description: "Sente-se e observe qualquer emoção presente. Nomeie-a. Localize-a no corpo. Respire para ela. Não tente mudar - apenas acompanhe."
        },
        microExercise: {
          name: "Pausa Emocional",
          times: "Quando emoções intensas surgirem",
          description: "Antes de reagir, pause. Nomeie a emoção. Respire três vezes. Só então escolha sua resposta."
        },
        reflection: "Que emoções costumo evitar ou reagir automaticamente?",
        affirmation: "Posso sentir plenamente sem ser dominado pelo que sinto."
      },
      {
        day: 7,
        title: "Integração e Continuidade",
        objective: "Consolidar os aprendizados e planejar a continuidade",
        mainActivity: {
          name: "Prática Livre",
          duration: "15 minutos",
          description: "Escolha a prática que mais ressoou com você esta semana. Dedique-se a ela com todo o coração."
        },
        microExercise: {
          name: "Consciência Contínua",
          times: "O dia todo",
          description: "Hoje é dia de aplicar tudo. Intercale micro-práticas ao longo do dia. Veja quanto do dia você consegue permanecer presente."
        },
        reflection: "O que mudou em mim nesses 7 dias? Como posso manter e aprofundar essa prática?",
        affirmation: "Este não é o fim, mas o começo de uma jornada contínua."
      }
    ],
    conclusion: `Parabéns por completar estes 7 dias. O que você construiu aqui é uma base - uma fundação sobre a qual práticas mais profundas podem ser edificadas.

Não deixe que a conclusão do plano seja o fim de sua prática. O verdadeiro trabalho está na continuidade. Reserve tempo diário, mesmo que breve, para cultivar o que foi iniciado.

Se deseja aprofundar, considere o plano de 14 ou 21 dias. Cada nível traz novas dimensões.`
  },
  {
    id: "plan-14",
    duration: 14,
    title: "Clareza e Foco",
    subtitle: "14 dias para desenvolver mente clara e atenção estável",
    icon: "target",
    introduction: `Este plano de 14 dias é para quem já tem alguma familiaridade com práticas contemplativas ou completou o plano de 7 dias. Ele aprofunda a prática e adiciona elementos de introspecção e clarificação mental.

O foco não é apenas técnico - é a capacidade de direcionar sua atenção para o que realmente importa, sem se perder em distrações externas ou internas.`,
    objective: "Desenvolver capacidade de foco sustentado, clareza mental, e habilidade de discernir o essencial do superficial.",
    whatYouWillNeed: [
      "25-30 minutos diários para práticas formais",
      "Compromisso com redução de distrações digitais",
      "Diário para reflexões aprofundadas",
      "Disposição para examinar hábitos mentais"
    ],
    days: [
      {
        day: 1,
        title: "Inventário da Atenção",
        objective: "Reconhecer onde sua atenção vai atualmente",
        mainActivity: {
          name: "Rastreamento de Atenção",
          duration: "20 minutos",
          description: "Divida entre meditação (10 min) e escrita (10 min). Na meditação, observe para onde a mente vai. Na escrita, liste onde sua atenção tem ido nos últimos dias."
        },
        microExercise: {
          name: "Onde está minha mente?",
          times: "8x ao dia (use alarmes)",
          description: "A cada alarme, note: Onde estava minha mente agora? Presente, passado, futuro? Produtivo ou disperso?"
        },
        reflection: "Quem ou o que está recebendo a maior parte de minha atenção? Isso está alinhado com minhas prioridades?",
        affirmation: "A consciência de onde vai minha atenção é o primeiro passo para direcioná-la."
      },
      {
        day: 2,
        title: "Dieta de Informação",
        objective: "Reduzir ruído mental através de curadoria de estímulos",
        mainActivity: {
          name: "Meditação de Clareza",
          duration: "15 minutos",
          description: "Pratique a meditação com foco único na respiração. Quando pensamentos sobre notícias, mídias sociais ou informações surgirem, note e retorne."
        },
        microExercise: {
          name: "Pausas Digitais",
          times: "Manhã, tarde e noite",
          description: "Três períodos de 30 minutos completamente sem dispositivos digitais. Observe o que surge quando não há estímulos."
        },
        reflection: "Quanto do que consumo diariamente em termos de informação é realmente útil ou necessário?",
        affirmation: "Escolho conscientemente o que entra em minha mente."
      },
      {
        day: 3,
        title: "Foco Singular",
        objective: "Desenvolver a capacidade de fazer uma coisa de cada vez",
        mainActivity: {
          name: "Meditação do Objeto",
          duration: "15 minutos",
          description: "Escolha um objeto simples (vela, pedra, flor). Concentre toda sua atenção nele por 15 minutos. Explore cada detalhe. Quando a mente vagar, retorne."
        },
        microExercise: {
          name: "Monotarefa",
          times: "O dia todo",
          description: "Hoje, comprometa-se a fazer apenas uma coisa de cada vez. Feche abas, silencie notificações, complete uma coisa antes de iniciar outra."
        },
        reflection: "O que acontece quando dou atenção total a uma única coisa?",
        affirmation: "Foco é poder. Concentro minha atenção no que realmente importa."
      },
      {
        day: 4,
        title: "Clarificando Valores",
        objective: "Identificar o que genuinamente importa para você",
        mainActivity: {
          name: "Contemplação de Valores",
          duration: "25 minutos",
          description: "10 min de meditação silenciosa, seguidos de 15 min de escrita sobre: Se eu tivesse apenas um ano de vida, o que faria diferente? O que isso revela sobre meus valores?"
        },
        microExercise: {
          name: "Teste do Leito de Morte",
          times: "Antes de decisões",
          description: "Ao tomar decisões hoje, pergunte: No fim da vida, me arrependerei de escolher isso?"
        },
        reflection: "Quais são os 3-5 valores não negociáveis em minha vida?",
        affirmation: "Quando conheço meus valores, as decisões se tornam claras."
      },
      {
        day: 5,
        title: "Identificando Distrações Internas",
        objective: "Reconhecer os padrões mentais que roubam foco",
        mainActivity: {
          name: "Meditação de Observação",
          duration: "20 minutos",
          description: "Observe sua mente como um laboratório. Identifique padrões: preocupações recorrentes, fantasias, revisitações do passado. Apenas observe e categorize."
        },
        microExercise: {
          name: "Padrão Alert",
          times: "Quando notar distração",
          description: "Cada vez que perceber sua mente vagando, note: É preocupação, fantasia, revisão do passado, ou planejamento?"
        },
        reflection: "Quais são meus padrões de distração mais frequentes? De onde eles vêm?",
        affirmation: "Ao conhecer minhas distrações, posso escolher não segui-las."
      },
      {
        day: 6,
        title: "O Poder do Não",
        objective: "Desenvolver a capacidade de eliminar o não essencial",
        mainActivity: {
          name: "Meditação + Revisão",
          duration: "20 minutos",
          description: "10 min de meditação focada, 10 min listando compromissos, atividades e hábitos que você pode eliminar ou reduzir."
        },
        microExercise: {
          name: "Prática do Não",
          times: "Quando solicitações surgirem",
          description: "Hoje, antes de dizer sim a qualquer demanda, pause e pergunte: Isso é realmente necessário? Posso dizer não?"
        },
        reflection: "O que estou fazendo por hábito ou obrigação que não serve mais minha vida?",
        affirmation: "Cada não para o desnecessário é um sim para o essencial."
      },
      {
        day: 7,
        title: "Ritual de Foco Matinal",
        objective: "Estabelecer como você inicia cada dia",
        mainActivity: {
          name: "Prática Matinal",
          duration: "20 minutos",
          description: "Crie e execute uma rotina matinal consciente: meditação (10 min), definição de intenção (5 min), visualização do dia (5 min)."
        },
        microExercise: {
          name: "Primeira Hora Sagrada",
          times: "Manhã",
          description: "A primeira hora após acordar é sem dispositivos digitais. Use para práticas, movimento gentil, ou silêncio."
        },
        reflection: "Como minha manhã afeta o resto do dia? O que posso otimizar?",
        affirmation: "Como começo o dia determina como vivo o dia."
      },
      {
        day: 8,
        title: "Prioridades Claras",
        objective: "Distinguir entre urgente e importante",
        mainActivity: {
          name: "Meditação + Planejamento",
          duration: "25 minutos",
          description: "15 min de meditação para clarear a mente. 10 min categorizando suas tarefas atuais em: Urgente/Importante, Não Urgente/Importante, Urgente/Não Importante, Não Urgente/Não Importante."
        },
        microExercise: {
          name: "As 3 Essenciais",
          times: "Toda manhã",
          description: "Identifique as 3 coisas mais importantes do dia. Faça-as antes de qualquer outra coisa."
        },
        reflection: "Quanto do meu tempo vai para o que é apenas urgente versus o que é verdadeiramente importante?",
        affirmation: "Clareza de prioridades é liberdade de ação."
      },
      {
        day: 9,
        title: "Concentração Profunda",
        objective: "Desenvolver a capacidade de trabalho focado estendido",
        mainActivity: {
          name: "Meditação Estendida",
          duration: "25 minutos",
          description: "Pratique meditação focada por 25 minutos sem interrupção. Quando quiser parar antes, observe o impulso sem agir. Continue."
        },
        microExercise: {
          name: "Bloco de Foco",
          times: "1x ao dia",
          description: "Reserve 90 minutos para trabalho focado em uma única tarefa importante. Sem interrupções, sem multitarefa."
        },
        reflection: "O que acontece quando me permito um período estendido de concentração?",
        affirmation: "Profundidade requer tempo. Eu me dou tempo para ir fundo."
      },
      {
        day: 10,
        title: "Simplificação",
        objective: "Reduzir complexidade para aumentar clareza",
        mainActivity: {
          name: "Meditação + Simplificação",
          duration: "20 minutos",
          description: "10 min de meditação. 10 min escrevendo: O que em minha vida pode ser simplificado? Que complicações são autoinfligidas?"
        },
        microExercise: {
          name: "Uma Coisa Menos",
          times: "3x ao dia",
          description: "Em três momentos, pergunte: O que posso remover, eliminar ou simplificar aqui?"
        },
        reflection: "Onde estou complicando desnecessariamente minha vida?",
        affirmation: "Na simplicidade, encontro clareza. No menos, encontro mais."
      },
      {
        day: 11,
        title: "Ambiente para Foco",
        objective: "Configurar seu ambiente externo para apoiar foco interno",
        mainActivity: {
          name: "Prática + Organização",
          duration: "30 minutos",
          description: "10 min de meditação. 20 min organizando seu espaço de trabalho/vida para eliminar distrações visuais e fricção."
        },
        microExercise: {
          name: "Preparação de Ambiente",
          times: "Antes de cada atividade",
          description: "Antes de iniciar qualquer atividade importante, prepare o ambiente: remova distrações, tenha o necessário à mão."
        },
        reflection: "Como meu ambiente físico está afetando minha capacidade de foco?",
        affirmation: "Meu ambiente externo reflete e afeta meu estado interno."
      },
      {
        day: 12,
        title: "Discernimento Claro",
        objective: "Desenvolver a capacidade de ver através de confusão",
        mainActivity: {
          name: "Contemplação",
          duration: "20 minutos",
          description: "Escolha uma situação confusa em sua vida. Sente-se com ela em meditação, sem buscar solução. Deixe clareza emergir naturalmente."
        },
        microExercise: {
          name: "Questão Clarificadora",
          times: "Diante de confusão",
          description: "Quando confuso, pergunte: O que é fato aqui? O que é minha interpretação? O que eu sei com certeza?"
        },
        reflection: "Em que áreas minha confusão é genuína versus autoinfligida por evitação?",
        affirmation: "A clareza está disponível quando paro de obscurecê-la."
      },
      {
        day: 13,
        title: "Foco Relacional",
        objective: "Aplicar presença e foco nos relacionamentos",
        mainActivity: {
          name: "Meditação de Conexão",
          duration: "15 minutos",
          description: "Visualize as pessoas importantes em sua vida, uma por uma. Sinta genuinamente a conexão com cada uma. Envie-lhes bons desejos."
        },
        microExercise: {
          name: "Presença Plena em Conversas",
          times: "Em todas as interações",
          description: "Hoje, em cada conversa, esteja 100% presente. Não pense na próxima coisa a dizer. Apenas ouça e responda do coração."
        },
        reflection: "Estou dando às pessoas importantes a qualidade de atenção que elas merecem?",
        affirmation: "Presença é o maior presente que posso dar a outro ser humano."
      },
      {
        day: 14,
        title: "Integração e Compromisso",
        objective: "Consolidar aprendizados e comprometer-se com práticas futuras",
        mainActivity: {
          name: "Prática Livre + Planejamento",
          duration: "30 minutos",
          description: "15 min com sua prática favorita destas duas semanas. 15 min planejando: Como manter estas práticas? Que compromissos específicos você assume?"
        },
        microExercise: {
          name: "Dia de Maestria",
          times: "O dia todo",
          description: "Aplique tudo o que aprendeu. Veja estas duas semanas como um ensaio para como você quer viver."
        },
        reflection: "O que mudou em mim nestes 14 dias? Que práticas são inegociáveis daqui para frente?",
        affirmation: "A clareza que cultivei é minha. Ela permanece comigo."
      }
    ],
    conclusion: `Você completou 14 dias de prática dedicada. A clareza e o foco que desenvolveu não são temporários - são capacidades que, nutridas, permanecem e crescem.

Lembre-se: o mundo continuará a puxar sua atenção em mil direções. O que você cultivou aqui é a capacidade de escolher conscientemente onde sua atenção vai.

Se deseja continuar, o plano de 21 dias oferece uma imersão ainda mais profunda, incluindo práticas mais avançadas de expansão de consciência.`
  },
  {
    id: "plan-21",
    duration: 21,
    title: "Expansão da Percepção Interna",
    subtitle: "21 dias para aprofundar a consciência de si mesmo",
    icon: "eye",
    introduction: `Este é o plano mais intensivo, recomendado para quem já pratica regularmente ou completou os planos anteriores. Ele vai além das técnicas básicas, explorando dimensões mais profundas do autoconhecimento.

O número 21 foi escolhido porque pesquisas sugerem que esse é o tempo mínimo para estabelecer novos hábitos neurais. Este plano visa uma transformação mais durável.`,
    objective: "Desenvolver consciência ampliada, integrar sombras psicológicas, e estabelecer uma prática sustentável de autoconhecimento.",
    whatYouWillNeed: [
      "30-45 minutos diários para práticas formais",
      "Compromisso sério com a jornada interior",
      "Diário para registros extensos",
      "Disposição para enfrentar aspectos desconfortáveis de si mesmo",
      "Opcionalmente, um confidente ou terapeuta para processar o que surgir"
    ],
    days: [
      {
        day: 1,
        title: "O Compromisso",
        objective: "Estabelecer uma intenção profunda para estes 21 dias",
        mainActivity: {
          name: "Ritual de Abertura",
          duration: "30 minutos",
          description: "Meditação de 15 min. Escrita de 15 min sobre: Por que estou fazendo isso? O que estou disposto a enfrentar? Que transformação busco?"
        },
        microExercise: {
          name: "Lembrança do Compromisso",
          times: "Manhã, tarde e noite",
          description: "Em três momentos, pause e relembre seu compromisso com esta jornada."
        },
        reflection: "Se eu realmente me transformasse nestes 21 dias, quem eu seria do outro lado?",
        affirmation: "Eu me comprometo com esta jornada de coração aberto."
      },
      {
        day: 2,
        title: "Fundações da Atenção",
        objective: "Aprofundar a base de presença consciente",
        mainActivity: {
          name: "Meditação Estendida",
          duration: "30 minutos",
          description: "Pratique meditação focada na respiração por 30 minutos. Quando dificuldades surgirem, observe-as como parte da prática, não como obstáculos."
        },
        microExercise: {
          name: "Presença Contínua",
          times: "O dia todo",
          description: "Veja quanto do dia você consegue manter algum grau de consciência. Use lembretes se necessário."
        },
        reflection: "Onde está minha resistência à presença? O que estou evitando ao me distrair?",
        affirmation: "A presença é meu estado natural. Eu retorno a ela repetidamente."
      },
      {
        day: 3,
        title: "Conhecendo a Sombra",
        objective: "Iniciar a exploração dos aspectos não integrados de si",
        mainActivity: {
          name: "Meditação da Sombra",
          duration: "35 minutos",
          description: "15 min de meditação. 20 min escrevendo sobre: Que traços eu rejeito em mim? O que não quero admitir? O que me irrita nos outros (projeção)?"
        },
        microExercise: {
          name: "Notando Julgamentos",
          times: "Ao longo do dia",
          description: "Cada vez que julgar alguém, pergunte: Este traço existe em mim também, talvez escondido?"
        },
        reflection: "Que partes de mim eu excluí de minha autoimagem?",
        affirmation: "Tenho coragem de olhar para todas as partes de mim."
      },
      {
        day: 4,
        title: "O Corpo Sabe",
        objective: "Aprofundar a consciência e sabedoria somática",
        mainActivity: {
          name: "Práticas Somáticas",
          duration: "30 minutos",
          description: "15 min de escaneamento corporal lento. 15 min de movimento intuitivo - deixe o corpo se mover como quiser, sem coreografia."
        },
        microExercise: {
          name: "Consulta Corporal",
          times: "Antes de decisões",
          description: "Antes de decisões, consulte seu corpo: O que você sente sobre isso? Expansão ou contração?"
        },
        reflection: "Que mensagens meu corpo tem me enviado que eu tenho ignorado?",
        affirmation: "Meu corpo é sábio. Eu o escuto e honro."
      },
      {
        day: 5,
        title: "Padrões Emocionais",
        objective: "Mapear e compreender os padrões emocionais recorrentes",
        mainActivity: {
          name: "Cartografia Emocional",
          duration: "35 minutos",
          description: "10 min de meditação. 25 min mapeando: Quais emoções são mais frequentes em mim? Em que situações surgem? De onde vêm historicamente?"
        },
        microExercise: {
          name: "Rastreamento de Emoções",
          times: "5x ao dia",
          description: "Registre em notas rápidas: Hora, emoção, intensidade (1-10), gatilho."
        },
        reflection: "Que padrões emocionais herdei de minha família ou cultura?",
        affirmation: "Minhas emoções são mensageiras. Eu as escuto sem ser dominado."
      },
      {
        day: 6,
        title: "Crenças Limitantes",
        objective: "Identificar e questionar crenças que restringem",
        mainActivity: {
          name: "Questionamento Socrático",
          duration: "30 minutos",
          description: "10 min de meditação. 20 min listando crenças sobre si mesmo ('Eu sou...', 'Eu não consigo...', 'Sempre...'). Questione cada uma: É verdade? Sempre? Quem seria eu sem essa crença?"
        },
        microExercise: {
          name: "Pegando Crenças",
          times: "Ao longo do dia",
          description: "Note quando uma crença limitante opera. Escreva-a para exame posterior."
        },
        reflection: "Que crenças sobre mim mesmo eu aceito como verdades absolutas sem questioná-las?",
        affirmation: "Crenças são pensamentos repetidos. Eu posso escolher novos pensamentos."
      },
      {
        day: 7,
        title: "Dia de Silêncio",
        objective: "Mergulhar profundamente na quietude interior",
        mainActivity: {
          name: "Silêncio Estendido",
          duration: "Várias horas",
          description: "Se possível, dedique várias horas (ou o dia) ao silêncio. Sem fala, sem mídia, sem dispositivos. Apenas sendo."
        },
        microExercise: {
          name: "Escrita do Silêncio",
          times: "No fim do dia",
          description: "Ao final, escreva o que emergiu do silêncio - insights, emoções, claridades."
        },
        reflection: "O que o silêncio revelou que o ruído mantinha escondido?",
        affirmation: "No silêncio, encontro a mim mesmo."
      },
      {
        day: 8,
        title: "Feridas e Cura",
        objective: "Reconhecer feridas emocionais e iniciar o processo de cura",
        mainActivity: {
          name: "Meditação de Cura",
          duration: "35 minutos",
          description: "15 min trazendo à mente uma ferida emocional. Não para reviver, mas para observar com compaixão. 20 min escrevendo uma carta de compaixão a seu eu ferido."
        },
        microExercise: {
          name: "Compaixão para Dores",
          times: "Quando dor surgir",
          description: "Quando dor emocional surgir, coloque a mão no coração e diga: 'Isso dói. Eu me vejo. Eu me acolho.'"
        },
        reflection: "Que feridas antigas ainda operam em mim? Como posso iniciar a cura?",
        affirmation: "Minhas feridas não me definem. Eu tenho capacidade de curar."
      },
      {
        day: 9,
        title: "Relacionamentos como Espelhos",
        objective: "Usar relacionamentos como ferramentas de autoconhecimento",
        mainActivity: {
          name: "Contemplação Relacional",
          duration: "30 minutos",
          description: "10 min de meditação. 20 min escrevendo sobre: O que meus relacionamentos difíceis me ensinam sobre mim? Que padrões repito?"
        },
        microExercise: {
          name: "Espelho Relacional",
          times: "Em interações",
          description: "Em interações significativas, pergunte: O que esta pessoa está espelhando de mim?"
        },
        reflection: "Que papel eu desempenho repetidamente em meus relacionamentos? É um papel que escolhi conscientemente?",
        affirmation: "Meus relacionamentos são espelhos que me ajudam a me conhecer."
      },
      {
        day: 10,
        title: "Propósito e Direção",
        objective: "Clarificar senso de propósito e direção de vida",
        mainActivity: {
          name: "Visualização de Vida",
          duration: "30 minutos",
          description: "Visualize sua vida daqui a 5, 10, 20 anos em seu melhor cenário realista. Veja detalhes. Depois, escreva sobre o que viu."
        },
        microExercise: {
          name: "Alinhamento de Ações",
          times: "Antes de decisões",
          description: "Antes de decisões, pergunte: Isso me aproxima ou afasta da vida que visualizei?"
        },
        reflection: "O que eu genuinamente quero criar com esta vida?",
        affirmation: "Minha vida tem direção. Eu a escolho conscientemente."
      },
      {
        day: 11,
        title: "Gratidão Profunda",
        objective: "Aprofundar a prática de gratidão além do superficial",
        mainActivity: {
          name: "Gratidão Estendida",
          duration: "30 minutos",
          description: "Escolha uma pessoa ou situação. Contemple-a profundamente por 15 min. Escreva 15 min sobre todas as formas como ela contribuiu para quem você é."
        },
        microExercise: {
          name: "Expressão de Gratidão",
          times: "1x hoje",
          description: "Expresse gratidão a alguém - pessoalmente, por telefone, ou carta. Seja específico sobre pelo que é grato."
        },
        reflection: "O que eu nunca agradeci adequadamente? Quem eu não reconheci?",
        affirmation: "A gratidão transforma minha relação com a vida."
      },
      {
        day: 12,
        title: "Perdão",
        objective: "Trabalhar o perdão - de outros e de si mesmo",
        mainActivity: {
          name: "Prática de Perdão",
          duration: "35 minutos",
          description: "15 min de meditação trazendo à mente alguém que você precisa perdoar. 20 min escrevendo sobre: O que mantém o não-perdão? O que você ganha em soltar?"
        },
        microExercise: {
          name: "Liberação de Ressentimento",
          times: "Quando ressentimento surgir",
          description: "Quando ressentimento surgir, pause e diga: 'Escolho liberar isso. Não para eles, mas para mim.'"
        },
        reflection: "O que o não-perdão está me custando? O que significa perdoar realmente?",
        affirmation: "Perdoar é libertar a mim mesmo. Eu escolho a liberdade."
      },
      {
        day: 13,
        title: "Medo e Coragem",
        objective: "Confrontar medos e cultivar coragem",
        mainActivity: {
          name: "Diálogo com o Medo",
          duration: "30 minutos",
          description: "10 min de meditação. 20 min escrevendo um diálogo com seu medo: Faça perguntas, escute as respostas. O que o medo está tentando proteger?"
        },
        microExercise: {
          name: "Um Ato de Coragem",
          times: "1x hoje",
          description: "Faça hoje uma coisa que você normalmente evitaria por medo - pode ser pequena."
        },
        reflection: "Que medos governam minha vida silenciosamente? O que está do outro lado do medo?",
        affirmation: "Sinto o medo e ajo mesmo assim. Coragem não é ausência de medo."
      },
      {
        day: 14,
        title: "Ponto Médio: Revisão",
        objective: "Avaliar o progresso e recalibrar a jornada",
        mainActivity: {
          name: "Revisão de Meio Caminho",
          duration: "35 minutos",
          description: "15 min de meditação. 20 min escrevendo: O que mudou? O que descobri? O que resisto? O que precisa de mais atenção na segunda metade?"
        },
        microExercise: {
          name: "Reconhecimento",
          times: "Ao longo do dia",
          description: "Reconheça e celebre o fato de ter chegado até aqui. Isso requer dedicação."
        },
        reflection: "Estou me entregando plenamente a este processo ou me segurando?",
        affirmation: "Estou no caminho. Continuo com renovado compromisso."
      },
      {
        day: 15,
        title: "Aceitação Radical",
        objective: "Praticar aceitação do que é, antes de tentar mudar",
        mainActivity: {
          name: "Meditação de Aceitação",
          duration: "30 minutos",
          description: "Traga à mente algo que você resiste aceitar. Sente-se com isso, respirando, sem lutar. Pratique dizer internamente: 'Isto é. Por agora, isto é.'"
        },
        microExercise: {
          name: "Aceitando Pequenas Irritações",
          times: "Quando frustrado",
          description: "Diante de pequenas frustrações, pratique: primeiro aceite que está acontecendo, depois escolha resposta."
        },
        reflection: "O que em minha vida eu resisto aceitar? O que a resistência me custa?",
        affirmation: "Aceito o que é. Da aceitação, ação sábia emerge."
      },
      {
        day: 16,
        title: "Criatividade e Expressão",
        objective: "Acessar e expressar a criatividade interior",
        mainActivity: {
          name: "Expressão Livre",
          duration: "35 minutos",
          description: "10 min de meditação. 25 min de expressão criativa livre - escrita automática, desenho, movimento - sem julgamento ou intenção de produzir algo 'bom'."
        },
        microExercise: {
          name: "Olhar Criativo",
          times: "3x ao dia",
          description: "Observe algo ordinário com olhos de artista. Que beleza está presente que normalmente você não vê?"
        },
        reflection: "Onde bloqueei minha criatividade? O que acontece quando me permito criar livremente?",
        affirmation: "A criatividade flui através de mim quando eu permito."
      },
      {
        day: 17,
        title: "Integração da Sombra",
        objective: "Trabalhar ativamente na integração de aspectos rejeitados",
        mainActivity: {
          name: "Diálogo com a Sombra",
          duration: "30 minutos",
          description: "Visualize o aspecto de si que você mais rejeita. Inicie um diálogo escrito: O que você quer me dizer? Por que existe? Que presente você tem para mim?"
        },
        microExercise: {
          name: "Acolhendo Imperfeições",
          times: "Quando autocrítica surgir",
          description: "Quando se criticar, pause e pergunte: E se este aspecto tiver uma função? E se eu pudesse aceitá-lo?"
        },
        reflection: "O que minha sombra contém que, se integrado, me tornaria mais completo?",
        affirmation: "Todas as partes de mim são bem-vindas. Abraço minha totalidade."
      },
      {
        day: 18,
        title: "Conexão Universal",
        objective: "Experienciar senso de conexão com algo maior",
        mainActivity: {
          name: "Meditação de Expansão",
          duration: "30 minutos",
          description: "Medite expandindo sua atenção progressivamente: corpo, sala, cidade, país, planeta, universo. Sinta-se parte de algo vasto."
        },
        microExercise: {
          name: "Momentos de Conexão",
          times: "3x ao dia",
          description: "Pause e sinta sua conexão com o ambiente, as pessoas, a vida ao redor."
        },
        reflection: "Quando me sinto mais conectado a algo maior que eu? O que essa conexão oferece?",
        affirmation: "Eu sou parte de algo vasto e interconectado."
      },
      {
        day: 19,
        title: "Legado e Contribuição",
        objective: "Contemplar o que você quer deixar para o mundo",
        mainActivity: {
          name: "Meditação do Legado",
          duration: "35 minutos",
          description: "Imagine olhar para sua vida do fim. O que você gostaria de ter contribuído? 15 min visualizando, 20 min escrevendo."
        },
        microExercise: {
          name: "Contribuição Hoje",
          times: "1x hoje",
          description: "Faça uma contribuição hoje, sem expectativa de retorno - ajuda, gentileza, criação de valor."
        },
        reflection: "Se eu morresse amanhã, o que eu gostaria que dissessem sobre minha vida?",
        affirmation: "Minha vida é uma contribuição. Escolho contribuir conscientemente."
      },
      {
        day: 20,
        title: "Vida Alinhada",
        objective: "Desenhar uma vida alinhada com seus valores e descobertas",
        mainActivity: {
          name: "Design de Vida",
          duration: "40 minutos",
          description: "Usando todos os insights destes 21 dias, escreva: Como seria uma vida totalmente alinhada com quem descobri ser? Que mudanças concretas posso fazer?"
        },
        microExercise: {
          name: "Ações Alinhadas",
          times: "Em cada ação",
          description: "Antes de cada ação significativa, pergunte: Isso está alinhado com quem sou e quero ser?"
        },
        reflection: "Que gaps existem entre quem sou e como vivo? Como reduzi-los?",
        affirmation: "Eu vivo de acordo com quem realmente sou."
      },
      {
        day: 21,
        title: "Conclusão e Novo Começo",
        objective: "Integrar a jornada e comprometer-se com prática contínua",
        mainActivity: {
          name: "Ritual de Fechamento",
          duration: "45 minutos",
          description: "20 min de meditação profunda. 25 min escrevendo: Resumo da jornada, principais insights, compromissos específicos para o futuro."
        },
        microExercise: {
          name: "Celebração e Gratidão",
          times: "O dia todo",
          description: "Celebre esta conclusão. Agradeça a si mesmo pela dedicação. Reconheça a transformação."
        },
        reflection: "Quem eu era no dia 1? Quem sou agora? Quem continuarei a me tornar?",
        affirmation: "Esta jornada termina e uma nova começa. Eu continuo, transformado."
      }
    ],
    conclusion: `Você completou uma jornada significativa de 21 dias. O que você enfrentou, descobriu e integrou neste período é genuinamente seu.

A expansão de consciência que você experimentou não é um pico temporário - é um novo patamar a partir do qual você pode viver. Mas patamares requerem manutenção.

Continue praticando. Revissite os módulos do Manuscrito. Use seu diário para processar o que surgir. Considere retornar a este plano em alguns meses, com nova experiência de vida.

A jornada de autoconhecimento não tem fim. O que tem fim é a inconsciência, a vida vivida no automático. Você escolheu acordar. Continue escolhendo, a cada dia.`
  }
];

export const practicePlansIntroduction = {
  title: "Planos de Prática",
  subtitle: "Jornadas estruturadas de transformação",
  description: `Os planos de prática oferecem estrutura para sua jornada de autoconhecimento. Cada um foi desenhado com progressão cuidadosa, combinando práticas meditativas, reflexão, e exercícios integrativos.

Escolha o plano que corresponde ao seu nível atual e disponibilidade. É melhor completar um plano mais curto com dedicação do que abandonar um plano longo.`,
  howToChoose: [
    "7 dias: Para iniciantes ou para retomar a prática",
    "14 dias: Para quem já pratica ocasionalmente",
    "21 dias: Para praticantes comprometidos que querem aprofundar"
  ],
  tips: [
    "Complete um plano antes de iniciar outro",
    "Não pule dias - consistência é fundamental",
    "Use o diário para registrar cada dia",
    "Se perder um dia, não desista - retome no seguinte",
    "Considere fazer o mesmo plano mais de uma vez - novas camadas emergem"
  ]
};
