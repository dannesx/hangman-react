/* eslint-disable react/prop-types */
function Word({ word }) {
	return (
		<h1 className="flex gap-2 text-3xl justify-center items-center mt-8">
			{word.split('').map((item, index) => (
				<span key={index} className="uppercase font-bold">
					{item}
				</span>
			))}
		</h1>
	)
}
export default Word
