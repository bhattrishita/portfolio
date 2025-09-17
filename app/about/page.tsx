import Navbar from "../components/navbar";
import Image from 'next/image'
import Project from "../project/page"
import Contact from "../contact/page"

const skillsData = [
    { title: "Languages", skills: ["C", "JavaScript", "TypeScript", "Python"] },
    { title: "Frontend", skills: ["React", "Next.js", "jQuery", "Bootstrap"] },
    { title: "Backend", skills: ["Node.js", "Django", "RESTful API", "Auth0"] },
    { title: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
    { title: "Tools", skills: ["GitHub", "AWS", "Figma", "Photoshop"] },
    { title: "Styling", skills: ["Tailwind", "Material UI", "Chakra UI"] },
  ];

export default function About() {
    return (
        <div className="mainDiv grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] h-screen flex align-items-center flex-col">
          <div className="flex justify-center w-full">
            <Navbar />
          </div>
          <div id="about" className="bgDiv grid grid-cols-2 justify-center items-center w-4/5">
            <div className="px-5 py-15">
                <Image className="profileImg" src="/profile.png" width={300} height={300} alt="Picture of the author"/>
            </div>
            <div className="px-5 py-15">
                <h1 className="text-2xl font-bold headingFont text-[50px]">I'm Rishita.</h1>
                <p className="textFont">I'm Software Developer and CSE Master’s student at Santa Clara University. I love turning ideas into intuitive web applications, whether through professional projects or personal experiments, across a variety of tech stacks. Passionate about problem-solving and learning—whether exploring new tech trends, reading, or watching movies—I’m always eager to tackle challenges and contribute my skills to meaningful projects.</p>
            </div>
          </div>
          
          <div id="project" className="projSection"><Project /></div>
          
          {/* <Contact /> */}
          <footer id="contact" className="w-full bg-black text-white py-15 px-4 flex justify-center">
                <div className="max-w-screen-lg w-full">
                    <Contact />
                </div>
            </footer>
          {/* <div className="skillsContainer grid grid-cols-3 gap-4 my-5">
            {skillsData.map((section) => (
                <div key={section.title} className="skillsSection textFont m-2">
                    <div className="skillTitle">
                        <p>{section.title}</p>
                    </div>
                    <div className="skills p-2">
                        <ul>
                            {section.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
           </div> */}

        </div>

    );
  }
  