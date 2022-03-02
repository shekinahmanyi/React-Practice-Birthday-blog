import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
   
 

    return ( 
        <div className="home">
            { isPending && <div>Loading....</div>}
          { blogs && <BlogList blogs = {blogs} title = "All Blogs!" />}
           {/*<BlogList blogs = {blogs .filter((blog) => blog.author === 'Manyi' )} title = "Manyi's blogs" /> */}
         {/*<button onClick ={()=> setAddress('Mile 2')}>Change name</button>
             <p>{ address }</p>*/}
      </div>
     );
}
 
export default Home;