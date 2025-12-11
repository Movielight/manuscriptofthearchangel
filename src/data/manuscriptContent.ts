// Conteúdo completo do Manuscrito Sagrado Premium
// Educacional, reflexivo e em conformidade com políticas da Cartpanda

export interface ModuleSection {
  id: string;
  title: string;
  content: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  introduction: string;
  sections: ModuleSection[];
  practicalExercise: {
    title: string;
    instructions: string[];
  };
  finalReflection: string;
}

export const welcomeContent = {
  title: "Bem-vindo ao Manuscrito Sagrado",
  subtitle: "Uma jornada de autoconhecimento e clareza interior",
  purpose: `O Manuscrito Sagrado é um guia educacional e reflexivo, criado para auxiliar você em sua jornada de autoconhecimento. Este não é um caminho de promessas ou milagres, mas sim de trabalho interno consciente.

Aqui você encontrará ferramentas práticas de introspecção, reflexões filosóficas profundas e exercícios que podem contribuir para sua clareza mental e equilíbrio emocional.

Cada módulo foi desenvolvido com base em tradições filosóficas e práticas contemplativas reconhecidas, adaptadas para o contexto contemporâneo.`,
  howToNavigate: `A navegação é simples e intuitiva:

• **Módulos**: Acesse o conteúdo principal organizado em 5 módulos progressivos
• **Aulas**: Assista às videoaulas complementares que aprofundam cada tema
• **Práticas**: Encontre meditações guiadas e exercícios práticos
• **Jornada**: Acompanhe seu progresso, escreva em seu diário e siga planos estruturados`,
  symbolicApproach: `Este material utiliza uma abordagem simbólica. Os símbolos são ferramentas poderosas para comunicar conceitos que transcendem a linguagem comum.

Ao longo desta jornada, você encontrará referências a arquétipos universais, metáforas e simbolismos que servem como espelhos para sua própria experiência interior.

Não se trata de crenças religiosas ou promessas sobrenaturais, mas de uma linguagem que permite acessar camadas mais profundas de compreensão sobre si mesmo.`,
};

export const introductionContent = {
  title: "Introdução ao Manuscrito",
  historicalContext: `Os manuscritos espirituais têm uma história que remonta a milhares de anos. Desde os textos védicos da Índia antiga até os pergaminhos dos mosteiros medievais, a humanidade sempre buscou registrar suas descobertas sobre a natureza da consciência e do ser.

Estas tradições, embora diversas em suas expressões culturais, compartilham um fio condutor: a busca pela compreensão de si mesmo e do lugar do ser humano no cosmos.

O Manuscrito Sagrado que você tem em mãos é uma síntese contemporânea dessas sabedorias ancestrais, traduzida para a linguagem e os desafios do nosso tempo.`,
  symbolicInterpretation: `A interpretação simbólica é uma habilidade que se desenvolve com a prática. Ao ler os textos deste manuscrito, considere as seguintes orientações:

**Primeira Leitura**: Permita que as palavras fluam sem análise excessiva. Note quais passagens ressoam com você.

**Segunda Leitura**: Observe os símbolos e metáforas. Pergunte-se: "O que isso representa em minha própria vida?"

**Reflexão**: Reserve um momento para contemplar. O significado muitas vezes emerge não da análise, mas do silêncio que segue a leitura.

**Aplicação**: Considere como os insights podem ser integrados em sua vida cotidiana.`,
  howToJourney: `Esta jornada é pessoal e única. Não há ritmo certo ou errado. Algumas orientações podem ajudar:

• **Regularidade**: Estabeleça um horário consistente para sua prática, mesmo que seja breve
• **Ambiente**: Crie um espaço tranquilo, livre de distrações
• **Diário**: Registre suas reflexões e insights - eles são seu mapa pessoal
• **Paciência**: A transformação genuína é gradual e sutil
• **Compaixão**: Seja gentil consigo mesmo durante o processo`,
};

