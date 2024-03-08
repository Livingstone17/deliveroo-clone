
import imageUrlBuilder from "@sanity/image-url";


const client = SanityClient({
    projectId: '75m5axj7',
    dataset:'production',
    useCdn:true,
    apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;