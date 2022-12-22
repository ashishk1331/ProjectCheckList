import image from "./assets/cardbg.png"
import { YoutubeLogo, Checks, CheckCircle, ArrowCounterClockwise } from 'phosphor-react';

function ListItem({ id, title, video_url,thumbnail_url, status, changeState}){
	return (
		<li className="min-w-[200px] m-auto mt-0 mb-12">
			<span className="relative w-[380px] overflow-hidden">
				<img src={thumbnail_url || image} className="rounded-xl" />
				{
					(status) ?
					<div className="absolute flex items-center justify-around rounded-xl w-full h-full inset-0 bg-[#27272775]">
						<CheckCircle size={100} weight="fill" />
					</div> : null
				}
			</span>
			<ul>
				<li className="my-3 text-xs font-medium bg-sky-500 w-fit px-4 text-white py-1 rounded-full">
					{ status? 'finished' : 'pending'}
				</li>
			</ul>
			<span className="flex my-2 items-center flex-col text-left">
					<h2 className="text-xl mb-5 font-medium text-justify px-2">{title}</h2>
					<span className="flex w-full justify-evenly">
						<a href={video_url} target='_blank' className=" bg-sky-500 flex text-white px-8 py-2 rounded-xl items-center">
							<YoutubeLogo size={24} color="#ffffff" weight="fill" className="mr-1" />
							watch
						</a>
						{
							(!status) ?
							<button onClick={() => changeState(id)} className="bg-sky-500 flex text-white px-8 py-2 rounded-xl items-center">
								<Checks size={24} color="#ffffff" weight="fill" className="mr-1"/>
								done
							</button>
							:
							<button onClick={() => changeState(id)} className="bg-red-500 flex text-white px-8 py-2 rounded-xl items-center">
								<ArrowCounterClockwise size={24} color="#ffffff" weight="fill" />
								undo
							</button>
						}
					</span>
			</span>
		</li>
	);
}

export default ListItem;