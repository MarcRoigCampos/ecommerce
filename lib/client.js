import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 't1shmhgm',
    dataset: 'production',
    useCdn: true,
    apiVersion: 'v1',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    try {
        return builder.image(source)
    } catch (error) {
        console.error(error)
    }
};