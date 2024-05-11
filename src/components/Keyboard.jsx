/* eslint-disable react/prop-types */
import Key from './Key'
import Word from './Word'

function Keyboard({ word, guess }) {
	const letters = 'abcdefghijklmnopqrstuvwxyz'
	return (
		<div className="flex flex-col justify-between items-center">
			<Word word={word} />
			<div className="grid grid-cols-9 gap-2">
				{letters.split('').map(letter => (
					<Key key={letter} letter={letter} guess={guess} />
				))}
			</div>
		</div>
	)
}
export default Keyboard
