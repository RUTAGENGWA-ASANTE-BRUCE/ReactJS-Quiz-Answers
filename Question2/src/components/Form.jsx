import React from 'react'

function Form() {
  return (
    <form className="bg-blue-500 p-4 rounded-md w-[32%] text-[14.5px] text-white h-fit m-auto mt-20 space-y-5">
        <div className="flex flex-col">
            <label>Your full given name</label>
            <input type="text" className="mt-1 p-1 bg-transparent outline-none border-white border w-full"/>
        </div>
        <div className="flex flex-row space-x-3">
        <div className="flex flex-col w-2/4">
            <label>Date of Birth</label>
            <input type="date" className="mt-1 p-1 bg-transparent outline-none border-white border w-full"/>
        </div>
        <div className="flex flex-col w-2/4">
            <label>Country of residence or citizenship</label>
            <input type="text" className="mt-1 p-1 bg-transparent outline-none border-white border w-full"/>
        </div>   
        </div>
        <div className="flex flex-col">
            <label>What school do you plan to attend?</label>
            <input type="text" className="mt-1 p-1 bg-transparent outline-none border-white border w-full"/>
        </div>
        <div className="flex flex-col">
            <label>Please take a moment to describe your intended area of study</label>
            <textarea rows={6} className="mt-1 p-1 bg-transparent outline-none border-white border w-full"/>
        </div>
    </form>
  )
}

export default Form