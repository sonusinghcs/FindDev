import React, { useState } from 'react'

function Leetstats() {
    const [username,setusername] = useState("")
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`
    async function getuserdata(url){
        try{
            const response = await fetch(url);
            const data= await response.json();
            console.log(data)
            return data
        }catch(error){
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    const [userdata,setData] = useState("")
    async function handleclick(){
        const data = await getuserdata(url);
        if(data){
            setData(data)
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
        <div className='w-full max-w-m h-100 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        {username && <p className=" text-gray-500 dark:text-white">Username: {username}</p>}
        {userdata && <p className=" text-gray-500 dark:text-white">Total solve :{userdata.totalSolved}</p>}
        {userdata && <p className=" text-gray-500 dark:text-white">Ranking : {userdata.ranking}</p>}
        {userdata && <p className=" text-gray-500 dark:text-white">Easy Solved : {userdata.easySolved}</p>}
        {userdata && <p className=" text-gray-500 dark:text-white">Medium Solved : {userdata.mediumSolved}</p>}
        {userdata && <p className=" text-gray-500 dark:text-white">Hard Solved : {userdata.hardSolved}</p>}
        {userdata && <p className=" text-gray-500 dark:text-white">Acceptance Rate : {userdata.acceptanceRate}</p>}
        </div>
        
    </div>
    </>
  )
}

export default Leetstats