import { TreeEvergreen, Check, BookmarkSimple } from '@phosphor-icons/react'
import Button from './Button'

export default function Task(props){
	return (
		<li className="flex flex-wrap items-center gap-3 my-4 border-2 rounded p-3">
			<TreeEvergreen weight="fill" className="w-10 h-10 mx-3" />
			<h1 className="text-xl w-full md:w-fit cursor-pointer ms-3 md:mx-0 order-last md:order-none">{props.title}</h1>
			<Button cl="ml-auto">
				<Check className="w-6 h-6" />
			</Button>
			<Button>
				<BookmarkSimple className="w-6 h-6" />
			</Button>
		</li>
	)
}