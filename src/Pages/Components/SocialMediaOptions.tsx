import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SlSocialGoogle } from 'react-icons/sl'

const SocialMediaOptions = () => {

    const options = [
        { key: 1, icon: <SlSocialGoogle size={20} /> },
        { key: 2, icon: <FiFacebook size={20} /> },
        { key: 3, icon: <FiLinkedin size={20} /> },
        { key: 4, icon: <FiTwitter size={20} /> },
    ]

    return (
        <div className='flex items-center justify-between gap-4'>
            {options.map((option) => (
                <div key={option.key} className="flex items-center justify-center cursor-pointer w-[48px] h-[48px] rounded-full border-[2px] border-[#3E3E3E]">
                    {option.icon}
                </div>
            ))}
        </div>
    )
}

export default SocialMediaOptions