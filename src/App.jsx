import { useEffect, useState } from 'react'
import Gallows from './components/Gallows'
import Keyboard from './components/Keyboard'
import GameOver from './components/GameOver'

function App() {
	const [data, setData] = useState([])
	const [mistakes, setMistakes] = useState(0)
	const [word, setWord] = useState('')
	const [answer, setAnswer] = useState('')
	const [result, setResult] = useState('')

	useEffect(() => {
		const fetchWords = async () => {
			const result = await fetch('/words.json')
			const data = await result.json()

			setData(data)
		}

		fetchWords()
	}, [])

	useEffect(() => {
		if (data.length) {
			getNewWord()
		}
	}, [data])

	useEffect(() => {
		if (mistakes === 6) {
			setResult('lose')
		}
	}, [mistakes])

	useEffect(() => {
		if (word && word === answer) {
			setResult('win')
		}
	}, [word])

	function guessLetter(key) {
		console.log(answer, word)
		if (answer.includes(key)) {
			setWord(updateWord(key))
		} else {
			setMistakes(current => current + 1)
		}
	}

	function restartGame() {
		setResult('')
		setMistakes(0)
		getNewWord()
	}

	function getNewWord() {
		const randomWord = data[Math.floor(Math.random() * data.length)]
		setAnswer(randomWord.toLowerCase())
		setWord('_'.repeat(randomWord.length))
	}

	function updateWord(key) {
		let updatedWord = ''

		for (let i = 0; i < answer.length; i++) {
			let checkAccentuation =
				answer[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '') === key
			if (answer[i] == key || checkAccentuation) {
				updatedWord += answer[i]
			} else {
				updatedWord += word[i]
			}
		}

		return updatedWord
	}

	return (
		<div className="bg-gradient-to-b from-cyan-500 to-cyan-700 w-screen h-screen grid place-items-center">
			<main className="bg-white p-8 rounded grid grid-cols-[300px_450px] items-stretch gap-10 shadow">
				<Gallows mistakes={mistakes} />
				{result ? (
					<GameOver answer={answer} result={result} restartGame={restartGame} />
				) : (
					<Keyboard guess={guessLetter} word={word} />
				)}
			</main>
		</div>
	)
}
export default App
