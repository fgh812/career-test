
import { useState } from "react";

const questions = [
  {
    question: "친구들과 여행을 가기로 했어요! 나는 어떤 역할을 할까요?",
    options: [
      { text: "여행지 사진과 테마를 꾸민다", type: "frontend" },
      { text: "교통편, 숙소 예약을 맡는다", type: "backend" },
      { text: "일정과 예산을 조율한다", type: "aa" },
      { text: "새로운 루트를 탐색한다", type: "ta" },
      { text: "지출 내역을 정리한다", type: "dba" },
    ],
  },
  {
    question: "팀 프로젝트를 할 때 가장 먼저 떠오르는 생각은?",
    options: [
      { text: "사용자 입장에서 인터페이스를 설계한다", type: "frontend" },
      { text: "데이터 흐름과 구조를 고민한다", type: "backend" },
      { text: "팀원 역할 분담과 일정이 걱정된다", type: "aa" },
      { text: "기존에 쓰던 도구 말고 더 나은 방법은 없을까?", type: "ta" },
      { text: "버그나 오류가 발생하지 않게 데이터를 정리하고 싶다", type: "dba" },
    ],
  },
  {
    question: "새로운 앱을 쓸 때 당신은?",
    options: [
      { text: "화면 디자인과 사용성이 눈에 들어온다", type: "frontend" },
      { text: "기능이 어떻게 동작하는지 구조가 궁금하다", type: "backend" },
      { text: "누가 어떤 의도로 만들었는지 궁금하다", type: "aa" },
      { text: "어떤 기술이 쓰였을지 검색해본다", type: "ta" },
      { text: "회원정보나 기록은 어떻게 저장되나 확인한다", type: "dba" },
    ],
  },
  {
    question: "수업 발표 준비를 맡게 되었을 때 당신의 행동은?",
    options: [
      { text: "슬라이드에 시각적 효과를 넣는다", type: "frontend" },
      { text: "발표자료를 체계적으로 정리한다", type: "backend" },
      { text: "전체 흐름과 타이밍을 조율한다", type: "aa" },
      { text: "새로운 표현 방식이나 도구를 찾아본다", type: "ta" },
      { text: "발표 후 예상 질문을 정리한다", type: "dba" },
    ],
  },
  {
    question: "노래를 추천해달라는 친구에게 당신은?",
    options: [
      { text: "분위기와 감정에 어울리는 곡을 추천", type: "frontend" },
      { text: "친구의 음악 취향을 기반으로 추천", type: "backend" },
      { text: "친구의 상황과 감정을 먼저 파악", type: "aa" },
      { text: "새로운 장르나 인디 곡을 추천", type: "ta" },
      { text: "좋아한 노래의 통계를 기반으로 추천", type: "dba" },
    ],
  },
  {
    question: "어떤 문제를 해결할 때 당신의 방식은?",
    options: [
      { text: "먼저 결과물이 어떻게 보여야 할지 상상한다", type: "frontend" },
      { text: "논리적인 흐름과 단계로 쪼개어 본다", type: "backend" },
      { text: "전체 그림을 그리고 우선순위를 정한다", type: "aa" },
      { text: "기존 해결 방식을 의심하고 새로 설계해 본다", type: "ta" },
      { text: "오류가 없도록 체크리스트를 만든다", type: "dba" },
    ],
  },
  {
    question: "당신이 가장 좋아하는 역할은?",
    options: [
      { text: "직관적으로 눈에 보이는 것을 만드는 일", type: "frontend" },
      { text: "보이지 않지만 구조를 잡는 일", type: "backend" },
      { text: "팀과 프로젝트를 연결하고 관리하는 일", type: "aa" },
      { text: "기술 트렌드를 적용하고 실험하는 일", type: "ta" },
      { text: "데이터와 기록을 정리하고 최적화하는 일", type: "dba" },
    ],
  },
];


const resultText = {
  frontend: "당신은 감각적인 프론트엔드 개발자!",
  backend: "당신은 논리적인 백엔드 개발자!",
  aa: "당신은 큰 그림을 보는 AA!",
  ta: "당신은 연결을 설계하는 TA!",
  dba: "당신은 꼼꼼한 데이터 관리자 DBA!",
};

export default function CareerTestApp() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null); // ✅ 추가
  const [finished, setFinished] = useState(false);

  const handleAnswer = (type: string, idx: number) => {
    setSelected(idx); // ✅ 선택 표시
    setTimeout(() => {
      const nextAnswers = [...answers, type];
      setAnswers(nextAnswers);
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setFinished(true);
      }
      setSelected(null); // ✅ 다음 질문으로 넘어갈 때 선택 초기화
    }, 200); // 0.2초 후 전환 (선택 효과 잠깐 보이게)
  };

  const getResult = () => {
    const score = { frontend: 0, backend: 0, aa: 0, ta: 0, dba: 0 };
    answers.forEach((type) => {
      score[type as keyof typeof score] += 1;
    });
    return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
  };

  if (finished) {
    const result = getResult();
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">테스트 결과</h1>
        <p className="text-xl">{resultText[result as keyof typeof resultText]}</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-lg font-semibold mb-6 text-center">Q{current + 1}. {q.question}</h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt.type, idx)}
            className={`p-4 rounded-xl shadow transition-all
              ${selected === idx ? "bg-blue-400 text-white" : "bg-blue-100 hover:bg-blue-300"}
            `}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
