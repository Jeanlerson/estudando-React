type Props = {
    question: string;
    answers: string;
}

export const ResultsQuiz = ({question, answers} : Props) => {
    return(
        <div>
            <div>{question}</div>
            <div>{answers}</div>
        </div>
    )
}