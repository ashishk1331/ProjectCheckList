import { CheckSquareOffset, Circle, At, TwitterLogo, ArrowSquareOut } from 'phosphor-react';

function Header(props){
	let svgSize = 24;
	let doneCount = props.items.filter(i => i.status).length

	return (
		<div
			className="bg-[white] w-full h-flex"
		>
		<header className="w-full px-16 py-8 bg-[#06d6a050] mx-auto">
			<section className="flex items-center text-lg mb-2 flex-wrap">
				<CheckSquareOffset size={svgSize} />
				<h3 className="uppercase">Check List</h3>
				<Circle className="mx-2" size={svgSize/4} weight="fill" />
				<At size={svgSize} />
				<h3 className="uppercase">AshishK</h3>
				<a href="https://bio.link/ashishk" target="_blank">
					<ArrowSquareOut size={svgSize} />
				</a>
			</section>
			<h1 className="text-4xl">
				A curated collection for web ui making practice. 
			</h1>
			<h2 className="mt-4 text-xl">
				{ doneCount } finished
			</h2>
		</header>
		</div>
	);
}

export default Header;