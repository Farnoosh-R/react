import React from "react";
import { useEffect, useState } from "react";

const Hooks = () => {

// const [count, setCount] = useState(0);
// const [name, setName] = useState('');
// const [size, setSize] = useState(window.innerWidth);
const [posts, setPosts] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

// useEffect(() => {
//     console.log('hi');
// }, [count]);


// const checkSize = () => {
//     setSize(window.innerWidth);
// }

// useEffect(() => {
//     window.addEventListener('resize', checkSize);

//     return () => {
//         console.log('clean up');
//         window.removeEventListener('resize', checkSize);
//     }
// })

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        setPosts(data);
        setLoading(false);
    })
    .catch(err => {
        console.log(err.message)
        setError(err.message)
        setLoading(false)
    })
})

    return(
        <div>

        {/*         <button onClick={() => setCount(count + 1)}>count {count}</button>
        <h2>size: {size} px</h2>*/}
        {error && <h3>{error}</h3>}
        {loading ? <h2>loading...</h2> : ''}
        {posts == null ? '' : posts.map(post => (
            <p key={post.id}>{post.title}</p>
        ))}

        </div>
    );

}



export default Hooks;