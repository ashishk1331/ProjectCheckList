import { CheckSquareOffset, Circle, At, TwitterLogo, ArrowSquareOut } from 'phosphor-react';

function Header(){
	let svgSize = 24;

	return (
		<header className="w-full px-16 min-[320px]:px-8 py-8 bg-[#06d6a050]">
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
				A curated collection for web app making practice. 
			</h1>
		</header>
	);
}

export default Header;