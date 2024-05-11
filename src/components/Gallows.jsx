/* eslint-disable react/prop-types */
function Gallows({ mistakes }) {
	return (
		<div className="flex flex-col items-center gap-3">
			<img alt="Gallows" src={`/hangman-${mistakes}.svg`} />
			<h1 className="uppercase text-xl font-bold">The hangman game</h1>
		</div>
	)
}
export default Gallows
