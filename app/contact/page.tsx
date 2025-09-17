import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contactContainer">
            <div className="contactSection">
                <h1 className="headingTag">CONTACT</h1>
                <h2 className="subHeadingTag mt-5">          
                    <Link href="/Rishita_Bhatt_Resume.pdf" target="_blank">
                        Resume
                    </Link>
                </h2>
                <br/>
                <h3>
                    <div className="flex gap-10">
                        <a href="mailto:rishitabhatt18@gmail.com" target="_blank"><FaEnvelope size={28} /></a>
                        <a href="https://www.linkedin.com/in/rishita-bhatt/" target="_blank"><FaLinkedin size={28} /></a>
                        <a href="https://github.com/bhattrishita" target="_blank"><FaGithub size={28} /></a>
                    </div>
                </h3>
            </div>
    </div>  
  );
}
