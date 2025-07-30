"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">에겐 테토 테스트</h1>
      <p className="mb-4">간단한 테스트로 당신의 성향을 알아보세요.</p>
      <button
        onClick={() => router.push("/quiz")}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        시작하기
      </button>
    </main>
  );
}
