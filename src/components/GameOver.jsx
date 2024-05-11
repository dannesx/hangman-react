/* eslint-disable react/prop-types */
function GameOver({ answer, result, restartGame }) {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1
				className={`text-2xl uppercase font-bold ${
					result === 'win' ? 'text-green-500' : 'text-red-500'
				}`}
			>
				{result === 'win' ? 'Muito bem :)' : 'Você perdeu :('}
			</h1>
			<p className="mb-4">
				A palavra era <strong>{answer}</strong>
			</p>
			<button
				className="bg-cyan-500 text-white hover:bg-cyan-600 p-2 rounded text-xs uppercase font-medium transition"
				onClick={restartGame}
			>
				Novo Jogo
			</button>
		</div>
	)
}
export default GameOver
