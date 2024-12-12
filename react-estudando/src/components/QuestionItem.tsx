import { Question } from "@/types/Question";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({question, count, onAnswer} : Props) => {
    return (
        <div>
            <div className="">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div key={key} className="">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}