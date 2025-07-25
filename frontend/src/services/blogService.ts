import {apiRequest} from '@/utils/api';
import qs from 'qs';


export class BlogService {
    static async getHomePageContent() {
        return await apiRequest('/home-page')
    }
    static async getAllBlogPosts() {
        const query = qs.stringify({
            populate: ['image', 'author'],
            sort: ['publishedAt:desc'],
        }, {
            encodeValuesOnly: true, // prettify URL
        });
        const response = await apiRequest(`/blogs?${query}`)
        return response.data || [];

    }
    static async getBlogBySlug(slug: string){
        const query = qs.stringify({
            filter: {
                slug: {
                    $eq: slug
                }
            },
            populate: ['image', 'author'],
        }, {
            encodeValuesOnly: true, // prettify URL
        })
        console.log("Fetching blog post with query:", `blogs?${query}`);
        const response = await apiRequest(`/blogs?${query}`)
        console.log("Blog Post Response:", response);
        return response.data || [];
    }
    
}

