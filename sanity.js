
import imageUrlBuilder from "@sanity/image-url";
// import SanityClient from "@sanity/client"


const client = SanityClient({
    projectId: '75m5axj7',
    dataset:'production',
    useCdn:true,
    apiVersion: '2022-03-07'
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;