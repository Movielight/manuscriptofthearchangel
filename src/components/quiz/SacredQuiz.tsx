import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { QuizIntro } from "./QuizIntro";
import { QuizQuestion } from "./QuizQuestion";
import { QuizLoading } from "./QuizLoading";
import { QuizResult } from "./QuizResult";
import { TestimonialInterstitial } from "./TestimonialInterstitial";
import { BibleVerseInterstitial } from "./BibleVerseInterstitial";
import { MilestoneInterstitial } from "./MilestoneInterstitial";
import { LiveNotifications } from "./LiveNotifications";
import { QuizFooter } from "./QuizFooter";
import {
  quizQuestions,
  quizResults,
  calculateResult,
  ResultType,
} from "@/data/quizQuestions";

type QuizStage = "intro" | "questions" | "testimonial" | "bibleVerse" | "milestone" | "loading" | "result";

export const SacredQuiz = () => {
  const [stage, setStage] = useState<QuizStage>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [resultType, setResultType] = useState<ResultType | null>(null);
  const [testimonialSetIndex, setTestimonialSetIndex] = useState(0);
  const [bibleVerseIndex, setBibleVerseIndex] = useState(0);
  const [milestoneIndex, setMilestoneIndex] = useState(0);

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

    const questionNumber = currentQuestionIndex + 1;
    const nextIndex = currentQuestionIndex + 1;

    // Show Bible verse after questions 1, 4, 7
    if ([1, 4, 7].includes(questionNumber)) {
      setBibleVerseIndex(Math.floor(questionNumber / 3));
      setStage("bibleVerse");
      setSelectedOption(null);
    }
    // Show milestone after questions 2, 5, and 8
    else if ([2, 5, 8].includes(questionNumber)) {
      setMilestoneIndex(questionNumber === 2 ? 0 : questionNumber === 5 ? 1 : 2);
      setStage("milestone");
      setSelectedOption(null);
    }
    // Show testimonials after questions 3 and 6
    else if ([3, 6].includes(questionNumber) && nextIndex < quizQuestions.length) {
      setTestimonialSetIndex(questionNumber === 3 ? 0 : 1);
      setStage("testimonial");
      setSelectedOption(null);
    } else if (nextIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
    } else {
      setStage("loading");
    }
  };

  const handleBibleVerseContinue = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setStage("questions");
  };

  const handleMilestoneContinue = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setStage("questions");
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

  // Show live notifications during quiz stages
  const showNotifications = stage === "questions" || stage === "testimonial" || stage === "milestone" || stage === "bibleVerse";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Live notifications component */}
      {showNotifications && <LiveNotifications />}

      <div className="flex-1">
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

          {stage === "bibleVerse" && (
            <BibleVerseInterstitial
              key={`bible-${bibleVerseIndex}`}
              verseIndex={bibleVerseIndex}
              onContinue={handleBibleVerseContinue}
            />
          )}

          {stage === "milestone" && (
            <MilestoneInterstitial
              key={`milestone-${milestoneIndex}`}
              milestoneIndex={milestoneIndex}
              onContinue={handleMilestoneContinue}
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

      <QuizFooter />
    </div>
  );
};
