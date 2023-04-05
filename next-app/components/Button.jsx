export default function Button(props){
	return (
		<button className={"p-3 rounded bg-gray-200 " + props.cl }>
			{
				props.children
			}
		</button>
	)
}