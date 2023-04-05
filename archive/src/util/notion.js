import { Client } from "@notionhq/client"

// Initializing a client
const notion = new Client({
    auth: 'secret_72QqEKMDGtVl2mzJ1V8vzIfEQbCJVRiYXoonh8zNLuT',
})

export const getPage = async () => {
    const page_id = '7220d79a4f0b4adba9201b5b15eef3d1'
    const data = await notion.pages.retrieve({ page_id });
    console.log(data);
    return data
}