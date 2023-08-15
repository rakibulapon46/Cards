// const posts = [
//     {
//         title: "This is post title 1",
//         body: "This is post body 1",
//     },
//     {
//         title: "This is post title 2",
//         body: "This is post body 2",
//     },
//     {
//         title: "This is post title 3",
//         body: "This is post body 3",
//     },
//     {
//         title: "This is post title 4",
//         body: "This is post body 4",
//     },
//     {
//         title: "This is post title 5",
//         body: "This is post body 5",
//     },
//     {
//         title: "This is post title 6",
//         body: "This is post body 6",
//     },
//     {
//         title: "This is post title 7",
//         body: "This is post body 7",
//     },
//     {
//         title: "This is post title 8",
//         body: "This is post body 8",
//     },
// ];

// const postsElements = document.querySelector(".posts");

// const loadAllData = () => {
//     posts.map((post) => {
//         const postElement = document.createElement("div");
//         postElement.classList.add("post");
//         postElement.innerHTML = `<h4 class="post-title">${post.title}</h4>
//         <p class="post-body">${post.body}</p>`;
//         postsElements.appendChild(postElement);
//     });
// };
// loadAllData();


// Fetch Data 
const fetchData = async (config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("Data is not fetched");
    }
}

const postsElements = document.querySelector(".posts");

const loadAllData = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h1>${post.userId}</h1>
        <h2>${post.id}</h2>
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>`;
        postsElements.appendChild(postElement);
    });
};
loadAllData();