export const modules: Module[] = [
  {
    id: "module-1",
    number: 1,
    title: "A Origem dos Manuscritos Espirituais",
    subtitle: "História, contexto e significado simbólico",
    icon: "scroll",
    introduction: `Ao longo da história humana, diferentes civilizações desenvolveram tradições de sabedoria que foram preservadas em manuscritos sagrados. Estes textos não são meras palavras no papel - são testemunhos de descobertas profundas sobre a natureza da consciência humana.

Este módulo explora as raízes históricas dessas tradições e estabelece as bases para sua jornada de autoconhecimento.`,
    sections: [
      {
        id: "1-1",
        title: "As Primeiras Tradições de Sabedoria",
        content: `As tradições de sabedoria mais antigas que conhecemos surgiram há mais de 5.000 anos, em diferentes partes do mundo simultaneamente. Na Índia, os Vedas e Upanishads exploravam a natureza do Ser. Na China, Lao Tzu e Confúcio estabeleciam caminhos de harmonia. No Egito, os textos herméticos falavam da correspondência entre o céu e a terra.

O que une essas tradições é uma observação comum: existe uma dimensão da experiência humana que transcende o pensamento comum. Esta dimensão - chamada de Atman, Tao, ou Nous, dependendo da tradição - é acessível através de práticas contemplativas e auto-observação.

Os manuscritos que chegaram até nós são mapas deixados por aqueles que exploraram este território interior. Não são verdades absolutas a serem aceitas cegamente, mas convites para sua própria investigação.`
      },
      {
        id: "1-2",
        title: "A Linguagem Simbólica Universal",
        content: `Uma característica marcante dos manuscritos espirituais é o uso de símbolos. O sol representa a consciência iluminada. A água simboliza as emoções e o fluxo da vida. A montanha representa a estabilidade e a transcendência.

Esta linguagem simbólica não é arbitrária. Ela emerge de observações universais da psique humana. Carl Jung, o renomado psicólogo, identificou estes como "arquétipos" - padrões primordiais presentes no inconsciente coletivo de toda a humanidade.

Ao estudar símbolos, você não está aprendendo um código secreto, mas reconectando-se com uma linguagem que já existe em sua própria psique. Por isso, certos símbolos "falam" conosco de maneira profunda, mesmo quando não conseguimos explicar racionalmente.`
      },
      {
        id: "1-3",
        title: "O Propósito dos Textos Sagrados",
        content: `Os textos sagrados não foram escritos para entreter ou informar no sentido comum. Seu propósito é transformar a consciência do leitor. São ferramentas para despertar insights que já estão latentes em você.

Considere a diferença entre ler um manual de instruções e ler poesia. O manual transmite informação objetiva. A poesia evoca uma experiência. Os manuscritos sagrados funcionam mais como a poesia - eles trabalham em níveis múltiplos simultaneamente.

Por isso, a releitura é essencial. Cada vez que você retorna a um texto sagrado com nova experiência de vida, novos significados emergem. O texto permanece o mesmo, mas você mudou.`
      },
      {
        id: "1-4",
        title: "Como Este Manuscrito Foi Construído",
        content: `O Manuscrito Sagrado que você está explorando foi construído como uma síntese de múltiplas tradições, traduzidas para a sensibilidade contemporânea. Ele não pertence a nenhuma religião específica e não exige crenças prévias.

A estrutura segue um caminho progressivo: dos fundamentos históricos (este módulo) até práticas aplicáveis em seu dia a dia (módulos finais). Cada etapa prepara o terreno para a próxima.

Lembre-se: este é um material educacional e reflexivo. Não fazemos promessas de resultados garantidos. O que oferecemos são ferramentas que podem contribuir para seu desenvolvimento pessoal, dependendo de como você as utiliza.`
      }
    ],
    practicalExercise: {
      title: "Exercício: Mapeando Suas Raízes",
      instructions: [
        "Reserve 10-15 minutos em um ambiente tranquilo",
        "Reflita sobre as tradições de sabedoria que influenciaram sua vida - seja através da família, cultura ou escolhas pessoais",
        "Em seu diário, escreva brevemente sobre 2-3 fontes de sabedoria que você respeita e por quê",
        "Considere: O que essas tradições têm em comum? O que você busca neste manuscrito?",
        "Encerre com uma respiração profunda e um momento de silêncio"
      ]
    },
    finalReflection: `A jornada de autoconhecimento não começa do zero. Você traz consigo toda uma história de influências, experiências e anseios. Reconhecer esse pano de fundo é o primeiro passo para uma exploração consciente.

Os manuscritos antigos nos lembram que a busca pela sabedoria é uma herança humana universal. Você faz parte desta linhagem de buscadores.`
  },
  {
    id: "module-2",
    number: 2,
    title: "A Simbologia dos Arcanjos",
    subtitle: "Filosofia, arquétipos e reflexões",
    icon: "wings",
    introduction: `Os arcanjos são figuras que aparecem em múltiplas tradições culturais e religiosas. Neste módulo, exploramos não a crença literal nessas figuras, mas seu significado arquetípico - o que eles representam como símbolos da psique humana.

Esta é uma abordagem filosófica e educacional, não religiosa. Você não precisa acreditar em anjos para se beneficiar da sabedoria contida nesses arquétipos.`,
    sections: [
      {
        id: "2-1",
        title: "Arquétipos e a Psique Humana",
        content: `Carl Jung definiu arquétipos como padrões universais de comportamento e imagem que residem no inconsciente coletivo. Eles se manifestam em mitos, sonhos, arte e religião de todas as culturas.

Os arcanjos podem ser compreendidos como arquétipos poderosos: representações simbólicas de qualidades e capacidades que existem potencialmente em cada ser humano. Miguel representa a força e proteção. Gabriel representa a comunicação e revelação. Rafael representa a cura e restauração.

Quando trabalhamos com esses arquétipos, não estamos invocando entidades externas. Estamos ativando e integrando aspectos de nossa própria psique que podem estar dormentes ou subdesenvolvidos.`
      },
      {
        id: "2-2",
        title: "Miguel: O Arquétipo da Força Interior",
        content: `O arcanjo Miguel é tradicionalmente representado como um guerreiro de luz, enfrentando dragões e forças das trevas. Filosoficamente, ele representa nossa capacidade de enfrentar nossos medos e desafios internos.

O "dragão" que Miguel enfrenta pode ser interpretado como nossos padrões destrutivos, medos paralisantes ou aspectos sombrios que preferimos ignorar. A "espada" de Miguel é a clareza da consciência que discerne entre o que nos serve e o que nos prejudica.

Cultivar a energia de Miguel significa desenvolver coragem moral - a capacidade de fazer o que é certo mesmo quando é difícil. Não é agressividade, mas firmeza serena diante dos desafios.

Pergunte-se: Onde em minha vida preciso exercitar mais coragem e firmeza?`
      },
      {
        id: "2-3",
        title: "Gabriel: O Arquétipo da Clareza",
        content: `Gabriel é conhecido como o mensageiro, aquele que traz revelações e insights. Na tradição, é Gabriel quem anuncia nascimentos e novos começos.

Simbolicamente, Gabriel representa nossa capacidade de receber insights e comunicá-los claramente. É a intuição que rompe através da confusão mental, trazendo clareza.

O "novo nascimento" que Gabriel anuncia pode ser entendido como momentos de renovação interior - quando compreendemos algo de maneira nova, quando um padrão antigo se dissolve e um novo modo de ser emerge.

Cultivar a energia de Gabriel significa desenvolver nossa capacidade de escutar a voz interior e expressá-la autenticamente. É sobre comunicação verdadeira - consigo mesmo e com os outros.

Pergunte-se: Estou ouvindo minha intuição? Estou comunicando minha verdade?`
      },
      {
        id: "2-4",
        title: "Rafael: O Arquétipo da Cura",
        content: `Rafael é associado à cura em todas as suas formas - física, emocional e espiritual. Seu nome significa "Deus cura" em hebraico.

Filosoficamente, Rafael representa nossa capacidade inata de restauração e equilíbrio. O corpo tem mecanismos de autocura. A psique também tende naturalmente ao equilíbrio quando damos as condições adequadas.

A "cura" de Rafael não é mágica ou instantânea. É o processo gradual de reconhecer onde estamos fragmentados e trabalhar conscientemente para integração. Pode envolver perdão, aceitação, mudança de hábitos ou busca de ajuda profissional.

Cultivar a energia de Rafael significa tornar-se um agente ativo em seu próprio processo de cura. É assumir responsabilidade por seu bem-estar sem cair em perfeccionismo ou autoexigência.

Pergunte-se: O que em mim precisa de cura? Que passos posso dar nessa direção?`
      },
      {
        id: "2-5",
        title: "Integrando os Arquétipos",
        content: `Os três arcanjos principais representam aspectos complementares de uma psique integrada: força (Miguel), clareza (Gabriel) e cura (Rafael).

Um indivíduo equilibrado precisa de todos esses aspectos em harmonia. Força sem clareza pode se tornar brutalidade. Clareza sem força pode se tornar passividade. Cura sem as outras qualidades pode se tornar escapismo ou vitimização.

O trabalho com arquétipos não é sobre "invocar" energias externas, mas sobre reconhecer e desenvolver potencialidades que já existem em você. É uma forma de autoconhecimento através de símbolos.

À medida que você avança nesta jornada, observe qual desses arquétipos parece mais desenvolvido em você e qual precisa de mais atenção. Este autoconhecimento é valioso para seu crescimento.`
      }
    ],
    practicalExercise: {
      title: "Exercício: Diálogo com os Arquétipos",
      instructions: [
        "Reserve 15-20 minutos em ambiente tranquilo",
        "Escolha um dos três arquétipos que mais ressoa com você neste momento",
        "Em seu diário, escreva uma carta para esse arquétipo, expressando o que você precisa desenvolver",
        "Em seguida, escreva uma resposta imaginária desse arquétipo para você",
        "Observe que insights surgem através deste exercício de escrita criativa",
        "Não se trata de canalização espiritual, mas de acessar sua própria sabedoria interior através de símbolos"
      ]
    },
    finalReflection: `Os arquétipos são espelhos que nos ajudam a ver aspectos de nós mesmos que podem estar ocultos. Ao trabalhar com os símbolos de Miguel, Gabriel e Rafael, você está na verdade desenvolvendo força, clareza e capacidade de cura em si mesmo.

Lembre-se: esta é uma jornada de autoconhecimento, não de dependência de forças externas. O poder sempre esteve em você.`
  },
  {
    id: "module-3",
    number: 3,
    title: "Caminho da Clareza Interior",
    subtitle: "Ferramentas práticas de introspecção",
    icon: "eye",
    introduction: `A clareza interior é a capacidade de ver a si mesmo e às situações da vida com lucidez, livre de distorções emocionais ou cognitivas. Não é um estado permanente que se alcança uma vez, mas uma habilidade que se cultiva continuamente.

Este módulo oferece ferramentas práticas para desenvolver essa clareza através da introspecção consciente.`,
    sections: [
      {
        id: "3-1",
        title: "O Que Obscurece Nossa Visão",
        content: `Antes de buscar clareza, é útil compreender o que a obscurece. Várias tradições identificaram obstáculos semelhantes:

**Reatividade Emocional**: Quando estamos dominados por emoções intensas - raiva, medo, ansiedade, desejo - nossa percepção se estreita. Vemos apenas o que a emoção quer que vejamos.

**Padrões Mentais**: Crenças não examinadas, preconceitos e suposições automáticas filtram nossa experiência antes mesmo de termos consciência dela.

**Identificação Excessiva**: Quando nos identificamos demais com nossos pensamentos, emoções, papéis sociais ou posses, perdemos a perspectiva mais ampla.

**Distração Constante**: A mente saltando de pensamento em pensamento, sem capacidade de foco, não consegue ver com profundidade.

Reconhecer esses obstáculos em você mesmo é o primeiro passo para superá-los.`
      },
      {
        id: "3-2",
        title: "A Arte da Auto-Observação",
        content: `A auto-observação é a prática fundamental para desenvolver clareza. Consiste em observar seus próprios pensamentos, emoções e comportamentos como se fosse uma testemunha imparcial.

**Como Praticar:**

1. **Pausas Conscientes**: Várias vezes ao dia, pause brevemente e observe: O que estou pensando? O que estou sentindo? O que estou fazendo?

2. **Sem Julgamento**: Observe sem classificar como "bom" ou "ruim". Apenas note.

3. **Registro**: Ao final do dia, registre brevemente os padrões que observou.

4. **Perguntas-Chave**: "Por que reagi dessa forma?" "Qual crença está por trás desse comportamento?" "O que essa emoção está tentando me dizer?"

Com prática consistente, você começará a notar padrões que antes eram invisíveis. Este conhecimento é poder - o poder de escolher conscientemente em vez de reagir automaticamente.`
      },
      {
        id: "3-3",
        title: "O Silêncio Como Ferramenta",
        content: `O silêncio externo e interno é um poderoso catalisador de clareza. A maioria de nós vive em ambientes saturados de estímulos - sons, informações, demandas. A mente espelha essa agitação.

**Silêncio Externo**: Reserve momentos do dia para estar em ambientes calmos, sem música, sem dispositivos, sem conversas. Mesmo 10 minutos podem fazer diferença.

**Silêncio Interno**: Mais desafiador, este é o silêncio da mente tagarela. Não se trata de forçar os pensamentos a parar, mas de não se envolver com cada pensamento que surge.

**Prática do Silêncio**:
- Sente-se confortavelmente
- Feche os olhos
- Observe os pensamentos como nuvens passando no céu
- Você é o céu, não as nuvens
- Retorne gentilmente a esta perspectiva quando se perder em pensamentos

O silêncio revela o que estava oculto pelo ruído. Muitos insights surgem não durante a agitação, mas nos momentos de quietude que seguem.`
      },
      {
        id: "3-4",
        title: "Questionamento Socrático",
        content: `Sócrates, o filósofo grego, desenvolveu um método de questionamento que leva à clareza através de perguntas bem formuladas. Este método permanece poderoso até hoje.

**O Método**:

1. **Identifique uma crença ou suposição**: Por exemplo, "Eu preciso da aprovação dos outros para me sentir bem."

2. **Questione**: "Isso é realmente verdade? Sempre? Em todas as situações?"

3. **Explore consequências**: "Se eu mantiver essa crença, aonde ela me leva? Quais são os custos?"

4. **Busque evidências contrárias**: "Houve momentos em que me senti bem sem aprovação externa?"

5. **Reformule**: "Uma perspectiva mais equilibrada seria..."

Este método não é sobre negatividade ou ceticismo, mas sobre não aceitar automaticamente o que a mente diz. Muitas de nossas crenças foram formadas na infância e nunca foram examinadas. O questionamento socrático traz luz a essas zonas obscuras.`
      },
      {
        id: "3-5",
        title: "Clareza na Tomada de Decisões",
        content: `A clareza interior tem aplicações práticas, especialmente na tomada de decisões. Quando estamos confusos, tendemos a procrastinar, decidir impulsivamente ou deixar que outros decidam por nós.

**Práticas para Decisões Claras**:

1. **Espere a Emoção Baixar**: Se você está emocionalmente agitado, não é o momento de decidir algo importante. Espere até recuperar o equilíbrio.

2. **Escreva as Opções**: Ver as alternativas no papel clareia a mente.

3. **Consulte Valores**: Qual opção está mais alinhada com seus valores essenciais? Se você não tem clareza sobre seus valores, este é um trabalho preparatório importante.

4. **Projete Consequências**: Imagine-se daqui a um ano, cinco anos. Qual escolha você agradeceria ter feito?

5. **Ouça o Corpo**: Muitas vezes, o corpo sabe antes da mente. Ao considerar uma opção, observe as sensações corporais que surgem.

Lembre-se: nem toda decisão precisa ser perfeita. Clareza não é onisciência. É agir conscientemente com a melhor informação disponível.`
      }
    ],
    practicalExercise: {
      title: "Exercício: Inventário de Clareza",
      instructions: [
        "Reserve 20 minutos sem interrupções",
        "Divida uma página em três colunas: Área da Vida | O Que Está Claro | O Que Está Confuso",
        "Liste as principais áreas: relacionamentos, trabalho, saúde, propósito, finanças, espiritualidade",
        "Para cada área, preencha honestamente o que você vê com clareza e o que permanece nebuloso",
        "Escolha uma área confusa e aplique o questionamento socrático",
        "Registre qualquer insight que surgir"
      ]
    },
    finalReflection: `A clareza não é um destino, mas um caminho. Cada dia oferece oportunidades para ver mais claramente - a si mesmo, aos outros, às situações. As ferramentas deste módulo são simples, mas poderosas quando aplicadas consistentemente.

Não espere resultados imediatos. A neblina que se acumulou ao longo de anos não se dissipa em uma sessão. Mas com prática regular, você notará uma diferença progressiva na qualidade de sua percepção e decisões.`
  },
  {
    id: "module-4",
    number: 4,
    title: "Virtudes e Equilíbrio Emocional",
    subtitle: "Texto educativo e prático",
    icon: "balance",
    introduction: `As virtudes não são conceitos abstratos, mas capacidades práticas que podem ser desenvolvidas. O equilíbrio emocional não significa ausência de emoções, mas a capacidade de experimentá-las plenamente sem ser dominado por elas.

Este módulo explora virtudes clássicas e oferece orientações práticas para cultivá-las em sua vida.`,
    sections: [
      {
        id: "4-1",
        title: "O Que São Virtudes",
        content: `Aristóteles definiu virtude como o ponto médio entre dois extremos. Coragem, por exemplo, é o meio-termo entre covardia e temeridade. Generosidade está entre avareza e desperdício.

Esta visão é prática: as virtudes não são ideais inatingíveis, mas estados equilibrados que podemos cultivar conscientemente.

**Características das Virtudes**:

1. **São hábitos**: Não nascemos virtuosos; tornamo-nos virtuosos através da prática repetida.

2. **São contextuais**: A ação virtuosa depende das circunstâncias. Às vezes, falar é corajoso; às vezes, o silêncio é.

3. **Formam um sistema**: As virtudes se apoiam mutuamente. Coragem sem prudência pode ser destrutiva.

4. **Levam à eudaimonia**: Este termo grego significa "florescimento" ou "bem-viver" - não prazer momentâneo, mas uma vida genuinamente boa.`
      },
      {
        id: "4-2",
        title: "Compaixão: A Virtude do Coração",
        content: `Compaixão é a capacidade de reconhecer o sofrimento - em si mesmo e nos outros - e responder com cuidado. Não é pena, que olha de cima para baixo, mas conexão horizontal com a experiência humana compartilhada.

**Desenvolvendo Compaixão**:

1. **Comece consigo**: Muitas pessoas são mais duras consigo mesmas do que com os outros. Pratique autocompaixão quando falhar ou sofrer.

2. **Reconheça a humanidade comum**: Todos sofrem. Todos cometem erros. Todos querem ser felizes. Esta percepção dissolve o julgamento.

3. **Pratique a escuta ativa**: Quando alguém compartilha um problema, resista ao impulso de consertar. Às vezes, presença atenta é o que mais ajuda.

4. **Ações compassivas**: A compaixão não é apenas sentimento; expressa-se em ações. Identifique uma ação compassiva que você pode realizar esta semana.

A compaixão não significa tolerar comportamentos prejudiciais. Às vezes, a resposta mais compassiva é estabelecer limites claros.`
      },
      {
        id: "4-3",
        title: "Paciência: A Virtude do Tempo",
        content: `Em uma cultura de gratificação instantânea, a paciência se tornou rara e preciosa. Ela é a capacidade de manter a calma e persistir diante de atrasos, obstáculos ou dificuldades.

**A Natureza da Paciência**:

A paciência não é passividade. É uma força ativa - a escolha consciente de não reagir impulsivamente quando as coisas não acontecem no nosso tempo desejado.

Ela reconhece que muitos processos importantes - crescimento pessoal, relacionamentos profundos, habilidades complexas - requerem tempo. Tentar apressá-los é contraproducente.

**Cultivando Paciência**:

1. **Identifique gatilhos**: O que testa sua paciência? Trânsito? Filas? Pessoas? Saber isso ajuda a se preparar.

2. **Pratique em doses pequenas**: Use pequenos inconvenientes como oportunidades de treino.

3. **Respire antes de reagir**: Três respirações profundas podem ser suficientes para evitar uma reação impulsiva.

4. **Perspectiva temporal**: Pergunte-se: "Isso importará daqui a um ano?" Muitas frustrações são triviais a longo prazo.

5. **Aceite a incerteza**: Muita impaciência vem da ilusão de controle. Aceitar que nem tudo está em nossas mãos traz paz.`
      },
      {
        id: "4-4",
        title: "Equilíbrio Emocional na Prática",
        content: `Equilíbrio emocional não significa ser frio ou reprimido. Significa experimentar emoções plenamente sem ser arrastado por elas. É a diferença entre sentir raiva e agir destrutivamente a partir da raiva.

**Princípios do Equilíbrio Emocional**:

1. **Todas as emoções são válidas**: Não existem emoções "ruins" - apenas maneiras mais ou menos hábeis de lidar com elas.

2. **Emoções são transitórias**: Nenhuma emoção dura para sempre. Esta percepção ajuda durante estados difíceis.

3. **Você não é suas emoções**: Há uma diferença entre "Estou com raiva" e "Há raiva presente em mim". A segunda formulação preserva espaço para escolha.

**Práticas de Regulação**:

1. **Nomear a emoção**: Pesquisas mostram que simplesmente nomear uma emoção reduz sua intensidade. "Isto é ansiedade."

2. **Localizar no corpo**: Onde você sente esta emoção? Coração apertado? Estômago tenso? Focalize a sensação.

3. **Respirar através dela**: Direcione a respiração para a área de tensão. Não para mudar, mas para acompanhar.

4. **Expressão saudável**: Encontre formas construtivas de expressar emoções - movimento, arte, conversa, escrita.`
      },
      {
        id: "4-5",
        title: "Integridade e Autenticidade",
        content: `Integridade significa que suas ações estão alinhadas com seus valores. Autenticidade significa que você se apresenta ao mundo como realmente é, sem máscaras excessivas.

Estas virtudes são fundamentais porque sem elas, todas as outras podem ser fachada. Uma pessoa pode aparentar compaixão enquanto esconde segundas intenções. Integridade é o que torna as virtudes genuínas.

**Sinais de Integridade**:
- Fazer o certo mesmo quando ninguém está olhando
- Cumprir compromissos, mesmo os pequenos
- Admitir erros e buscar repará-los
- Ser consistente em diferentes contextos

**Cultivando Autenticidade**:

1. **Conheça seus valores**: O que realmente importa para você? Não o que deveria importar, mas o que de fato importa.

2. **Observe suas máscaras**: Todos usamos máscaras sociais. Observe quando você está sendo performático versus genuíno.

3. **Risque seguro**: Comece a ser mais autêntico em contextos seguros. A autenticidade é um músculo que se fortalece com a prática.

4. **Aceite a vulnerabilidade**: Ser autêntico significa aceitar que nem todos vão gostar de você. E está tudo bem.`
      }
    ],
    practicalExercise: {
      title: "Exercício: Mapa de Virtudes",
      instructions: [
        "Liste as virtudes mencionadas: compaixão, paciência, equilíbrio emocional, integridade, autenticidade",
        "Para cada uma, avalie honestamente em uma escala de 1-10 onde você está atualmente",
        "Identifique a virtude com menor pontuação - esta é sua área de crescimento prioritária",
        "Defina uma ação concreta que você pode praticar esta semana para desenvolvê-la",
        "Ao final da semana, reflita sobre os desafios e aprendizados"
      ]
    },
    finalReflection: `As virtudes são o fundamento de uma vida bem vivida. Elas não são restrições que limitam sua liberdade, mas estruturas que a ampliam. Uma pessoa dominada por impulsos não é livre - é refém de suas reações.

O caminho das virtudes é gradual e requer paciência consigo mesmo. Cada pequena escolha consciente fortalece o hábito virtuoso. Com o tempo, o que era difícil se torna natural.`
  },
  {
    id: "module-5",
    number: 5,
    title: "Práticas de Reconexão e Consciência",
    subtitle: "Exercícios aplicáveis diariamente",
    icon: "lotus",
    introduction: `Este módulo final oferece práticas concretas que você pode integrar em seu cotidiano. Não são rituais complexos ou esotéricos, mas exercícios simples que, aplicados consistentemente, podem contribuir para uma vida mais consciente e conectada.

O objetivo é que você termine este manuscrito com ferramentas práticas, não apenas conceitos.`,
    sections: [
      {
        id: "5-1",
        title: "Rotina Matinal de Consciência",
        content: `Como você começa o dia define o tom para tudo que segue. Uma rotina matinal consciente pode transformar sua experiência diária.

**Elementos de uma Manhã Consciente**:

1. **Antes do celular**: Os primeiros minutos são preciosos. Resista ao impulso de checar notificações imediatamente.

2. **Gratidão Matinal**: Ainda na cama, identifique três coisas pelas quais você é grato. Podem ser simples.

3. **Respiração Intencional**: 5-10 respirações profundas, conscientes. Isso ativa o sistema nervoso parassimpático.

4. **Intenção para o Dia**: Defina uma intenção simples. Não é uma lista de tarefas, mas uma qualidade que você quer cultivar. "Hoje pratico paciência."

5. **Movimento Gentil**: Alongamentos simples ajudam a acordar o corpo com gentileza.

**Não precisa ser longo**: 10-15 minutos são suficientes. A consistência importa mais que a duração.`
      },
      {
        id: "5-2",
        title: "Pausas Conscientes ao Longo do Dia",
        content: `A consciência não deve ficar confinada a práticas formais. O verdadeiro desafio é trazer presença para as atividades ordinárias.

**A Prática das Pausas**:

Defina lembretes para pausar brevemente ao longo do dia - pode ser a cada hora ou em momentos de transição (antes de uma reunião, ao entrar no carro, antes de comer).

Durante a pausa (1-2 minutos):
- Feche os olhos ou suavize o olhar
- Tome três respirações conscientes
- Pergunte: "Como estou agora?" (corpo, mente, emoções)
- Retome a atividade com renovada presença

**Atividades Cotidianas como Prática**:

- **Comer**: Uma refeição por dia feita em silêncio, saboreando cada mordida
- **Caminhar**: Perceber os pés tocando o chão, o ritmo da respiração
- **Ouvir**: Em conversas, ouvir verdadeiramente, sem planejar a resposta

Estas práticas informais são tão importantes quanto a meditação formal. Elas integram a consciência na vida real.`
      },
      {
        id: "5-3",
        title: "Prática da Revisão Noturna",
        content: `Antes de dormir, reserve alguns minutos para uma revisão consciente do dia. Esta prática, utilizada em diversas tradições, promove autoconhecimento e prepara para um sono reparador.

**Estrutura da Revisão (10-15 minutos)**:

1. **Acomode-se confortavelmente**, sentado ou deitado

2. **Rebobine o dia** mentalmente, do momento atual até o despertar. Observe os eventos principais como um filme.

3. **Identifique momentos positivos**: Onde você agiu de acordo com seus valores? O que correu bem?

4. **Identifique desafios**: Houve momentos de reatividade, impaciência, inconsciência? Observe sem julgamento.

5. **Agradeça e perdoe**: Agradeça pelo dia. Perdoe a si mesmo e aos outros por falhas.

6. **Solte o dia**: Mentalmente, "feche" o dia. O que passou, passou.

Esta prática melhora a qualidade do sono e aumenta a autoconsciência progressivamente. Os padrões que você não percebia começam a ficar visíveis.`
      },
      {
        id: "5-4",
        title: "Práticas de Reconexão com a Natureza",
        content: `A natureza tem um efeito comprovado de restauração psicológica. Mesmo em ambientes urbanos, é possível cultivar conexão com o mundo natural.

**Práticas Simples**:

1. **Banho de Floresta (Shinrin-yoku)**: Tempo em áreas verdes, caminhando lentamente, usando todos os sentidos. Se possível, 20 minutos por semana já mostra benefícios.

2. **Observação do Céu**: Reserve momentos para olhar o céu - as nuvens, as estrelas. Isso naturalmente expande a perspectiva.

3. **Contato com Elementos**: Água corrente, terra, sol na pele. Mesmo tocar uma planta em casa pode ser uma reconexão.

4. **Ritmos Naturais**: Observe o nascer e pôr do sol quando possível. Alinhamos nossos ritmos internos com os externos.

5. **Silêncio na Natureza**: Mesmo em parques urbanos, há momentos de quietude. Busque-os.

A natureza não exige nada de nós. Essa ausência de demanda é profundamente restauradora em um mundo que constantemente pede nossa atenção.`
      },
      {
        id: "5-5",
        title: "Integrando as Práticas em Sua Vida",
        content: `O maior desafio não é aprender práticas, mas integrá-las consistentemente. Aqui estão orientações para tornar isso mais provável:

**Comece Pequeno**: É melhor praticar 5 minutos diariamente do que 1 hora esporadicamente. Construa o hábito antes de expandir.

**Vincule a Gatilhos**: Associe a prática a algo que você já faz. "Depois do café da manhã, faço minha prática matinal."

**Tenha Flexibilidade**: Se perder um dia, não desista. Retome no dia seguinte sem drama.

**Rastreie Sem Obsecar**: Um simples registro (praticou/não praticou) ajuda na consistência. Mas não se torture se houver lacunas.

**Adapte**: As práticas oferecidas são sugestões. Modifique-as para seu contexto e preferências.

**Seja Paciente**: Mudanças genuínas levam tempo. Não espere transformações imediatas. Comprometa-se com o processo, não com resultados específicos.

**Busque Comunidade**: Se possível, encontre outros que compartilham dessa jornada. Prática em grupo fortalece a motivação individual.`
      }
    ],
    practicalExercise: {
      title: "Exercício: Plano de Prática Pessoal",
      instructions: [
        "Reveja todas as práticas apresentadas neste módulo",
        "Escolha UMA prática de cada categoria: matinal, diária (pausas), noturna, natureza",
        "Crie um cronograma realista para sua semana",
        "Defina lembretes no celular se necessário",
        "Ao final da semana, avalie: O que funcionou? O que precisa de ajuste?",
        "Continue refinando seu plano nas semanas seguintes"
      ]
    },
    finalReflection: `Este módulo encerra o conteúdo principal do Manuscrito Sagrado. Você agora possui um conjunto de ferramentas práticas para sua jornada de autoconhecimento.

Lembre-se: o manuscrito não é o destino, mas um mapa. O território é sua própria vida. A verdadeira prática acontece quando você fecha este app e retorna às suas atividades cotidianas.

Que as práticas aqui oferecidas sirvam como sementes que você cultiva com paciência e dedicação. Os frutos virão no tempo certo.`
  }
];

