import React from 'react'
import ContectBg from '../assets/contectbg5.jpg'

const Contact =React.forwardRef((props, ref) => {
  return (
    <div id="Contact" style={{backgroundImage: `url(${ContectBg})`}} className='h-screen w-screen bg-cover bg-no-repeat  bg-center  '>
      <div className='flex flex-col items-center justify-center '>
      <div className='text-white text-4xl mt-36'>
        Talk With Me
      </div>
      <div className='m-10'>
        <form>
        <input className=' text-gray-500 bg-transparent border-b rounded-b focus:outline-none placeholder-gray-500' type='text' placeholder='Name'></input>
        <br/>
        <br/>
        <input className=' text-gray-500 bg-transparent border-b rounded-b focus:outline-none placeholder-gray-500' type='text' placeholder='Email'></input>
        <br/>
        <br/>
        <input className='text-gray-500 bg-transparent border-b rounded-b focus:outline-none placeholder-gray-500' type='text' placeholder='Subject'></input>
        <br/>
        <br/>
        <textarea  className='text-gray-500 bg-transparent border-b rounded-b focus:outline-none placeholder-gray-500' rows={6} cols={30} type='textarea' placeholder='Message'></textarea>
        <br/>
        <br/>
        <div className='flex justify-center'>
        <button type="submit" className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded ">
        Submit
        </button>
        </div>

        </form>
      </div>
      </div>
    </div>
  )
})
export default Contact;