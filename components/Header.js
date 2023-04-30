import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
	MagnifyingGlassIcon as SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	Bars3Icon as MenuIcon,
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Header = () => {
	const { data: session } = useSession()
	const [open, setOpen] = useRecoilState(modalState)
	const router = useRouter()

	return (
		<div className="shadow-sm border-b sticky top-0 z-50 bg-white">
			<div className="flex justify-between items-center max-w-6xl mx-5 lg:mx-auto">
				{/* Left */}
				<div
					onClick={() => router.push('/')}
					className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer"
				>
					<Image
						src="https://links.papareact.com/ocw"
						alt=""
						width={120}
						height={40}
						style={{ objectFit: 'contain' }}
					/>
				</div>

				<div
					onClick={() => router.push('/')}
					className="relative h-10 w-10 lg:hidden flex-shrink-0"
				>
					<Image
						src="https://links.papareact.com/jjm"
						height={40}
						width={120}
						alt=""
						style={{ objectFit: 'contain' }}
					/>
				</div>

				{/* Middle - Search input field */}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500" />
						</div>
						<input
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				{/* Right */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon onClick={() => router.push('/')} className="navBtn" />
					<MenuIcon className="h-6 md:hidden cursor-pointer" />

					{session ? (
						<>
							<div className="relative navBtn">
								<PaperAirplaneIcon className="navBtn rotate-45" />
								<div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
									3
								</div>
							</div>
							<PlusCircleIcon
								onClick={() => setOpen(true)}
								className="navBtn"
							/>
							<UserGroupIcon className="navBtn" />
							<HeartIcon className="navBtn" />

							<Image
								className="h-10 w-10 rounded-full object-cover"
								src={session.user.image}
								width={60}
								height={60}
								alt="Profile pic"
								onClick={signOut}
							/>
						</>
					) : (
						<button onClick={signIn}>Sign In</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
