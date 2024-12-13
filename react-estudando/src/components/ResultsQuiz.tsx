type Props = {
    question: string;
    answers: string;
}

export const ResultsQuiz = ({question, answers} : Props) => {
    return(
        <div>
            {question}
            {answers}
        </div>
    )
}