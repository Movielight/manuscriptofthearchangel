import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight, RotateCcw, CreditCard } from "lucide-react";

type Screen = "home" | "revelation" | "prayer" | "code" | "ritual" | "signs" | "path" | "conclusion";

const Manuscript = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");

  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onNext={() => setCurrentScreen("revelation")} />;
      case "revelation":
        return <RevelationScreen onNext={() => setCurrentScreen("prayer")} />;
      case "prayer":
        return <PrayerScreen onNext={() => setCurrentScreen("code")} />;
      case "code":
        return <CodeScreen onNext={() => setCurrentScreen("ritual")} />;
      case "ritual":
        return <RitualScreen onNext={() => setCurrentScreen("signs")} />;
      case "signs":
        return <SignsScreen onNext={() => setCurrentScreen("path")} />;
      case "path":
        return <PathScreen onNext={() => setCurrentScreen("conclusion")} />;
      case "conclusion":
        return <ConclusionScreen onRestart={() => setCurrentScreen("home")} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-manuscript-dark text-manuscript-light">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-manuscript-purple/20 via-manuscript-dark to-manuscript-dark pointer-events-none" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Ornament Component
const Ornament = () => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="h-px w-12 bg-gradient-to-r from-transparent to-manuscript-gold/50" />
    <Sparkles className="w-4 h-4 text-manuscript-gold" />
    <div className="h-px w-12 bg-gradient-to-l from-transparent to-manuscript-gold/50" />
  </div>
);

// Navigation Button
const NavButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-manuscript-gold/20 to-manuscript-purple/20 border border-manuscript-gold/30 rounded-lg text-manuscript-gold font-heading text-xl hover:from-manuscript-gold/30 hover:to-manuscript-purple/30 hover:border-manuscript-gold/50 transition-all duration-300"
  >
    {children}
    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
);

// Home Screen
const HomeScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
    <div className="mb-8">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-manuscript-gold/30 to-manuscript-purple/30 flex items-center justify-center border border-manuscript-gold/20">
        <Sparkles className="w-10 h-10 text-manuscript-gold" />
      </div>
    </div>
    
    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-manuscript-gold mb-4 leading-tight">
      Manuscrito Sagrado<br />do Arcanjo
    </h1>
    
    <p className="font-heading text-xl md:text-2xl text-manuscript-light/80 italic mb-12">
      "A oração esquecida que retorna ao seu destino"
    </p>
    
    <Ornament />
    
    <button
      onClick={onNext}
      className="mt-8 px-12 py-5 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-manuscript-dark font-heading text-2xl font-semibold rounded-lg hover:from-manuscript-gold/90 hover:to-manuscript-gold/70 transition-all duration-300 shadow-lg shadow-manuscript-gold/20"
    >
      Acessar Manuscrito
    </button>
    
    <p className="mt-8 text-manuscript-light/50 text-sm">
      ✦ Conteúdo sagrado revelado ✦
    </p>
  </div>
);

// Revelation Screen
const RevelationScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 max-w-3xl mx-auto">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-manuscript-gold mb-8 text-center">
      A Revelação
    </h2>
    
    <Ornament />
    
    <div className="space-y-6 text-manuscript-light/90 text-lg leading-relaxed text-center font-body">
      <p>
        Por séculos, este manuscrito permaneceu oculto nas profundezas de um monastério esquecido, 
        guardado por aqueles que juraram proteger seus segredos até o momento certo.
      </p>
      
      <p>
        Conta-se que um escriba, em estado de êxtase espiritual, recebeu diretamente do Arcanjo 
        as palavras que você está prestes a ler. Eram orações tão poderosas que foram consideradas 
        perigosas demais para o conhecimento comum.
      </p>
      
      <p>
        A Igreja as escondeu. Os sábios as temeram. Mas a luz não pode ser aprisionada para sempre.
      </p>
      
      <p className="text-manuscript-gold italic font-heading text-xl">
        Agora, através de você, essas palavras sagradas retornam ao mundo. 
        O Arcanjo escolheu este momento. Escolheu você.
      </p>
      
      <p>
        Prepare seu coração. O que você está prestes a receber não é apenas uma oração — 
        é uma chave que abre portais há muito selados em sua alma.
      </p>
    </div>
    
    <div className="mt-12">
      <NavButton onClick={onNext}>Próximo</NavButton>
    </div>
  </div>
);

