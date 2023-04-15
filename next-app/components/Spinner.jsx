import { Spinner } from '@phosphor-icons/react'

export default function Loader(props){
	return (
		<div className="absolute inset-0 w-full h-full z-10 flex backdrop-filter backdrop-blur-[1px] bg-gray-600/10 rounded">
			<Spinner className="w-8 h-8 animate-spin m-auto" />
		</div>
	)
}