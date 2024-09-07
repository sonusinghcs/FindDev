import React from "react";
import {Link} from "react-router-dom"
function Github() {
    const [username, setUsername] = React.useState("");
  const url = `https://api.github.com/users/${username}`;

  
  async function getuserinfo(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if(data.message === "Not Found"){
        
        return null;
      }
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  const [userdata, setUserdata] = React.useState("")
  async function handleclick(){
    const userdata = await getuserinfo(url);
    setUserdata(userdata);
    
    console.log(userdata);
  }
  return (
    <>
    <h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Github User Information</h1>
    <input
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      type="text"
      placeholder="Enter your Github username"
      onChange={(e) => setUsername(e.target.value)}
    />
    <button 
    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-4"
    onClick={handleclick}>Fetch User Info</button>
    {userdata && <div>
        
        
    
        
        
        
      

<div className="w-full max-w-m h-100 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <div className="flex flex-col items-center pb-10">
        <img className="w-60 h-60 mb-3 rounded-full shadow-lg m-5" src={userdata.avatar_url} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {userdata?.name}</h5>
        <span className="dark:text-white">Bio : {userdata.bio}</span><span className=" text-gray-500 dark:text-white">Follower : {userdata.followers}</span>
        <span className=" text-gray-500 dark:text-white">Following : {userdata.following}</span>
        <span className=" text-gray-500 dark:text-white">Public Repo : {userdata.public_repos}</span>
        <div className="flex mt-4 md:mt-6">
            <a href={userdata.html_url} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            target="_blank">Go to profile</a>
           
        </div>
    </div>
</div>

        
    </div>}
    
    </>
  );
}

export default Github;