// Prayer Screen
const PrayerScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 max-w-3xl mx-auto">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-manuscript-gold mb-8 text-center">
      A Oração Proibida do Arcanjo
    </h2>
    
    <Ornament />
    
    <div className="bg-manuscript-purple/10 border border-manuscript-gold/20 rounded-xl p-8 md:p-12 my-8">
      <div className="font-heading text-xl md:text-2xl text-manuscript-light leading-loose text-center italic space-y-4">
        <p>
          "Ó Guardião das Esferas Celestiais,<br />
          Que carrega a espada da verdade e o manto da luz,<br />
          Eu te invoco neste instante sagrado.
        </p>
        
        <p>
          Que tuas asas de fogo envolvam minha alma,<br />
          Dissolvendo toda sombra que não me pertence,<br />
          Todo peso que não é meu para carregar.
        </p>
        
        <p>
          Sela meus caminhos com tua proteção divina,<br />
          Cura as feridas invisíveis que sangram em silêncio,<br />
          Restaura o que foi perdido, desperta o que dormia.
        </p>
        
        <p>
          Eu sou digno(a) de receber tua graça.<br />
          Eu sou canal para tua luz.<br />
          Eu sou protegido(a), curado(a), restaurado(a).
        </p>
        
        <p className="text-manuscript-gold">
          Assim seja, assim é, assim será.<br />
          Amém."
        </p>
      </div>
    </div>
    
    <p className="text-manuscript-light/60 text-center text-sm mb-8">
      Leia esta oração em voz alta ou em silêncio profundo.<br />
      Sinta cada palavra ressoar em seu ser.
    </p>
    
    <NavButton onClick={onNext}>Continuar</NavButton>
  </div>
);

// Code Screen
const CodeScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 max-w-3xl mx-auto">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-manuscript-gold mb-8 text-center">
      Código Sagrado
    </h2>
    
    <Ornament />
    
    <div className="my-12 text-center">
      <div className="inline-flex items-center gap-4 px-12 py-8 bg-gradient-to-br from-manuscript-gold/10 to-manuscript-purple/10 border-2 border-manuscript-gold/40 rounded-2xl">
        <span className="font-heading text-6xl md:text-7xl font-bold text-manuscript-gold">7</span>
        <span className="font-heading text-4xl text-manuscript-light/50">—</span>
        <span className="font-heading text-6xl md:text-7xl font-bold text-manuscript-gold">11</span>
        <span className="font-heading text-4xl text-manuscript-light/50">—</span>
        <span className="font-heading text-6xl md:text-7xl font-bold text-manuscript-gold">9</span>
      </div>
    </div>
    
    <p className="font-heading text-2xl md:text-3xl text-manuscript-gold italic text-center mb-8">
      "Eu desperto, eu recebo, eu completo."
    </p>
    
    <div className="space-y-4 text-manuscript-light/80 text-center max-w-xl font-body">
      <p>
        <strong className="text-manuscript-gold">7</strong> — O número da perfeição divina. 
        Representa os sete céus, os sete arcanjos, os sete dias da criação.
      </p>
      <p>
        <strong className="text-manuscript-gold">11</strong> — O portal entre mundos. 
        O número mestre que conecta o visível ao invisível.
      </p>
      <p>
        <strong className="text-manuscript-gold">9</strong> — A conclusão sagrada. 
        O fechamento de ciclos e a manifestação completa.
      </p>
    </div>
    
    <p className="mt-8 text-manuscript-light/60 text-sm text-center">
      Repita este código três vezes antes de dormir durante 7 dias consecutivos.
    </p>
    
    <div className="mt-10">
      <NavButton onClick={onNext}>Ritual</NavButton>
    </div>
  </div>
);