export const conclusionContent = {
  title: "Conclusão da Jornada",
  mainText: `Você chegou ao final deste Manuscrito Sagrado. Mas, como toda jornada verdadeira de autoconhecimento, este é mais um início do que um fim.

Os conceitos explorados, os exercícios praticados e as reflexões registradas são ferramentas que agora fazem parte do seu repertório. Eles não perdem valor com o tempo - ao contrário, aprofundam-se à medida que você os revisita com nova experiência de vida.`,
  encouragement: `Encorajamos você a:

• **Revisitar os módulos** periodicamente. Você encontrará novos significados a cada leitura.

• **Manter a prática regular**. A consistência é mais importante que a intensidade.

• **Usar o diário** como seu companheiro de jornada. Ele é o registro de sua evolução.

• **Ser paciente** consigo mesmo. A transformação genuína é gradual e nem sempre linear.

• **Compartilhar** o que aprendeu de maneiras que respeitem sua experiência única.`,
  finalWords: `O Manuscrito Sagrado foi criado como um guia educacional e reflexivo. Não prometemos milagres ou resultados garantidos. O que oferecemos são ferramentas que, quando aplicadas com sinceridade e consistência, podem contribuir para uma vida mais consciente e significativa.

A verdadeira sabedoria não está nestas páginas - está em você. Este manuscrito é apenas um espelho que ajuda você a ver o que já existe.

Que sua jornada continue com clareza, propósito e paz interior.`
};

