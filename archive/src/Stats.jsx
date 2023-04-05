import { ArrowRight } from 'phosphor-react'
import { motion } from 'framer-motion'

export default function Stats(props){
	return (
		<motion.div
			initial={{ opacity: 0.2 }}
			animate={{ opacity:1 }}
			transition={{ duration: 0.6 }}
			className="w-full bg-[white] my-6"
		>
			<div className="w-full px-16 min-w-[320px] py-4 bg-[#06d6a050] mx-auto v-flex">
				<h1 className="text-xs font-bold h-flex uppercase">
					Stats
					<ArrowRight className="w-4 h-4" weight="bold" />
				</h1>
				<ul>
					<li className="h-flex">
						Total:
						<p className="font-medium">{props.items.length}</p>
					</li>
					<li className="h-flex">
						Finished:
						<p className="font-medium">{props.items.filter(i => i.status).length}</p>
					</li>
				</ul>
			</div>
		</motion.div>
	)
}