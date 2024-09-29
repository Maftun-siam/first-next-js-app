import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
    return (
        <div className='p-8'>
            {blogs.map((blog) => (
                <div key={blog.slug} className='border-2 p-12'>
                    <h2>{blog.title}</h2>
                    <h2>{blog.description}</h2>

                    {/* Use slug in the URL */}
                    <Link href={`/blog/${blog.slug}`}>
                        <button className='bg-blue-800 p-2 text-black'>
                            View Details
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

const blogs = [
    {
        slug: "beginner-guide-to-javascript",
        title: "Beginner's Guide to JavaScript",
        description: "A comprehensive guide for beginners to start learning JavaScript from scratch."
    },
    {
        slug: "healthy-eating-habits",
        title: "Top 10 Healthy Eating Habits",
        description: "Discover effective habits to improve your diet and overall health."
    },
    {
        slug: "remote-work-tips",
        title: "How to Stay Productive While Working Remotely",
        description: "Tips and strategies to stay productive and motivated in a remote work environment."
    },
    {
        slug: "travel-on-a-budget",
        title: "Travel the World on a Budget",
        description: "Learn how to travel to amazing destinations without breaking the bank."
    },
    {
        slug: "ultimate-guide-to-seo",
        title: "The Ultimate Guide to SEO in 2024",
        description: "Everything you need to know to boost your website's ranking and visibility with SEO."
    }
];

export default BlogPage;
