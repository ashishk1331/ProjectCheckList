import Footer from '../components/Footer'
import Button from '../components/Button'
import { ArrowLeft, Envelope, Password } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Login(props){

	return (
		<>
			<div className="w-full h-48 bg-gray-200 " />
			<main className="p-3 px-6 max-w-[720px] mx-auto">
				<div className="flex items-center gap-4">
					<Link href="/">
						<Button>
							<ArrowLeft className="w-6 h-6"/>
						</Button>
					</Link>
					<h1 className="text-4xl">
						React Practice
					</h1>
				</div>

				<form className="w-full my-12 flex flex-col items-center gap-4 text-xl w-full sm:w-[75%] mx-auto" onSubmit={e => {
					e.preventDefault();
				}}>

					<h3>Log in</h3>

					<label htmlFor="email" className="flex items-center gap-2 p-2 border-2 rounded w-full">
						<Envelope weight="light" className="w-8 h-8 fill-gray-400" />
						<input type="email" id="email" placeholder="Email" className="w-full outline-none" required />
					</label>

					<label htmlFor="pass" className="flex items-center gap-2 p-2 border-2 rounded w-full">
						<Password weight="light" className="w-8 h-8 fill-gray-400" />
						<input type="password" id="pass" placeholder="Password" className="w-full outline-none" required />
					</label>

					<Button cl="w-full" type="submit">
						Next
					</Button>

				</form>

				<Footer />
			</main>
		</>
	)
}
