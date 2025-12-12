import { useEffect } from "react";
import { SacredQuiz } from "@/components/quiz/SacredQuiz";

const Quiz = () => {
  useEffect(() => {
    // Add CartPanda script only on Quiz page
    const script = document.createElement("script");
    script.src = "https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/cpsales.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <SacredQuiz />;
};

export default Quiz;
