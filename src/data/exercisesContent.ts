// Conteúdo dos Exercícios Práticos do Manuscrito Sagrado

export interface Exercise {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  overview: string;
  benefits: string[];
  materials: string[];
  steps: {
    step: number;
    title: string;
    instruction: string;
    tip?: string;
  }[];
  variations: string[];
  disclaimer?: string;
}

export const exercises: Exercise[] = [
  {
    id: "exercise-breathing",
    title: "Técnica de Respiração Consciente",
    subtitle: "A base de toda prática contemplativa",
    duration: "5-10 minutos",
    icon: "wind",
    overview: `A respiração é a única função corporal que é tanto automática quanto voluntária. Por isso, ela serve como ponte entre o consciente e o inconsciente.

A Técnica de Respiração Consciente aqui apresentada combina elementos de práticas tradicionais com compreensão moderna da fisiologia. Quando praticada regularmente, pode ajudar na regulação do sistema nervoso e na redução de ansiedade.`,
    benefits: [
      "Ativa o sistema nervoso parassimpático, promovendo calma",
      "Pode reduzir níveis de cortisol (hormônio do estresse)",
      "Melhora a oxigenação e circulação",
      "Cria um intervalo entre estímulo e resposta",
      "Pode ser praticada em qualquer lugar, discretamente"
    ],
    materials: [
      "Um local onde possa sentar ou ficar em pé confortavelmente",
      "Timer opcional para sessões mais longas"
    ],
    steps: [
      {
        step: 1,
        title: "Posição",
        instruction: "Sente-se com a coluna ereta ou fique em pé com os pés na largura dos ombros. Se sentado, apoie as mãos confortavelmente sobre as coxas. Relaxe os ombros.",
        tip: "Se estiver ansioso ou agitado, colocar uma mão no peito e outra no abdômen pode ajudar a perceber a respiração."
      },
      {
        step: 2,
        title: "Respiração Natural",
        instruction: "Antes de modificar sua respiração, simplesmente observe-a por alguns ciclos. Como ela está agora? Rápida, lenta, superficial, profunda? Não julgue, apenas note.",
      },
      {
        step: 3,
        title: "Técnica 4-7-8",
        instruction: "Inspire pelo nariz contando mentalmente até 4. Segure a respiração contando até 7. Expire pela boca (fazendo um leve som de 'shhh') contando até 8.",
        tip: "Se os intervalos forem muito longos, comece com proporções menores (2-3-4) e aumente gradualmente."
      },
      {
        step: 4,
        title: "Ciclos",
        instruction: "Repita a sequência 4-7-8 por 4 ciclos inicialmente. Com a prática, você pode aumentar para 8 ciclos ou mais.",
      },
      {
        step: 5,
        title: "Retorno",
        instruction: "Após completar os ciclos, permita que sua respiração retorne ao ritmo natural. Observe como você se sente comparado ao início.",
      }
    ],
    variations: [
      "Respiração quadrada (4-4-4-4): inspire 4, segure 4, expire 4, segure 4",
      "Respiração calmante simples: expire por mais tempo que inspira (ex: inspira 4, expira 6)",
      "Respiração de coerência cardíaca: 5 segundos inspirando, 5 segundos expirando"
    ],
    disclaimer: "Se você tem condições respiratórias, cardíacas ou está grávida, consulte um médico antes de praticar técnicas de respiração com retenção."
  },
  {
    id: "exercise-journaling",
    title: "Escrita Terapêutica",
    subtitle: "Journaling guiado para autoconhecimento",
    duration: "15-20 minutos",
    icon: "pen-tool",
    overview: `A escrita terapêutica, ou journaling, é uma prática respaldada por pesquisa em psicologia. Estudos mostram que escrever sobre experiências emocionais pode melhorar bem-estar físico e psicológico.

Este exercício oferece prompts estruturados para guiar sua escrita de forma produtiva. Não se trata de escrever bem ou de forma literária - trata-se de usar a escrita como ferramenta de processamento e autoconhecimento.`,
    benefits: [
      "Ajuda a processar emoções difíceis",
      "Clarifica pensamentos confusos",
      "Identifica padrões de comportamento e pensamento",
      "Serve como registro de sua jornada de crescimento",
      "Pode reduzir sintomas de estresse e ansiedade"
    ],
    materials: [
      "Caderno ou papel (preferível a digital para este exercício)",
      "Caneta que deslize confortavelmente",
      "Ambiente privado e tranquilo",
      "Timer (opcional)"
    ],
    steps: [
      {
        step: 1,
        title: "Preparação",
        instruction: "Reserve 15-20 minutos sem interrupções. Sente-se confortavelmente com seu caderno. Respire fundo algumas vezes para fazer a transição do modo 'fazer' para o modo reflexivo.",
      },
      {
        step: 2,
        title: "Escolha um Prompt",
        instruction: "Escolha uma das seguintes perguntas para guiar sua escrita hoje:\n\n• O que está pesando em minha mente agora?\n• Que emoção tem sido mais presente para mim ultimamente? De onde ela vem?\n• Se eu pudesse mudar uma coisa em minha vida agora, o que seria e por quê?\n• O que eu preciso perdoar - em mim ou nos outros?\n• Que crença sobre mim mesmo está me limitando?",
        tip: "Não precisa responder todas. Escolha a que ressoa mais ou a que você resiste mais - ambas são significativas."
      },
      {
        step: 3,
        title: "Escrita Livre",
        instruction: "Escreva continuamente por 10-15 minutos sem parar. Não se preocupe com gramática, ortografia ou coerência. Se ficar travado, escreva 'não sei o que escrever' até algo surgir. A caneta deve continuar se movendo.",
      },
      {
        step: 4,
        title: "Releitura Reflexiva",
        instruction: "Após escrever, releia o que escreveu. Sublinhe frases que pareçam especialmente verdadeiras ou surpreendentes. Não julgue, apenas observe.",
      },
      {
        step: 5,
        title: "Insight Final",
        instruction: "Em uma ou duas frases, escreva: 'O insight principal de hoje é...' ou 'O que aprendi sobre mim é...'",
      }
    ],
    variations: [
      "Carta não enviada: escreva para alguém (vivo ou não) o que você nunca disse",
      "Diálogo interno: escreva uma conversa entre duas partes de você (ex: medo vs coragem)",
      "Visualização escrita: descreva seu dia ideal em detalhes sensoriais",
      "Gratidão profunda: escolha uma pessoa e escreva tudo pelo que é grato nela"
    ],
  },
  {
    id: "exercise-intention",
    title: "Ritual Simbólico de Intenção",
    subtitle: "Prática de foco e direcionamento consciente",
    duration: "10-15 minutos",
    icon: "compass",
    overview: `Este exercício utiliza elementos simbólicos para ajudar você a clarificar e fortalecer suas intenções. Não se trata de magia ou manifestação sobrenatural - é uma prática psicológica que utiliza o poder dos símbolos e rituais para focar a mente.

Rituais ajudam a marcar momentos importantes, criar comprometimento, e transitar de um estado mental para outro. Este ritual de intenção pode ser usado para iniciar projetos, marcar novos começos, ou clarificar direção de vida.`,
    benefits: [
      "Clarifica o que você realmente quer",
      "Cria um senso de comprometimento",
      "Utiliza símbolos para envolver camadas mais profundas da mente",
      "Marca uma transição consciente de intenção",
      "Pode ser adaptado para diferentes propósitos"
    ],
    materials: [
      "Um espaço tranquilo que possa ser seu 'espaço sagrado' temporário",
      "Uma vela (opcional, mas recomendada)",
      "Papel e caneta",
      "Um pequeno objeto que represente sua intenção (opcional)"
    ],
    steps: [
      {
        step: 1,
        title: "Criação do Espaço",
        instruction: "Prepare seu ambiente. Se usar vela, acenda-a. Silencie dispositivos. Este é um momento dedicado - trate-o como especial sem ser excessivamente solene.",
      },
      {
        step: 2,
        title: "Centrando-se",
        instruction: "Sente-se confortavelmente. Feche os olhos e respire profundamente por alguns minutos. Deixe para trás as preocupações do dia. Você está aqui para um propósito específico.",
      },
      {
        step: 3,
        title: "Clarificação da Intenção",
        instruction: "Pergunte-se: 'O que eu realmente quero cultivar ou criar em minha vida agora?' Não se apresse. Deixe a resposta emergir. Pode ser uma qualidade (ex: coragem), uma mudança (ex: mais saúde), ou uma direção (ex: carreira criativa).",
        tip: "Formule sua intenção de forma positiva (o que você quer, não o que não quer) e presente (como se já fosse verdade)."
      },
      {
        step: 4,
        title: "Registro Escrito",
        instruction: "Escreva sua intenção no papel de forma clara e concisa. Exemplo: 'Eu cultivo coragem em minhas escolhas diárias' ou 'Eu nutro minha saúde com atenção e cuidado'.",
      },
      {
        step: 5,
        title: "Visualização",
        instruction: "Feche os olhos e visualize-se vivendo esta intenção. Como seria sua vida com esta intenção realizada? Que sensações você teria no corpo? Permita-se sentir a realidade desta visão.",
      },
      {
        step: 6,
        title: "Declaração",
        instruction: "Em voz alta ou mentalmente, declare sua intenção três vezes com convicção. Sinta o compromisso em suas palavras.",
      },
      {
        step: 7,
        title: "Fechamento",
        instruction: "Agradeça a si mesmo por este momento de clareza. Se usou vela, apague-a conscientemente. Guarde o papel escrito onde possa revisitá-lo (não precisa ser visível sempre, mas acessível).",
      }
    ],
    variations: [
      "Ritual de lua nova: faça o ritual no início do ciclo lunar para novos começos",
      "Ritual de liberação: escreva o que deseja soltar e (com segurança) queime o papel",
      "Ritual de manhã: versão breve (5 min) para definir intenção do dia",
      "Ritual compartilhado: faça com um parceiro ou grupo, compartilhando intenções"
    ],
    disclaimer: "Este é um exercício psicológico que utiliza símbolos, não uma prática mágica. Os resultados dependem de suas ações subsequentes, não do ritual em si. Não garantimos resultados específicos."
  },
  {
    id: "exercise-observation",
    title: "Exercício de Observação Interna",
    subtitle: "Desenvolvendo a testemunha interior",
    duration: "10-15 minutos",
    icon: "eye",
    overview: `Este exercício desenvolve sua capacidade de auto-observação - a habilidade de observar seus próprios pensamentos, emoções e sensações sem se identificar completamente com eles.

Na psicologia, isso é chamado de 'metacognição' ou 'consciência testemunha'. É uma habilidade fundamental para autoconhecimento e regulação emocional, pois cria um espaço entre o que acontece em você e como você responde.`,
    benefits: [
      "Aumenta a consciência de padrões internos automáticos",
      "Cria espaço para escolha consciente em vez de reação",
      "Reduz identificação excessiva com estados mentais temporários",
      "Desenvolve equanimidade diante de experiências difíceis",
      "Fortalece a 'testemunha interior' - a parte de você que observa"
    ],
    materials: [
      "Um local tranquilo para prática sentada",
      "Timer para marcar o tempo",
      "Diário para anotações pós-prática (opcional)"
    ],
    steps: [
      {
        step: 1,
        title: "Posicionamento",
        instruction: "Sente-se confortavelmente com a coluna ereta. Feche os olhos ou mantenha-os semicerrados, olhando suavemente para baixo.",
      },
      {
        step: 2,
        title: "Estabelecendo a Observação",
        instruction: "Imagine que há uma parte de você - uma consciência observadora - que pode observar tudo o que acontece internamente sem ser afetada por isso. Esta parte é como um cientista neutro, curioso, sem julgamento.",
      },
      {
        step: 3,
        title: "Observando Pensamentos",
        instruction: "Volte sua atenção para seus pensamentos. Observe-os como se observasse nuvens passando no céu. Note: 'Ah, um pensamento sobre trabalho. Agora um pensamento sobre uma memória.' Não os siga, apenas observe e rotule.",
        tip: "Se você se perder em um pensamento (acontece!), simplesmente note 'me perdi' e retorne à observação."
      },
      {
        step: 4,
        title: "Observando Emoções",
        instruction: "Agora, observe quaisquer emoções presentes. Onde você as sente no corpo? Qual a intensidade (1-10)? Qual seria o nome? Observe sem tentar mudar. 'Há ansiedade presente. Sinto como aperto no peito. Intensidade 5.'",
      },
      {
        step: 5,
        title: "Observando Sensações",
        instruction: "Percorra seu corpo mentalmente, notando sensações físicas. Tensão, relaxamento, temperatura, formigamento. Observe cada área brevemente antes de seguir para a próxima.",
      },
      {
        step: 6,
        title: "Observador e Observado",
        instruction: "Agora, pergunta-se: quem está observando? Você não é os pensamentos (você os observa). Você não é as emoções ou sensações (você as observa). O que você é, então? Permaneça nesta questão aberta.",
      },
      {
        step: 7,
        title: "Retorno",
        instruction: "Lentamente, expanda sua atenção para incluir o ambiente externo - sons, temperatura. Mova suavemente os dedos, e quando estiver pronto, abra os olhos.",
      }
    ],
    variations: [
      "Observação na vida diária: pratique observar suas reações em situações cotidianas",
      "Observação de uma emoção específica: escolha uma emoção recorrente e observe-a profundamente",
      "Observação em movimento: pratique enquanto caminha, observando sensações e impulsos",
      "Escrita observacional: após a prática, escreva o que observou sem interpretação"
    ],
  },
  {
    id: "exercise-silence",
    title: "Prática de Silêncio e Consciência",
    subtitle: "Encontrando paz na quietude",
    duration: "15-30 minutos",
    icon: "moon",
    overview: `O silêncio externo é raro em nossa era de estímulos constantes. O silêncio interno - a quietude da mente - é ainda mais raro. Esta prática cultiva ambos.

A exposição regular ao silêncio tem benefícios documentados: redução de estresse, aumento de criatividade, e insights que emergem quando não estamos constantemente processando informação nova.

Esta prática pode ser desafiadora inicialmente - muitas pessoas sentem desconforto com o silêncio. Isso é normal e faz parte do processo.`,
    benefits: [
      "Oferece descanso para um sistema nervoso sobrecarregado",
      "Permite que insights e criatividade emerjam naturalmente",
      "Desenvolve conforto com a própria companhia",
      "Reduz dependência de estímulos externos",
      "Aprofunda a experiência meditativa"
    ],
    materials: [
      "Um espaço o mais silencioso possível",
      "Timer com alarme suave",
      "Roupas confortáveis",
      "Manta se necessário (o corpo pode esfriar)"
    ],
    steps: [
      {
        step: 1,
        title: "Preparação do Ambiente",
        instruction: "Encontre ou crie o ambiente mais silencioso possível. Desligue dispositivos (não apenas silencie). Informe outros que você não deve ser interrompido. Se necessário, use protetores auriculares.",
      },
      {
        step: 2,
        title: "Posição Confortável",
        instruction: "Sente-se ou deite-se de forma que possa permanecer imóvel pelo tempo da prática. A imobilidade corporal facilita a quietude mental.",
        tip: "Se sentado, tenha apoio para as costas se necessário. Se deitado, mantenha alguma atenção para não adormecer."
      },
      {
        step: 3,
        title: "Transição para o Silêncio",
        instruction: "Feche os olhos e respire naturalmente. Nos primeiros minutos, apenas faça a transição. Não tente ainda atingir qualquer estado. Apenas chegue.",
      },
      {
        step: 4,
        title: "Acolhendo Sons Residuais",
        instruction: "Mesmo em ambientes silenciosos, haverá sons - sua respiração, batimentos cardíacos, sons distantes. Não lute contra eles. Acolha-os como parte do fundo sonoro.",
      },
      {
        step: 5,
        title: "Permitindo a Mente se Aquietar",
        instruction: "A mente provavelmente estará agitada inicialmente. Não force quietude. Simplesmente não alimente os pensamentos com atenção. Deixe-os surgir e passar, como ondas que vêm e vão.",
      },
      {
        step: 6,
        title: "Repousando na Consciência",
        instruction: "Quando momentos de quietude mental surgirem - mesmo breves - repouse neles. Não celebre (isso é um pensamento) nem analise (também é pensamento). Apenas repouse.",
      },
      {
        step: 7,
        title: "Período Principal",
        instruction: "Permaneça no silêncio pelo tempo definido. Não há nada a fazer, atingir ou realizar. Apenas ser, em silêncio.",
      },
      {
        step: 8,
        title: "Retorno Gradual",
        instruction: "Quando o timer soar, não se levante imediatamente. Permaneça alguns minutos em transição. Gradualmente, reintroduza movimento e, eventualmente, retorne às atividades.",
      }
    ],
    variations: [
      "Silêncio ao amanhecer: pratique nos primeiros minutos do dia, antes de falar ou consumir mídia",
      "Retiro de silêncio: estenda para meio dia ou um dia inteiro, em ocasiões especiais",
      "Silêncio em caminhada: caminhe em silêncio na natureza, sem fones ou companhia",
      "Refeição em silêncio: faça uma refeição em completo silêncio, com atenção plena"
    ],
    disclaimer: "Se você tem tendência a pensamentos intrusivos ou condições de saúde mental, comece com períodos mais curtos e considere consultar um profissional."
  }
];

export const exercisesIntroduction = {
  title: "Exercícios Práticos",
  subtitle: "Ferramentas para aplicação imediata",
  description: `Os exercícios aqui reunidos são práticas que você pode aplicar imediatamente em sua vida. Cada um foi desenvolvido com base em tradições contemplativas e compreensão psicológica moderna.

Não são técnicas esotéricas ou mágicas - são ferramentas práticas de autoconhecimento e regulação. Seu valor está em como você os utiliza, não em promessas de resultados garantidos.`,
  howToUse: [
    "Leia as instruções completamente antes de praticar",
    "Comece com os exercícios que mais ressoam com você",
    "Pratique regularmente - frequência é mais importante que intensidade",
    "Adapte as práticas ao seu contexto e necessidades",
    "Registre suas experiências no diário para acompanhar sua evolução"
  ],
  safetyNote: "Estas práticas são seguras para a maioria das pessoas. Se você tem condições de saúde física ou mental específicas, consulte um profissional antes de iniciar."
};
