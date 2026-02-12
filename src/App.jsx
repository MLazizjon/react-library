// !dataProvider

// import React, { Children } from 'react'
// import { Route, Routes } from 'react-router-dom';
// import Header from "./components/header/Header"
// import Sidebar from "./components/sidebar/SideBar"
// import Home from "./pages/home/Home"
// import Projects from "./pages/projects/Projects"
// import Serices from "./pages/serices/Services"
// import Contact from "./pages/contact/Contact"
// import './App.css';

// const App = () => {

//   fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json))

// console.log();

//   return (
//     <div>
//        <Routes>
//     <DataProvider>
//        <Route path='/' element={<Home/>}/>
//          <Route path='/header' element={<Header/>}/>
//          <Route path='/Projects' element={<Projects/>}/>
//          <Route path='/Serices' element={<Serices/>}/>
//          <Route path='/Contact' element={<Contact/>}/>
//          <Route path='/Sidebar' element={<Sidebar/>}/>  
//     </DataProvider>
//        </Routes>
//      </div>
//    )
//  }

//  export default App




// !get

import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // GET so‘rovi
      .then((response) => response.json()) // JSON formatga o‘tkazish
      .then((json) => {
        setData(json); // state ga saqlash
        setLoading(false); // loading tugadi
      })
      .catch((error) => {
        console.error("Xato:", error);
        setLoading(false);
      });
  }, []);
  console.log(data);
  

  if (loading) return <h2>Yuklanmoqda...</h2>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <b>{item.title}</b>: {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;



// !post

// import React, { useState } from "react";

// const PostExample = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [response, setResponse] = useState(null);

//   const sendPost = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST", // POST metodi
//       headers: {
//         "Content-Type": "application/json", // JSON formatda yuborilmoqda
//       },
//       body: JSON.stringify({
//         title: title,
//         body: body,
//         userId: 1,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Serverdan javob:", data);
//         setResponse(data); // javobni state ga saqlaymiz
//       })
//       .catch((err) => console.error("Xato:", err));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>POST misol</h2>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <br /><br />

//       <textarea
//         placeholder="Body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//       />
//       <br /><br />

//       <button onClick={sendPost}>POST yuborish</button>

//       {response && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Serverdan javob:</h3>
//           <p><b>ID:</b> {response.id}</p>
//           <p><b>Title:</b> {response.title}</p>
//           <p><b>Body:</b> {response.body}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostExample;



// !delete

// import React, { useState, useEffect } from "react";

// const DeleteExample = () => {
//   const [posts, setPosts] = useState([]);

//   // GET — postlarni olib kelish
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data.slice(0, 5)); // faqat 5 ta post
//       });
//   }, []);

//   // DELETE funksiyasi
//   const deletePost = (id) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         alert(`Post ${id} o‘chirildi (fake API da real o‘chmaydi)`);
//         // listdan ham olib tashlash (UI uchun)
//         setPosts(posts.filter((post) => post.id !== id));
//       })
//       .catch((err) => console.error("Xato:", err));
//   };

//   return (
//     <div>
//       <h2>DELETE misol</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <b>{post.title}</b>{" "}
//             <button onClick={() => deletePost(post.id)}>O‘chirish</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DeleteExample;

