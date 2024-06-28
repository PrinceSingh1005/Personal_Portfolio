import React from 'react'

const Contact = () => {
    return (
        <div className='bg-gradient-to-b from-slate-800 to-slate-700' id='Contact'>
            <p className='pt-5 lg:pt-16 pb-6 text-5xl font-bold text-white text-center'>Get In <span className='text-blue-500'> Touch</span></p>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 justify-center items-center px-10 lg:p-10">
                <div className='lg:w-1/3 lg:-mt-48'>
                    <h2 className='text-2xl font-medium my-3'>Don't Be Shy!</h2>
                    <p className='text-xs'>Feel Free to get in touch with me. I am always open to discussing new projects.</p>
                    <h4 className='mt-3 text-slate-400'>Address Point</h4>
                    <p className='text-sm'>Bagmati Hostel, Nit Patna college, Ashok Rajpath, Patna, Bihar.</p>
                    <h4 className='mt-3 text-slate-400'>E-Mail Me</h4>
                    <h5 className='text-sm'>12prince345singh@gmail.com</h5>
                    <h4 className='mt-3 text-slate-400'>Call Me</h4>
                    <h5 className='text-sm'>6397823309</h5>
                </div>
                <div className='w-3/5 lg:w-2/5'>
                    <form className='flex flex-col gap-5 lg:px-10 text-slate-800' action="mailto:12prince3456singh@gmail.com" method="post" encType='text/plain'>
                        <div className="flex flex-col lg:flex-row gap-7 w-full">
                            <input className='pl-5 rounded-3xl p-2 outline-none w-full' type='text' placeholder='Your Name' />
                            <input className='pl-5 rounded-3xl p-2 outline-none w-full' type='email' placeholder='Your E-Mail' />
                        </div>
                        <input className='pl-5 rounded-3xl p-2 outline-none' type="text" name="Subject" id="" placeholder='Subject' />
                        <textarea className='rounded-3xl p-4 outline-none' name="Message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button className='p-3 w-3/5 lg:w-2/5 text-white border-2 border-cyan-400 mb-5 lg:mt-10 rounded-3xl font-medium shadow-lg hover:bg-gradient-to-r from-blue-300 to-blue-400 hover:text-black inset-20'>Send Message</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact