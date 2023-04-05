import { ArrowCircleUp } from 'phosphor-react';
import { useState, useEffect } from 'react';

function ToTop({scrollToTop}){
	const [edge, setEdge] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', function(e){
			if(window.scrollY > window.innerHeight / 2){
				setEdge(true);
			} else {
				setEdge(false);
			}
		});
	}, []);

	return (
		<>
			{edge ?
			<button onClick={()=> scrollToTop()} className="fixed bottom-0 right-0 m-5 rounded-full p-4 bg-[#06d6a050]">
				<ArrowCircleUp size={32} className="fill-[black]" weight="fill" />
			</button>
			: null
		}
		</>
	);
}
export default ToTop;