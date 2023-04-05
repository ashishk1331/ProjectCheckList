function Footer(){
	const date = new Date();
	return (
		<div className="bg-[white]">
			<footer className="bg-[#06d6a050] py-24 text-center flex justify-center flex-col font-medium">
				Last Update: {date.toLocaleString('en-us',{month: 'short'}) + ' ' + date.getFullYear()}
			</footer>
		</div>
	);
}

export default Footer;