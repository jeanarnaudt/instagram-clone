import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Story from './Story'

const Stories = () => {
	const [suggestions, setSuggestions] = useState([])
	const { data: session } = useSession()

	useEffect(() => {
		const fetchSuggestions = async () => {
			const response = await fetch('https://randomuser.me/api/?results=20')
			const jsonData = await response.json()
			setSuggestions(jsonData.results)
		}

		fetchSuggestions()
	}, [])

	console.log(suggestions)

	return (
		<div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
			{session && (
				<Story img={session.user.image} username={session.user.username} />
			)}

			{suggestions.map((profile) => (
				<Story
					key={profile.login.uuid}
					img={profile.picture.thumbnail}
					username={profile.name.first + ' ' + profile.name.last}
				/>
			))}
		</div>
	)
}

export default Stories
