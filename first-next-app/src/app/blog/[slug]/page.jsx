import React from 'react';

const Page = ({ params }) => {
    const { slug } = params;  // Access the slug from params
    const blog = blogs.find((blog) => blog.slug === slug);  // Find the blog based on slug

    if (!blog) {
        return <div>Blog not found</div>;  // Handle case when blog is not found
    }

    const { title, description } = blog;  // Destructure title and description

    return (
        <div>
            <h5>{title}</h5>
            <h5>{description}</h5>
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

export default Page;
