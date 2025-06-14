import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'
import { SlSocialGoogle } from 'react-icons/sl'

interface SocialMediaOptionsProps {
    footer?: boolean
}

const SocialMediaOptions: React.FC<SocialMediaOptionsProps> = ({
    footer
}) => {

    const options = [
        { key: 1, icon: <SlSocialGoogle size={20} /> },
        { key: 2, icon: <FiFacebook size={20} /> },
        { key: 3, icon: <FiLinkedin size={20} /> },
        { key: 4, icon: <FiTwitter size={20} /> },
    ]

    const options2 = [
        { key: 2, icon: <FiFacebook size={20} /> },
        { key: 4, icon: <FiTwitter size={20} /> },
        { key: 3, icon: <FiLinkedin size={20} /> },
        { key: 1, icon: <FiYoutube size={20} /> },
    ]

    return (
        <div className='flex items-center justify-between gap-4'>
            {(footer ? options2 : options).map((option) => (
                <div key={option.key} className="flex items-center justify-center cursor-pointer w-[48px] h-[48px] rounded-full border-[2px] border-[#3E3E3E]">
                    {option.icon}
                </div>
            ))}
        </div>
    )
}

export default SocialMediaOptions