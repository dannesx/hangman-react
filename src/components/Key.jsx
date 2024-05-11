import { useState } from 'react'

/* eslint-disable react/prop-types */
function Key({ letter, guess }) {
	const [chosen, setChosen] = useState(false)
	
	function handleClick() {
		setChosen(true)
		guess(letter)
	}
	return (
		<button
			className={`${
				chosen
					? 'bg-slate-100 opacity-50 text-slate-600'
					: 'bg-cyan-500 text-white hover:bg-cyan-600'
			} rounded w-10 h-10 uppercase font-medium transition-colors`}
			disabled={chosen}
			onClick={handleClick}
		>
			{letter}
		</button>
	)
}
export default Key
