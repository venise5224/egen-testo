// app/result/page.tsx
"use client";
import { useSearchParams } from "next/navigation";

const results: Record<string, string> = {
  "E-M": "감성적인 남성입니다. 타인의 감정에 민감하고 섬세합니다.",
  "E-F": "감성적인 여성입니다. 공감 능력이 뛰어나고 배려심이 많습니다.",
  "T-M": "이성적이고 분석적인 남성입니다. 판단력이 뛰어나고 냉철합니다.",
  "T-F":
    "논리적이고 주체적인 여성입니다. 결정을 내릴 때 감정보다 사실을 우선시합니다.",
};

export default function ResultPage() {
  const params = useSearchParams();
  const code = params.get("code") || "N/A";
  const description = results[code] || "특별한 성향을 가지고 계시네요.";

  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">테스트 결과</h1>
      <p className="text-xl mb-2">
        당신의 성향: <strong>{code}</strong>
      </p>
      <p className="max-w-md text-center">{description}</p>
    </main>
  );
}
