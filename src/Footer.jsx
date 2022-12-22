function Footer(){
	const date = new Date();

	return (
		<footer className="bg-gradient-to-r from-[#F187FB] to-[#439CFB] min-h-[5em] text-center flex justify-center flex-col font-medium">
			Last Update: {date.toLocaleString('en-us',{month: 'short'}) + ' ' + date.getFullYear()}
		</footer>
	);
}

export default Footer;