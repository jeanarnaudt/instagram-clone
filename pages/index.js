import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
	return (
		<div className='bg-gray-50 h-screen overflow-x-scroll scrollbar-hide'>
			<Head>
				<title>INSTAGRAM 2.0</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<Feed />
			<Modal />
		</div>
	)
}