import { ArrowRight } from "@phosphor-icons/react";
import Button from "./Button";
import Link from "next/link";

export default function Task(props) {
	return (
		<>
			<li className="flex flex-wrap items-center gap-3 my-4 rounded p-3">
				<h1 className="text-xl w-full md:w-fit cursor-pointer ms-3 md:mx-0 order-last md:order-none">
					<Link href={`/posts/${props.id}`}>{props.title}</Link>
				</h1>
				<Button cl="ml-auto">
					<Link href={`/posts/${props.id}`}>
						<ArrowRight className="w-6 h-6" />
					</Link>
				</Button>
			</li>
			{!props.isLast && <hr />}
		</>
	);
}
