import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const names = [
  { name: "Maria S.", country: "🇧🇷", location: "Brazil" },
  { name: "John D.", country: "🇺🇸", location: "USA" },
  { name: "Ana P.", country: "🇵🇹", location: "Portugal" },
  { name: "Carlos M.", country: "🇲🇽", location: "Mexico" },
  { name: "Sophie L.", country: "🇫🇷", location: "France" },
  { name: "Michael R.", country: "🇬🇧", location: "UK" },
  { name: "Isabella G.", country: "🇮🇹", location: "Italy" },
  { name: "Lucas F.", country: "🇦🇷", location: "Argentina" },
  { name: "Emma W.", country: "🇨🇦", location: "Canada" },
  { name: "Pedro H.", country: "🇪🇸", location: "Spain" },
  { name: "Olivia K.", country: "🇦🇺", location: "Australia" },
  { name: "Gabriel T.", country: "🇨🇴", location: "Colombia" },
];

const actions = [
  "just completed the quiz",
  "received their sacred message",
  "joined the sacred circle",
  "discovered their divine purpose",
];

export const LiveNotifications = () => {
  const [notification, setNotification] = useState<{
    name: string;
    country: string;
    action: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomPerson = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      setNotification({
        name: randomPerson.name,
        country: randomPerson.country,
        action: randomAction,
      });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);
    
    // Then show notifications every 8-15 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 8000 + Math.random() * 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-20 left-4 z-50 max-w-[280px]">
      <AnimatePresence>
        {isVisible && notification && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-card/95 backdrop-blur-md rounded-xl p-3 border border-primary/30 shadow-lg shadow-primary/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {notification.country} {notification.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {notification.action}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] text-muted-foreground">Just now</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
