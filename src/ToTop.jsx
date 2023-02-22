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
			<button onClick={()=> scrollToTop()} className="fixed bottom-0 right-0 m-5 rounded-full p-4 bg-[black]">
				<ArrowCircleUp size={24} className="fill-[white]" weight="fill" />
			</button>
			: null
		}
		</>
	);
}
export default ToTop;