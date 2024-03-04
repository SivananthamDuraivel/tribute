import React from 'react'
import cow from './images/cow.jpg'

const Mypage = () => {
  return (
    
    <div className='container'>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap')
    </style>
      <div className='left'>
        <img src={cow} alt="" />
      </div>
      <div className='right'>
        <p className='work-sans'>In the heart of India's sprawling landscapes, the unsung heroes reside: Indian farmers. Their dedication and hard work are the bedrock of our nation's sustenance. From the crack of dawn till the setting sun, they toil tirelessly to put food on our tables. Despite facing myriad challenges like unpredictable weather and fluctuating markets, they persevere with unwavering determination. Their labor not only feeds the nation but also binds communities together, fostering unity and strength. Let's pay tribute to these humble souls whose sweat and toil nourish both body and soul. They are the backbone of our nation's prosperity, their legacy echoing through the fields they tend and the lives they touch. In their resilience, we find inspiration, and in their selflessness, we find the true essence of humanity.</p>
      </div>
    </div>
  )
}

export default Mypage
