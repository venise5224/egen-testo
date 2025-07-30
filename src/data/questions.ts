export type Question = {
  id: number;
  text: string;
  type: "E" | "T";
};

export const questions: Question[] = [
  { id: 1, text: "감정적으로 쉽게 공감하는 편이다.", type: "E" },
  { id: 2, text: "감정보다 논리로 판단하는 경우가 많다.", type: "T" },
  { id: 3, text: "사람의 기분을 잘 캐치한다.", type: "E" },
  { id: 4, text: "직설적으로 말하는 편이다.", type: "T" },
  { id: 5, text: "분위기나 감정 흐름을 중요하게 생각한다.", type: "E" },
  { id: 6, text: "감정보다 사실과 근거를 우선시한다.", type: "T" },
];
