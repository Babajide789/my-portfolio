import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa"

type SocialsProps = {
  containerStyles?: string
  iconStyles?: string
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/" },
  { icon: <FaYoutube />, path: "https://youtube.com/" },
  { icon: <FaTwitter />, path: "https://twitter.com/" },
]

export default function Socials({ containerStyles, iconStyles }: SocialsProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyles} transition-transform transform hover:scale-110 hover:text-accent duration-300`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
