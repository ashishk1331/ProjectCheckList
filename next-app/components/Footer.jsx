import { Baseball } from "@phosphor-icons/react";

export default function Footer(props) {
	return (
		<footer className="w-full pt-8 my-16 border-t-2 flex flex-col items-center gap-6">
			<Baseball weight="fill" className="fill-green" size={32} />
			<p className="text-center text-gray-400">
				Curated by{" "}
				<a
					href="https://twitter.com/ashishk1331"
					className="border-b-2"
				>
					ashishk1331
				</a>
				.
				<br />
				Hosted on{" "}
				<a href="https://vercel.com/" className="border-b-2">
					Vercel
				</a>
				.
				<br />
				Icons from the fabulaous{" "}
				<a href="https://phosphoricons.com/" className="border-b-2">
					Phosphor Icons
				</a>
				.
				<br />
				Source code available on{" "}
				<a
					href="https://github.com/hugekontrast/ProjectCheckList/tree/main/next-app"
					className="border-b-2"
				>
					Github
				</a>
				.
			</p>
		</footer>
	);
}
