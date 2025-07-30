"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<number, "yes" | "no">>({});
  const [gender, setGender] = useState<"M" | "F" | "">("");
  const router = useRouter();

  const handleAnswer = (id: number, answer: "yes" | "no") => {
    setAnswers((prev) => ({ ...prev, [id]: answer }));
  };

  const handleSubmit = () => {
    let eScore = 0,
      tScore = 0;

    questions.forEach((q) => {
      const ans = answers[q.id];
      if (ans === "yes") {
        if (q.type === "E") {
          eScore++;
        } else {
          tScore++;
        }
      }
    });

    const dominant = eScore >= tScore ? "E" : "T";
    router.push(`/result?code=${dominant}-${gender}`);
  };

  const isComplete = Object.keys(answers).length === questions.length && gender;

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">질문에 답해주세요</h1>

      {questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p className="mb-2">{q.text}</p>
          <div className="space-x-2">
            <button
              className={`px-4 py-2 rounded ${
                answers[q.id] === "yes"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleAnswer(q.id, "yes")}
            >
              예
            </button>
            <button
              className={`px-4 py-2 rounded ${
                answers[q.id] === "no"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleAnswer(q.id, "no")}
            >
              아니오
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6">
        <p className="mb-2">당신의 성별은?</p>
        <div className="space-x-4">
          <button
            onClick={() => setGender("M")}
            className={`px-4 py-2 rounded ${
              gender === "M" ? "bg-pink-600 text-white" : "bg-gray-200"
            }`}
          >
            남성
          </button>
          <button
            onClick={() => setGender("F")}
            className={`px-4 py-2 rounded ${
              gender === "F" ? "bg-pink-600 text-white" : "bg-gray-200"
            }`}
          >
            여성
          </button>
        </div>
      </div>

      <button
        disabled={!isComplete}
        onClick={handleSubmit}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded disabled:opacity-50"
      >
        결과 보기
      </button>
    </main>
  );
}
