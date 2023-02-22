import image from "./assets/cardbg.png"
import { YoutubeLogo, Checks, CheckCircle, ArrowUpRight } from 'phosphor-react';

function cn(...classes){
	return classes.filter(Boolean).join(' ')
}

export default function ListItem({ id, title, video_url,thumbnail_url, status, changeState}){
	return (
		<li className="max-w-[280px] m-auto mt-0 p-4 rounded-xl overflow-hidden bg-[white] shadow-xl">
			<span className="relative w-[380px] overflow-hidden">
				<img src={image} className="rounded-xl" />
				{
					(status) ?
					<div className="absolute flex items-center justify-around rounded-xl w-full h-full inset-0 bg-[#06d6a050]">
						<CheckCircle size={100} weight="fill" className="bg-[white] rounded-full shadow-xl" />
					</div> : null
				}
			</span>
			<ul className="flex items-center w-full flex-wrap gap-2">
				<li className="my-3 text-xs bg-[black] w-fit px-3 text-white py-1 rounded-full font-medium">
					html
				</li>
				<li className="my-3 text-xs bg-[black] w-fit px-3 text-white py-1 rounded-full font-medium">
					css
				</li>
				<li className="my-3 text-xs bg-[black] w-fit px-3 text-white py-1 rounded-full font-medium">
					js
				</li>
			</ul>
			<h2 className="text-xl mb-5 font-medium tracking-tight">{title}</h2>
			<span className="flex flex-col gap-2 w-full justify-evenly">
				<button onClick={() => changeState(id)} className="flex text-white bg-[black] py-3 rounded">
					<p className="flex items-center gap-2 mx-auto font-bold tracking-wider uppercase text-xs">
						<CheckCircle weight="bold" className="w-4 h-4" />
						{
							status ?
							'undo'
							:
							'done'
						}
					</p>
				</button>
				<a href={video_url} target='_blank' className="flex w-fit mx-auto mt-2 rounded-xl items-center font-medium">
					watch tutorial
					<ArrowUpRight weight="bold" />
				</a>
			</span>
		</li>
	);
}