// Conteúdo das Meditações Guiadas do Manuscrito Sagrado

export interface Meditation {
  id: string;
  title: string;
  subtitle: string;
  duration: number; // em minutos
  icon: string;
  preparation: string;
  purpose: string;
  instructions: string[];
  closingGuidance: string;
}

export const meditations: Meditation[] = [
  {
    id: "meditation-clarity",
    title: "Meditação da Clareza Mental",
    subtitle: "Dissolva a neblina dos pensamentos",
    duration: 10,
    icon: "brain",
    preparation: `Antes de iniciar esta meditação, prepare seu ambiente:

• Escolha um local tranquilo onde você não será interrompido
• Silencie dispositivos eletrônicos
• Sente-se confortavelmente - pode ser em uma cadeira com os pés no chão ou em uma almofada no solo
• Mantenha a coluna ereta, mas sem rigidez
• Solte os ombros e relaxe as mãos sobre as coxas ou colo`,
    purpose: `A Meditação da Clareza Mental tem como objetivo acalmar a agitação mental e criar espaço entre você e seus pensamentos.

Quando a mente está agitada, é como olhar para um lago com a superfície turbulenta - não conseguimos ver o que está abaixo. Esta prática permite que a agitação se acalme, revelando clareza natural.

Esta não é uma prática para "esvaziar a mente" - isso é um mito. Pensamentos continuarão surgindo. O objetivo é mudar sua relação com eles: de envolvimento automático para observação consciente.`,
    instructions: [
      "Feche os olhos e tome três respirações profundas, soltando o ar lentamente",
      "Permita que sua respiração encontre seu ritmo natural - não tente controlá-la",
      "Direcione sua atenção para a sensação do ar entrando e saindo pelas narinas",
      "Quando perceber que se distraiu com pensamentos, simplesmente note isso e retorne gentilmente à respiração",
      "Não julgue a si mesmo por se distrair - isso é natural e faz parte do processo",
      "Imagine que seus pensamentos são nuvens passando em um céu vasto - você é o céu, não as nuvens",
      "Continue por 10 minutos, sempre retornando à respiração quando se perder",
      "Nos minutos finais, expanda sua atenção para incluir todo o corpo",
      "Gradualmente, retorne sua atenção ao ambiente externo antes de abrir os olhos"
    ],
    closingGuidance: `Ao finalizar, não se levante imediatamente. Permita alguns momentos de transição.

Observe a qualidade de sua mente agora comparada ao início. Pode haver mais espaço, mais calma. Ou pode não haver - e isso também está bem. Os benefícios da meditação se acumulam com a prática regular, não necessariamente em cada sessão individual.

Carregue consigo a lembrança de que você pode acessar este espaço de clareza a qualquer momento, mesmo brevemente, através de algumas respirações conscientes.`
  },
  {
    id: "meditation-gratitude",
    title: "Meditação da Gratidão",
    subtitle: "Cultive apreciação pelo momento presente",
    duration: 12,
    icon: "heart",
    preparation: `Para esta prática de gratidão, crie um ambiente acolhedor:

• Escolha um momento do dia em que você não esteja apressado
• Se desejar, acenda uma vela ou utilize iluminação suave
• Sente-se de maneira confortável e digna
• Você pode ter seu diário por perto para registrar insights após a prática
• Respire algumas vezes para fazer a transição do modo "fazer" para o modo "ser"`,
    purpose: `A gratidão é uma das práticas mais pesquisadas em psicologia positiva, com benefícios comprovados para bem-estar mental e físico.

Esta meditação não é sobre forçar sentimentos positivos ou negar dificuldades. É sobre treinar sua atenção para também perceber o que está funcionando, o que é bom, o que sustenta sua vida - elementos que frequentemente passam despercebidos.

O cérebro humano evoluiu para focar em problemas e ameaças. Isso era útil para sobrevivência, mas pode nos deixar cronicamente focados no negativo. A prática da gratidão oferece um contrapeso consciente.`,
    instructions: [
      "Feche os olhos e estabeleça-se na posição sentada com algumas respirações profundas",
      "Traga à mente algo simples pelo qual você é grato - pode ser algo óbvio como saúde, ou algo sutil como o ar que respira",
      "Não apenas pense sobre isso - sinta a gratidão em seu corpo. Onde ela reside? Talvez no peito, no rosto?",
      "Permaneça com esta sensação por alguns momentos, saboreando-a",
      "Agora, traga à mente uma pessoa pela qual você é grato. Visualize-a claramente",
      "Sinta a gratidão por esta pessoa estar em sua vida. Que qualidades dela você aprecia?",
      "Em seguida, considere um desafio recente e busque algo nele pelo qual ser grato - talvez um aprendizado ou força que descobriu em si",
      "Expanda sua gratidão para incluir seu corpo, que sustenta sua vida a cada momento",
      "Finalmente, sinta gratidão por você mesmo - por estar aqui, praticando, buscando crescimento",
      "Permita que a sensação de gratidão se irradie pelo seu corpo inteiro",
      "Gradualmente, traga sua atenção de volta ao ambiente e abra os olhos"
    ],
    closingGuidance: `A gratidão cultivada em meditação pode se estender para sua vida diária.

Considere estabelecer um pequeno ritual: três coisas pelas quais você é grato ao acordar ou antes de dormir. Escrever amplifica o efeito.

Lembre-se: gratidão autêntica não nega dificuldades. É possível estar grato e enfrentar desafios simultaneamente. A gratidão não é escapismo - é uma perspectiva equilibrada.`
  },
  {
    id: "meditation-focus",
    title: "Meditação do Foco e Presença",
    subtitle: "Ancore-se no aqui e agora",
    duration: 15,
    icon: "target",
    preparation: `Esta meditação trabalha com presença sensorial. Prepare-se assim:

• Escolha um ambiente relativamente silencioso
• Vista roupas confortáveis que não restrinjam
• Remova óculos, relógios ou outros itens que possam distrair
• Certifique-se de que não está com fome excessiva nem acabou de comer muito
• Sente-se com a coluna ereta, permitindo que a respiração flua livremente`,
    purpose: `A presença plena - estar completamente aqui, agora - é simultaneamente simples e profunda. Simples porque não exige nada especial. Profunda porque raramente a experimentamos plenamente.

A maioria do tempo vivemos em pensamentos sobre passado ou futuro. Mesmo quando o corpo está aqui, a mente está em outro lugar. Esta meditação treina a capacidade de reunir atenção no momento presente.

O foco desenvolvido aqui tem aplicações práticas: melhor concentração no trabalho, presença mais genuína em relacionamentos, e maior capacidade de responder (em vez de reagir) às situações da vida.`,
    instructions: [
      "Feche os olhos e tome algumas respirações profundas para fazer a transição",
      "Sinta o peso do seu corpo na superfície em que está sentado - a solidez que te sustenta",
      "Percorra mentalmente seu corpo da cabeça aos pés, notando sensações sem tentar mudá-las",
      "Agora, foque toda sua atenção nas sensações de suas mãos. O que você percebe? Temperatura, formigamento, pulsação?",
      "Expanda o foco para incluir os sons ao seu redor. Não os rotule - apenas ouça",
      "Perceba sons distantes, sons próximos, e o silêncio entre eles",
      "Traga a atenção para o ritmo de sua respiração. Siga cada inspiração do início ao fim",
      "Siga cada expiração, notando a pequena pausa antes da próxima inspiração",
      "Se pensamentos surgirem, note-os brevemente e retorne às sensações do momento",
      "Nos minutos finais, permita que sua atenção se expanda para incluir todo o campo de experiência: corpo, sons, respiração, espaço",
      "Sinta-se presente, vivo, aqui",
      "Lentamente, mova os dedos das mãos e dos pés antes de abrir os olhos"
    ],
    closingGuidance: `A presença cultivada nesta meditação está sempre disponível para você - não apenas na almofada de meditação.

Durante o dia, você pode praticar "micro-presenças": alguns segundos de atenção plena às sensações das mãos, ou três respirações conscientes. Estas mini-práticas acumulam-se e fortalecem sua capacidade de presença.

Observe como você se sente ao estar presente versus quando está perdido em pensamentos. Esta observação direta é mais valiosa que qualquer teoria.`
  }
];

export const meditationsIntroduction = {
  title: "Meditações Guiadas",
  subtitle: "Práticas contemplativas para seu desenvolvimento",
  description: `As meditações oferecidas aqui são práticas seguras, baseadas em tradições contemplativas reconhecidas e adaptadas para o contexto contemporâneo.

Elas não requerem crenças específicas e podem ser praticadas por qualquer pessoa, independente de background religioso ou espiritual.

Os benefícios da meditação regular incluem redução de estresse, melhora no foco, e maior autoconsciência. Estes benefícios são apoiados por pesquisa científica, embora os resultados individuais variem.`,
  tips: [
    "Comece com sessões curtas e aumente gradualmente",
    "Regularidade é mais importante que duração",
    "Não existe meditação 'perfeita' - pensamentos fazem parte do processo",
    "Use o timer integrado ou defina um alarme suave",
    "Se possível, pratique no mesmo horário cada dia"
  ],
  disclaimer: "Se você tem condições de saúde mental, consulte um profissional antes de iniciar uma prática meditativa regular."
};
