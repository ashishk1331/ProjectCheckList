export default function Button(props){
	return (
		<button className={"p-3 rounded bg-gray-200 hover:bg-gray-300 transition-all " + props.cl } {...props}>
			{
				props.children
			}
		</button>
	)
}