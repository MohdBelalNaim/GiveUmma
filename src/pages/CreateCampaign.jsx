import React, { useState } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import StoryAndPhotos from '../components/CreateCampaignPage/StoryAndPhotos'
import BasicDetails from '../components/CreateCampaignPage/BasicDetails'
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa'
import Button from '../components/Button'

const CreateCampaign = () => {
const[story,setStory] = useState(false)
return (
<div>
    <HomeNavbar />
    <div className="max-w-[500px] mx-auto pb-5 grid gap-y-4">
        <div className='font-bold text-2xl'>Create your campaign</div>
        <div className='w-max bg-gray-100 text-xs py-1 px-3 rounded-full'>GiveUmma does not charge any platform fee!
        </div>

        {
        story?
        <StoryAndPhotos />
        :
        <BasicDetails />
        }

        <div className='flex gap-4'>
            {
            story?
            <>
                
                <Button onClick={()=>setStory(!story)} type="outline" size="md"><FaArrowLeft/>Back</Button>
                <Button size="md" type="primary">Submit <FaCheck/></Button>
            </>
            :
                <Button onClick={()=>setStory(!story)} size="md" type="primary">Next <FaArrowRight/></Button>
            }

        </div>
    </div>
</div>
)
}

export default CreateCampaign