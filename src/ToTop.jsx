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
			<button onClick={()=> scrollToTop()} className="fixed left-full top-full translate-x-[-125%] translate-y-[-140%] bg-white rounded-full">
				<ArrowCircleUp size={50} color="black" className="fill-sky-500" weight="fill" />
			</button>
			: null
		}
		</>
	);
}
export default ToTop;