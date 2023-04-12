import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Client } from "@notionhq/client"

import Task from '../components/Task'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  return (
    <>
      <Head>
        <title>Pro Checklist</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="p-3 px-6 max-w-[720px] mx-auto">
        <div className="w-full h-48 bg-gray-200 absolute inset-0 -z-10" />
        <Header icon={props.data.icon.file.url} title={props.title} editedAt={props.data.last_edited_time} />
        <ul className="pt-3">
          {
            props.posts.map(i => <Task key={i.id} title={i.title} icon={i.icon.file.url} />)
          }
        </ul>
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  // Initializing a client
  const notion = new Client({
      auth: process.env.NOTION_TOKEN,
  })

  let title = ''

  const page_id = process.env.NOTION_PAGE_ID
  let data = await notion.pages.retrieve({ page_id });

  title = data.properties.title.title[0].plain_text

  let posts = []

  const resp = await notion.blocks.children.list({
      block_id: page_id,
      page_size: 50,
    });

  resp.results.forEach(i => {
    if(i.type === 'child_page')
      posts.push({
      id: i.id,
      title: i.child_page.title
    })
  })

  for(let i=0; i<posts.length; i++){
      const response = await notion.pages.retrieve({ page_id: posts[i].id });
      posts[i].icon = response.icon;
  }

  return {
    props: {data, title, posts}, // will be passed to the page component as props
  }
}