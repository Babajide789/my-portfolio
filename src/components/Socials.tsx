import Link from "next/link"
import { FaGithub, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

type SocialsProps = {
  containerStyles?: string
  iconStyles?: string
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Babajide789/" },
  // { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/babajide-yahaya-727021240/" },
  { icon: <FaWhatsapp />, path: "https://wa.link/weyef2/" },
  { icon: <FaXTwitter />, path: "https://x.com/ocims_j?s=21/" },
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
