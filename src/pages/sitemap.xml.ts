import { getSortedCollectionPosts, generateSitemapXml } from "../lib/util";

export async function get() {
    const posts = await getSortedCollectionPosts({ collection: 'post' });

    return {
        body: await generateSitemapXml({ posts, site: { url: import.meta.env.SITE } })
    }
}