export const creditsContent = {
  title: "Créditos e Referências",
  culturalReferences: [
    {
      tradition: "Filosofia Grega",
      description: "Sócrates, Platão e Aristóteles contribuíram com os fundamentos da ética das virtudes e do autoconhecimento ocidental. O método socrático de questionamento e a ética aristotélica informam várias práticas deste manuscrito."
    },
    {
      tradition: "Tradições Contemplativas Orientais",
      description: "O Budismo, Hinduísmo e Taoísmo desenvolveram ao longo de milênios práticas de meditação e auto-observação. Conceitos como atenção plena (mindfulness) e compaixão têm raízes nessas tradições."
    },
    {
      tradition: "Psicologia Profunda",
      description: "Carl Jung, com seu trabalho sobre arquétipos e inconsciente coletivo, oferece uma ponte entre simbolismo tradicional e psicologia moderna. Suas ideias informam nossa abordagem dos símbolos."
    },
    {
      tradition: "Hermetismo e Tradições Esotéricas",
      description: "Os textos herméticos do Egito helenístico e tradições subsequentes exploram a correspondência entre macrocosmo e microcosmo. Sua linguagem simbólica ecoa em nossa abordagem."
    },
    {
      tradition: "Estoicismo",
      description: "Marco Aurélio, Sêneca e Epicteto desenvolveram práticas de autodisciplina e aceitação que permanecem relevantes. A revisão diária e o foco no que está sob nosso controle vêm desta tradição."
    }
  ],
  disclaimer: `Este material é educacional e reflexivo. Não substitui tratamento médico, psicológico ou psiquiátrico quando necessário. As práticas aqui descritas são seguras para a maioria das pessoas, mas se você tiver condições de saúde mental, consulte um profissional antes de iniciar.

Não fazemos promessas de resultados específicos. O impacto das práticas depende de múltiplos fatores, incluindo seu engajamento e circunstâncias individuais.

Os símbolos e arquétipos utilizados são ferramentas psicológicas, não afirmações literais sobre entidades sobrenaturais. Respeitamos todas as crenças, mas nosso conteúdo é fundamentalmente educacional e não-religioso.`,
  team: "O Manuscrito Sagrado foi desenvolvido com cuidado, combinando sabedoria de múltiplas tradições em uma linguagem acessível e contemporânea. Nosso compromisso é com qualidade, integridade e valor real para você."
};
