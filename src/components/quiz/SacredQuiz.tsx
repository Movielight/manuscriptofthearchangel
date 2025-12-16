import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { QuizIntro } from "./QuizIntro";
import { QuizQuestion } from "./QuizQuestion";
import { QuizLoading } from "./QuizLoading";
import { QuizResult } from "./QuizResult";
import { TestimonialInterstitial } from "./TestimonialInterstitial";
import {
  quizQuestions,
  quizResults,
  calculateResult,
  ResultType,
} from "@/data/quizQuestions";

type QuizStage = "intro" | "questions" | "testimonial" | "loading" | "result";

export const SacredQuiz = () => {
  const [stage, setStage] = useState<QuizStage>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [resultType, setResultType] = useState<ResultType | null>(null);
  const [testimonialSetIndex, setTestimonialSetIndex] = useState(0);

  const handleStart = () => {
    setStage("questions");
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
    setAnswers(newAnswers);

    const nextIndex = currentQuestionIndex + 1;

    // Show testimonials after questions 3 and 6 (indices 2 and 5)
    if ((currentQuestionIndex + 1) % 3 === 0 && currentQuestionIndex < quizQuestions.length - 1) {
      setTestimonialSetIndex(Math.floor(currentQuestionIndex / 3));
      setStage("testimonial");
      setSelectedOption(null);
    } else if (nextIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
    } else {
      setStage("loading");
    }
  };

  const handleTestimonialContinue = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setStage("questions");
  };

  const handleLoadingComplete = useCallback(() => {
    const result = calculateResult(answers, quizQuestions);
    setResultType(result);
    setStage("result");
  }, [answers]);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {stage === "intro" && <QuizIntro key="intro" onStart={handleStart} />}

        {stage === "questions" && (
          <QuizQuestion
            key={`question-${currentQuestionIndex}`}
            question={quizQuestions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
            selectedOption={selectedOption}
            onSelect={handleSelectOption}
            onNext={handleNext}
          />
        )}

        {stage === "testimonial" && (
          <TestimonialInterstitial
            key={`testimonial-${testimonialSetIndex}`}
            setIndex={testimonialSetIndex}
            onContinue={handleTestimonialContinue}
          />
        )}

        {stage === "loading" && (
          <QuizLoading key="loading" onComplete={handleLoadingComplete} />
        )}

        {stage === "result" && resultType && (
          <QuizResult key="result" result={quizResults[resultType]} />
        )}
      </AnimatePresence>
    </div>
  );
};
