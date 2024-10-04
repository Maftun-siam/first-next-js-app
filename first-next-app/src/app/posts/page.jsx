import React from 'react';
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data;

}

const PostPage = async () => {
    const postsData = await getPosts();
    console.log(postsData);

    return (
        <div className='h-screem'>
            <h1>All Posts</h1>
            <div className='grid grid-cols-2 gap-6'>
                {
                    postsData?.slice(0, 20).map(({ title, body, id }) => <>
                        <h2 key={id}>Post Number:{id}</h2>
                        <h3>Title:{title}</h3>
                        <p>{body}</p>

                    </>)
                }
            </div>
        </div>
    );
};

export default PostPage;