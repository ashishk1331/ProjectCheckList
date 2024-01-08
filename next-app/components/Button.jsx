export default function Button(props){
	return (
		<button className={"p-3 rounded hover:bg-green/5 border-2 border-white hover:border-green transition-all " + props.cl } {...props}>
			{
				props.children
			}
		</button>
	)
}