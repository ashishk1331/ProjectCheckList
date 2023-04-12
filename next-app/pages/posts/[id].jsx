import { Client } from "@notionhq/client"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import { ArrowLeft, Check, BookmarkSimple } from '@phosphor-icons/react'

function parser(block){

	switch(block.type){
		case 'paragraph':
			return <p key={block.id} className="md:text-lg">{
				block[block.type].rich_text[0].plain_text
			}</p>	

		case 'image':
			return <Image 
				key={block.id}
				src={block[block.type].file.url}
				width="0"
			    height="0"
			    sizes="100vw"
				className="w-full border-2 rounded my-6"
				alt={`image for block ${block.id}`}
			/>

		default:
			return <p key={block.id}>Not supported type.</p>
	}
}

export default function Post(props){

	console.log(props)

	return (
		<>
			<div className="w-full h-48 bg-gray-200 " />
			<main className="p-3 px-6 max-w-[720px] mx-auto">
				<div className="flex items-center gap-4">
					<Link href="/">
						<Button>
							<ArrowLeft className="w-6 h-6"/>
						</Button>
					</Link>
					<Image 
						src={props.data.icon.file.url}
						width={512}
						height={512}
						className="w-10 h-10"
						alt={props.data.properties.title.title[0].plain_text}
					/>
					<Button cl="ml-auto">
						<Check className="w-6 h-6"/>
					</Button>
					<Button>
						<BookmarkSimple className="w-6 h-6"/>
					</Button>
				</div>

				<h1 className="my-6 text-4xl font-medium"> { props.data.properties.title.title[0].plain_text } </h1>

				{
					props.blocks.results.map(block => parser(block))
				}

				<Footer />
			</main>
		</>
	)
}

export async function getStaticPaths(){

	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	})
	const page_id = process.env.NOTION_PAGE_ID

	let paths = []

	const resp = await notion.blocks.children.list({
		block_id: page_id,
		page_size: 50,
	});

	resp.results.forEach(i => {
		if(i.type === 'child_page')
			paths.push({
				params:{
					id: i.id
				}
			})
	})

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params: { id } }){
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	})

	const response = await notion.pages.retrieve({ page_id: id });

	const blocks = await notion.blocks.children.list({
	    block_id: id,
	    page_size: 50,
	  });

	return {
		props: {
			data: {...response},
			blocks: {...blocks}
		}
	}
}