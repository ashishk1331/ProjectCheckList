import { CheckSquareOffset, At } from 'phosphor-react';

function Header(props){
	let svgSize = 20;

	return (
		<div
			className="bg-[white] w-full h-flex"
		>
		<header className="w-full px-16 py-8 bg-[#06d6a050] mx-auto">
			<section className="flex items-center gap-1 text-lg mb-2 flex-wrap">
				<CheckSquareOffset size={svgSize} />
				<h3 className="uppercase">Check List</h3>
				<At size={svgSize} />
				<h3 className="uppercase">AshishK</h3>
			</section>
			<h1 className="text-4xl">
				A curated collection for web ui practice. 
			</h1>
		</header>
		</div>
	);
}

export default Header;