import Footer from '@/components/shared/HomeLayout/footer'
import Header from '@/components/shared/HomeLayout/header'
import { BlogHeader } from '@/components/shared/ReuseAble'
import React from 'react'

export default function PagePreview() {
  return (
    <div>
        <Header />
         <BlogHeader
				title="Premium Features"
				text="Unlock exclusive benefits with our specially curated premium packages designed just for you."
				path="/auth"
                showLink={false}
			/>
        <div className='my-20'>
          <p className='text-2xl font-medium text-center'>Why T&O Premium Features?</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
            
            <div className="ml-6">
              <img
                src="/images/Team.png"
                alt="Display"
                className="w-10 mb-2"
              />

              <h2 className="text-lg font-bold mb-2">Add Multiple Team Members</h2>
              <p className="text-gray-500">
                Unlock unlimited access to premium content with our subscription
                service, providing exclusive perks tailored to your interests.
              </p>
            </div>
            <img
              src="/images/risk-image.png"
              alt="Display"
              className="w-full md:w-1/3 p-5 md:p-0  md:mr-4"
            />
        </div>
        <div className='my-10 flex justify-center'>
        <button className='bg-[#000080] text-white rounded-lg px-5 py-2 '>
            Get Started Now
          </button>
        </div>
		<Footer />
    </div>
  )
}
