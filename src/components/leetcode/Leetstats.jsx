import React, { useState } from 'react'

function Leetstats() {
    const [username,setusername] = useState("")
    
    async function getuserdata(username){
        try{
            const response = await fetch("https://leetcodeserver.onrender.com/leetcode",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username}),
            });
            const data = await (response.json());
            console.log(data.data.matchedUser)
            return data.data.matchedUser
        }catch(e){}
    }
    const [userdata,setData] = useState()
    async function handleclick(){
        const data = await getuserdata(username);
        if(data){
            setData(data)
            console.log("function",userdata.profile.userAvatar)

        }
    }

  return (
    <>
    <div>
        <h1 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>LeetCode Stats</h1>
        <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        type="text" value={username} onChange={e => setusername(e.target.value)} placeholder="Enter LeetCode username" />
        <button 
        className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-4'
        
        onClick={handleclick}>Get User Data</button>
        
        {userdata && <div>
        
        
    
        
        
        
      

        <div className="
         bg-gradient-to-br from-indigo-600 to-pink-600 p-1
        
        
        w-full max-w-m h-100 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <div className="flex flex-col items-center pb-10">
                <img className="w-58 h-55  mb-3 rounded-full shadow-lg m-5" src={userdata.profile.userAvatar} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white m-4"> {userdata?.username}</h5>
                <span className="dark:text-white">Ranking : {userdata.profile.ranking}</span><span className=" text-gray-500 dark:text-white">All Question Solve : {userdata.submitStats.acSubmissionNum[0].count}</span>
                <span className=" text-gray-500 dark:text-white">Easy Question : {userdata.submitStats.acSubmissionNum[1].count}</span>
                <span className=" text-gray-500 dark:text-white">Medium Question : {userdata.submitStats.acSubmissionNum[2].count}</span>
                <span className=" text-gray-500 dark:text-white">Hard Question : {userdata.submitStats.acSubmissionNum[3].count}</span>
                <div className="flex mt-4 md:mt-6">
                    <a href={`https://leetcode.com/u/${userdata.username}/`} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    target="_blank">Go to profile</a>
                   
                </div>
            </div>
        </div>
        
                
            </div>}
        
    </div>
    </>
  )
}

export default Leetstats
