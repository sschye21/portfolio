import React from 'react'
import { FiGithub, FiMail } from 'react-icons/fi'
import { FaLinkedin, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials () {

    const socials = [
        {
            "social": <FiGithub />,
            "link": "https://github.com/sschye21"
        },
        {
            "social": <FiMail />,
            "link": "mailto:sschye@gmail.com"
        },
        {
            "social": <FaLinkedin />,
            "link": "https://www.linkedin.com/in/steven-chye/"
        },
        {
            "social": <FaTiktok />,
            "link": "https://www.tiktok.com/@rachandsteve"
        },
    ]

    return (
        <div 
            className='lg:flex lg:flex-col gap-6 z-10 lg:left-0 lg:bottom-0 lg:pl-10 lg:pb-10
                md:flex-col md:gap-6 lg:fixed md:fixed md:left-0 md:bottom-0 md:pl-10 md:pb-10
                hidden'
        >
                {socials.map((item, key) => {
                    return (
                        <Link href={item.link} target="_blank" rel="noreferrer" key={key}>
                            {item.social}
                        </Link>
                    )
                })}
        </div>
    )
}