// Ritual Screen
const RitualScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center px-6 py-12 max-w-3xl mx-auto">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-manuscript-gold mb-8 text-center">
      Ritual de Ativação Escrita
    </h2>
    
    <Ornament />
    
    <p className="text-manuscript-light/70 text-center mb-10 font-body">
      Siga estas seis etapas em um momento de silêncio e recolhimento.
    </p>
    
    <div className="space-y-6 w-full">
      {[
        {
          step: 1,
          title: "Leitura",
          description: "Leia a Oração Proibida do Arcanjo em voz alta, pausadamente, sentindo cada palavra."
        },
        {
          step: 2,
          title: "Respiração",
          description: "Feche os olhos. Inspire profundamente contando até 7. Segure por 4. Expire por 8. Repita 3 vezes."
        },
        {
          step: 3,
          title: "Repetição do Código",
          description: "Diga o código sagrado '7-11-9' três vezes em voz alta, seguido do mantra: 'Eu desperto, eu recebo, eu completo.'"
        },
        {
          step: 4,
          title: "Visualização",
          description: "Imagine uma luz dourada descendo do alto e envolvendo todo o seu corpo, preenchendo cada célula."
        },
        {
          step: 5,
          title: "Intenção",
          description: "Declare mentalmente ou em voz alta aquilo que você deseja curar, proteger ou restaurar em sua vida."
        },
        {
          step: 6,
          title: "Encerramento",
          description: "Agradeça ao Arcanjo por sua presença. Diga: 'Gratidão pela luz. O ritual está completo.' Abra os olhos lentamente."
        }
      ].map((item) => (
        <div key={item.step} className="flex gap-4 p-4 bg-manuscript-purple/5 border border-manuscript-gold/10 rounded-lg">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-manuscript-gold/20 flex items-center justify-center">
            <span className="font-heading text-xl font-bold text-manuscript-gold">{item.step}</span>
          </div>
          <div>
            <h3 className="font-heading text-xl text-manuscript-gold mb-1">{item.title}</h3>
            <p className="text-manuscript-light/70 text-sm font-body">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-10">
      <NavButton onClick={onNext}>Ver Sinais</NavButton>
    </div>
  </div>
);

// Signs Screen
const SignsScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center px-6 py-12 max-w-3xl mx-auto">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-manuscript-gold mb-8 text-center">
      Guia de Interpretação de Sinais
    </h2>
    
    <Ornament />
    
    <p className="text-manuscript-light/70 text-center mb-8 font-body">
      Após a ativação do ritual, o Arcanjo pode enviar sinais. Esteja atento(a) a estas manifestações:
    </p>
    
    <div className="space-y-4 w-full">
      {[
        {
          sign: "Penas brancas ou douradas",
          meaning: "Confirmação de proteção angelical ativa. O Arcanjo está próximo."
        },
        {
          sign: "Números repetidos (11:11, 7:07, 9:09)",
          meaning: "Portal aberto. Sua conexão com o divino está fortalecida."
        },
        {
          sign: "Sensação de calor ou arrepios",
          meaning: "Presença espiritual. A energia do Arcanjo está tocando seu campo."
        },
        {
          sign: "Sonhos vívidos ou lúcidos",
          meaning: "Mensagens sendo transmitidas. Anote-os ao acordar."
        },
        {
          sign: "Encontros inesperados",
          meaning: "Pessoas ou situações alinhadas pelo divino em seu caminho."
        },
        {
          sign: "Paz repentina em momentos de caos",
          meaning: "O manto de proteção está ativo sobre você."
        }
      ].map((item, index) => (
        <div key={index} className="p-4 border-l-2 border-manuscript-gold/50 bg-manuscript-purple/5">
          <h3 className="font-heading text-lg text-manuscript-gold mb-1">✦ {item.sign}</h3>
          <p className="text-manuscript-light/70 text-sm font-body">{item.meaning}</p>
        </div>
      ))}
    </div>
    
    <p className="mt-8 text-manuscript-light/60 text-sm text-center italic font-body">
      Sincronicidades não são coincidências. São a linguagem do universo confirmando seu despertar.
    </p>
    
    <div className="mt-10">
      <NavButton onClick={onNext}>Caminho dos 7 Dias</NavButton>
    </div>
  </div>
);

// Path Screen
const PathScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center px-6 py-12 max-w-3xl mx-auto">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-manuscript-gold mb-8 text-center">
      Caminho dos 7 Dias do Arcanjo
    </h2>
    
    <Ornament />
    
    <p className="text-manuscript-light/70 text-center mb-8 font-body">
      Durante os próximos 7 dias, siga estas orientações diárias para consolidar sua transformação.
    </p>
    
    <div className="space-y-4 w-full">
      {[
        { day: 1, theme: "Intenção", instruction: "Escreva em um papel sua maior intenção. Guarde-o consigo durante todo o caminho." },
        { day: 2, theme: "Gratidão", instruction: "Liste 7 coisas pelas quais você é grato(a). Leia a lista antes de dormir." },
        { day: 3, theme: "Liberação", instruction: "Perdoe uma pessoa (pode ser você mesmo). Diga em voz alta: 'Eu te libero. Eu me libero.'" },
        { day: 4, theme: "Cura", instruction: "Coloque as mãos sobre seu coração e repita a Oração do Arcanjo três vezes." },
        { day: 5, theme: "Abertura", instruction: "Diga sim para algo novo. Uma conversa, um caminho diferente, uma possibilidade." },
        { day: 6, theme: "Silêncio", instruction: "Reserve 15 minutos em silêncio absoluto. Apenas respire e escute." },
        { day: 7, theme: "Reafirmação", instruction: "Repita o ritual completo. Declare: 'Eu sou protegido(a), curado(a) e restaurado(a). Assim é.'" }
      ].map((item) => (
        <div key={item.day} className="flex gap-4 p-4 bg-gradient-to-r from-manuscript-gold/5 to-transparent border border-manuscript-gold/10 rounded-lg">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-manuscript-gold/20 flex flex-col items-center justify-center">
            <span className="text-xs text-manuscript-light/50">DIA</span>
            <span className="font-heading text-xl font-bold text-manuscript-gold">{item.day}</span>
          </div>
          <div>
            <h3 className="font-heading text-lg text-manuscript-gold mb-1">{item.theme}</h3>
            <p className="text-manuscript-light/70 text-sm font-body">{item.instruction}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-10">
      <NavButton onClick={onNext}>Concluir Manuscrito</NavButton>
    </div>
  </div>
);

// Conclusion Screen
const ConclusionScreen = ({ onRestart }: { onRestart: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 max-w-3xl mx-auto text-center">
    <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-br from-manuscript-gold/30 to-manuscript-purple/30 flex items-center justify-center border border-manuscript-gold/20">
      <Sparkles className="w-8 h-8 text-manuscript-gold" />
    </div>
    
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-manuscript-gold mb-6">
      O Manuscrito foi Revelado
    </h2>
    
    <Ornament />
    
    <p className="font-heading text-2xl text-manuscript-light/90 italic my-8">
      "A luz que foi despertada hoje seguirá com você.<br />
      O Arcanjo caminha ao seu lado.<br />
      Você nunca mais estará sozinho(a)."
    </p>
    
    <p className="text-manuscript-light/60 mb-12 font-body">
      Que este conhecimento sagrado transforme sua jornada.<br />
      Retorne sempre que precisar renovar sua conexão.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={onRestart}
        className="flex items-center justify-center gap-2 px-6 py-3 border border-manuscript-gold/30 rounded-lg text-manuscript-gold hover:bg-manuscript-gold/10 transition-all font-body"
      >
        <RotateCcw className="w-4 h-4" />
        Voltar ao Início
      </button>
      
      <button
        onClick={() => window.open("#checkout-avista", "_self")}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-manuscript-gold text-manuscript-dark font-semibold rounded-lg hover:bg-manuscript-gold/90 transition-all font-body"
      >
        <CreditCard className="w-4 h-4" />
        Apoiar o Projeto
      </button>
    </div>
    
    <div className="mt-12 p-6 bg-manuscript-purple/10 border border-manuscript-gold/20 rounded-xl max-w-md">
      <p className="text-manuscript-gold font-heading text-lg mb-4">Opções de Contribuição</p>
      <div className="space-y-3 text-sm text-manuscript-light/70 font-body">
        <p>✦ <strong>Acesso Vitalício:</strong> R$ 47,00 (pagamento único)</p>
        <p>✦ <strong>Assinatura de Apoio:</strong> R$ 19,90/mês — receba atualizações, novas orações e bênçãos exclusivas</p>
      </div>
    </div>
  </div>
);

export default Manuscript;
