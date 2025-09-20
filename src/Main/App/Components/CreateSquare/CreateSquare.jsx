export default function CreateSquare ({ squares = [], squaresClass }) {

    return (
        <>
        {squares.map((square, index) => {
            return (
                <div key={index} id={square.id} className={squaresClass}>
                    <b>{square.title}</b>
                    <p>{square.content}</p>
                </div>
            )
        })}
        </>
    )
}