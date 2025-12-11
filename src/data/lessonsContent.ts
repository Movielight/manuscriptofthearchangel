// Conteúdo das Aulas em Vídeo do Manuscrito Sagrado
// Cada aula tem texto introdutório e espaço para link de vídeo

export interface Lesson {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  duration: string;
  introduction: string;
  whatYouWillLearn: string[];
  deepContent: string;
  videoUrl: string | null; // null = vídeo ainda não adicionado
}

export const lessons: Lesson[] = [
  {
    id: "lesson-1",
    number: 1,
    title: "Introdução ao Manuscrito e à Jornada Interior",
    subtitle: "Fundamentos para sua transformação consciente",
    duration: "~20 min",
    introduction: `Nesta primeira aula, você será apresentado à essência do Manuscrito Sagrado e ao caminho de autoconhecimento que se abre diante de você.

Antes de mergulhar nos conteúdos específicos, é fundamental compreender o propósito desta jornada e como aproveitar ao máximo cada ensinamento. Esta não é uma promessa de mudança instantânea, mas um convite para um trabalho interno genuíno e gradual.`,
    whatYouWillLearn: [
      "O propósito e a filosofia por trás do Manuscrito Sagrado",
      "Como esta jornada difere de abordagens superficiais de autoajuda",
      "A importância da consistência e paciência no processo",
      "Como criar o ambiente mental adequado para o aprendizado",
      "Os primeiros passos práticos para iniciar sua transformação"
    ],
    deepContent: `A jornada interior é, talvez, a mais desafiadora e gratificante que um ser humano pode empreender. Diferente de viagens externas, onde o destino é conhecido e o caminho pode ser mapeado, a exploração da própria consciência revela territórios que não podem ser descritos completamente por palavras.

O Manuscrito Sagrado serve como um guia nesta exploração. Ele não oferece respostas prontas, mas ferramentas para que você descubra suas próprias respostas. Cada insight que você terá será genuinamente seu.

Nesta aula introdutória, estabelecemos as bases para tudo que virá. Você aprenderá a cultivar a disposição mental adequada - uma combinação de abertura, humildade e discernimento crítico. Esta disposição é mais importante que qualquer técnica específica.

Lembre-se: o valor desta jornada não está em acumular informações, mas em transformar sua relação consigo mesmo e com a vida.`,
    videoUrl: null
  },
  {
    id: "lesson-2",
    number: 2,
    title: "Simbologia Espiritual e Arquétipos",
    subtitle: "A linguagem universal do inconsciente",
    duration: "~25 min",
    introduction: `Os símbolos são a linguagem mais antiga da humanidade. Antes da escrita, antes mesmo da linguagem verbal estruturada, os seres humanos se comunicavam através de símbolos - em pinturas rupestres, rituais e mitos.

Esta aula explora como os símbolos funcionam em nossa psique e como podemos utilizá-los conscientemente para acessar camadas mais profundas de compreensão.`,
    whatYouWillLearn: [
      "O que são arquétipos e como eles influenciam sua vida",
      "A diferença entre interpretação literal e simbólica",
      "Os principais símbolos universais e seus significados",
      "Como trabalhar com símbolos de forma prática e segura",
      "A conexão entre símbolos pessoais e universais"
    ],
    deepContent: `Carl Jung revolucionou a psicologia ao identificar padrões universais que se repetem em mitos, sonhos e religiões de todas as culturas. Ele chamou esses padrões de arquétipos.

Os arquétipos não são conceitos abstratos - eles operam em você constantemente. Quando você admira um herói em um filme, está ressonando com o arquétipo do herói. Quando você sente nostalgia por um tempo mais simples, pode estar conectado ao arquétipo do paraíso perdido.

Compreender a linguagem simbólica não é aprender um código secreto. É reconhecer uma linguagem que você já fala inconscientemente. Esta aula tornará esse conhecimento consciente.

Trabalharemos com símbolos de forma prática: como interpretá-los em seus sonhos, como reconhecê-los nas situações da vida, e como utilizá-los intencionalmente em práticas contemplativas.

Importante: esta é uma abordagem educacional e psicológica, não religiosa. Os símbolos são ferramentas de autoconhecimento, não objetos de adoração.`,
    videoUrl: null
  },
  {
    id: "lesson-3",
    number: 3,
    title: "Técnicas de Introspecção e Alinhamento Emocional",
    subtitle: "Ferramentas práticas para clareza interior",
    duration: "~30 min",
    introduction: `A introspecção é a capacidade de olhar para dentro - observar seus pensamentos, emoções e padrões. O alinhamento emocional é o resultado natural de uma introspecção sincera e consistente.

Esta aula oferece técnicas concretas que você pode aplicar imediatamente em sua vida. Não são teorias abstratas, mas práticas testadas que produzem resultados quando aplicadas com regularidade.`,
    whatYouWillLearn: [
      "Técnicas específicas de auto-observação",
      "Como identificar e nomear emoções com precisão",
      "Práticas de respiração para regulação emocional",
      "O método do questionamento socrático aplicado",
      "Como integrar introspecção na rotina diária"
    ],
    deepContent: `A maioria das pessoas vive no modo automático. Pensamentos surgem, emoções acontecem, comportamentos se repetem - tudo sem que haja uma testemunha consciente observando o processo.

A introspecção quebra esse automatismo. Quando você observa um pensamento, você não é mais apenas o pensamento - há você e o pensamento. Este pequeno espaço de consciência é revolucionário.

Nesta aula, ensinaremos técnicas específicas:

1. A prática da pausa consciente - como criar espaços de observação ao longo do dia
2. O diário de emoções - um método estruturado para rastrear seus estados internos
3. Respiração reguladora - técnicas simples que acalmam o sistema nervoso
4. Questionamento socrático - como desafiar crenças limitantes

Estas ferramentas são simples, mas não são fáceis. Requerem prática e paciência. Os resultados, porém, são transformadores quando você se compromete com o processo.

Lembre-se: não oferecemos soluções mágicas. O que oferecemos são métodos comprovados que funcionam quando aplicados consistentemente.`,
    videoUrl: null
  },
  {
    id: "lesson-4",
    number: 4,
    title: "Práticas Simbólicas de Foco e Intenção",
    subtitle: "Rituais conscientes para o dia a dia",
    duration: "~25 min",
    introduction: `Esta aula apresenta práticas simbólicas que podem ajudar a estruturar sua experiência e fortalecer sua intenção. São rituais no sentido psicológico - ações carregadas de significado pessoal que auxiliam no processo de transformação.

É importante esclarecer: estas práticas não têm poder mágico ou sobrenatural. Seu valor está em como elas organizam sua mente e direcionam sua atenção. Os resultados vêm do seu trabalho interno, não de forças externas.`,
    whatYouWillLearn: [
      "O que são rituais simbólicos e como eles funcionam psicologicamente",
      "Criação de rituais matinais e noturnos personalizados",
      "Uso de objetos simbólicos como âncoras de atenção",
      "Práticas de definição e fortalecimento de intenções",
      "Como adaptar rituais tradicionais ao contexto moderno"
    ],
    deepContent: `Rituais são parte fundamental da experiência humana. Desde os rituais de passagem em culturas tradicionais até a simples rotina de tomar café pela manhã, ações repetidas com significado estruturam nossa experiência do tempo e da vida.

O que torna um ritual efetivo não é magia, mas psicologia. Quando você realiza uma ação conscientemente, com atenção plena e significado atribuído, você está:

1. Treinando sua mente para foco
2. Criando associações neurais que reforçam comportamentos desejados
3. Marcando transições de maneira significativa
4. Conectando-se com algo maior que o momento presente

Nesta aula, oferecemos práticas seguras e não-religiosas:

- Ritual de intenção matinal: uma sequência de ações que preparam sua mente para o dia
- Prática do fechamento consciente: como encerrar o dia de forma equilibrada
- Uso de objetos-âncora: como utilizar itens físicos para recordar estados mentais desejados
- Ritual de transição: como marcar mudanças importantes em sua vida

Estas práticas são sugestões. Encorajamos você a adaptá-las ao seu contexto e criar seus próprios rituais significativos.

Importante: Não prometemos que estas práticas trarão resultados específicos. Seu valor está no processo, não em garantias de resultados.`,
    videoUrl: null
  },
  {
    id: "lesson-5",
    number: 5,
    title: "Como Aplicar os Ensinamentos no Dia a Dia",
    subtitle: "Da teoria à prática cotidiana",
    duration: "~30 min",
    introduction: `O verdadeiro teste de qualquer ensinamento está em sua aplicação prática. Esta aula final da série foca em como integrar tudo o que você aprendeu no fluxo real da vida cotidiana - no trabalho, nos relacionamentos, nos desafios diários.

A sabedoria que permanece nas páginas de um livro (ou em um app) não tem valor real. Apenas quando se torna ação vivida é que transforma.`,
    whatYouWillLearn: [
      "Estratégias para manter a prática quando a vida está agitada",
      "Como aplicar consciência em situações desafiadoras",
      "Práticas invisíveis que podem ser feitas em qualquer lugar",
      "Como lidar com recaídas e períodos de desmotivação",
      "Construindo uma vida alinhada com seus valores essenciais"
    ],
    deepContent: `É fácil sentir-se equilibrado e consciente durante uma meditação tranquila. O desafio é manter essa qualidade quando o chefe está estressado, o trânsito está parado, ou um relacionamento está em crise.

Esta aula é sobre levar os ensinamentos para o campo de batalha da vida real.

Alguns princípios fundamentais:

**1. Micro-práticas são mais importantes que práticas longas**
Três respirações conscientes várias vezes ao dia superam uma hora de meditação seguida de 23 horas de inconsciência.

**2. Situações difíceis são oportunidades**
Cada momento de frustração, raiva ou ansiedade é uma chance de praticar o que você aprendeu. Não trate esses momentos como falhas, mas como treino.

**3. Progresso não é linear**
Haverá dias melhores e piores. Haverá períodos de grande clareza e períodos de confusão. Isso é normal. O importante é a tendência de longo prazo, não as flutuações diárias.

**4. Ambiente importa**
Estruture seu ambiente para apoiar sua prática. Lembretes visuais, rotinas estabelecidas, e pessoas que compartilham valores similares fazem diferença.

**5. Seja realista**
Não tente mudar tudo de uma vez. Escolha uma área da vida para focar primeiro. Quando essa se tornar mais natural, expanda.

O caminho do autoconhecimento não tem fim. Você não chegará a um ponto de conclusão onde não há mais trabalho a fazer. O objetivo não é perfeição, mas crescimento contínuo e presença cada vez mais consistente.`,
    videoUrl: null
  }
];

export const lessonsIntroduction = {
  title: "Aulas em Vídeo",
  subtitle: "Aprofunde seu conhecimento com conteúdo visual",
  description: `Esta seção contém videoaulas que complementam e aprofundam os módulos escritos do Manuscrito Sagrado.

Cada aula foi desenvolvida para oferecer uma experiência imersiva de aprendizado, combinando explicações detalhadas com demonstrações práticas.

Recomendamos que você assista às aulas na ordem apresentada, e que reserve um tempo adequado para reflexão após cada uma.`,
  howToUse: [
    "Assista em um ambiente tranquilo, sem distrações",
    "Tenha seu diário por perto para anotações",
    "Pause quando necessário para absorver o conteúdo",
    "Pratique os exercícios sugeridos antes de avançar",
    "Reassista aulas que ressoaram especialmente com você"
  ]
};
