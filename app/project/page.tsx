import Navbar from "../components/navbar";
import Image from 'next/image'
import viewProject from "../viewProject/page"

export default function Project() {
  return (
        <div className="grid grid-cols-3 md:grid-cols-6" style={{margin: "5% auto", width: "80%", position: "relative", top: "4%"}}>

            <div className="col-span-2 colClass ...">
              <div className="projDiv">
                <div><h2 className="projTitle">Beyond Pixels</h2></div>
                <br/>
                <div><p>An AI-powered browser extension improving accessibility by generating context-aware image descriptions using Google Gemini API and reading them aloud with screen readers.</p></div>
                <div className="">
                <br/>
                  <a href="/viewProject?project=beyond-pixels" target="_blank"><button className="viewProjectBtn p-2 m-1">View Project</button></a>
                  <a href="https://github.com/rebeccad71011/BeyondPixels" target="_blank"><button className="viewProjectBtn p-2 m-1">View Source Code</button></a>
                </div>
              </div>
            </div>

            <div className="col-span-2 colClass ...">
              <div className="projDiv">
                <div><h2 className="projTitle">gdrive to AWS</h2></div>
                <br/>
                <div><p>A utility tool that automates the migration of files from Google Drive to AWS S3, ensuring efficient, secure, and reliable cloud storage transfer.</p></div>
                <div className="">
                <br/>
                  <a href="/viewProject?project=gdrive-aws" target="_blank"><button className="viewProjectBtn p-2 m-1">View Project</button></a>
                  <a href="" target="_blank"><button className="viewProjectBtn p-2 m-1">View Source Code</button></a>
                </div>
              </div>
            </div>
            <div className="col-span-2 colClass ...">
              <div className="projDiv">
                <div><h2 className="projTitle">My Schedules</h2></div>
                <br/>
                <div><p>A personal task and schedule management web app that allows users to create, update, and track tasks, meetings, and events with reminders and calendar views.</p></div>
                <div className="">
                <br/>
                  <a href="/viewProject?project=My Schedules" target="_blank"><button className="viewProjectBtn p-2 m-1">View Project</button></a>
                  <a href="https://github.com/sahajpatel008/mySchedules" target="_blank"><button className="viewProjectBtn p-2 m-1">View Source Code</button></a>
                </div>
              </div>
            </div>

            <div className="col-span-2 colClass ...">
              <div className="projDiv">
                <div><h2 className="projTitle">Billing and Inventory Management System</h2></div>
                <br/>
                <div><p>A full-stack application built with Angular, C#, and MySQL to manage product inventory, billing, and customer records with secure login and real-time data updates.</p></div>
                <br/>
                <div className="">
                  <a href="/viewProject?project=Billing and Inventory Management System" target="_blank"><button className="viewProjectBtn p-2 m-1">View Project</button></a>
                  <a href="https://github.com/bhattrishita/billing-and-inventory-management-system" target="_blank"><button className="viewProjectBtn p-2 m-1">View Source Code</button></a>
                </div>
              </div>
            </div>

            <div className="col-span-2 colClass ...">
              <div className="projDiv">
                <div><h2 className="projTitle">FatJ</h2></div>
                <br/>
                <div><p>A website developed for a local café to showcase their menu, location, and contact details. Designed with a clean, responsive UI to enhance customer experience and online presence.</p></div>
                <div className="">
                <br/>
                  <a href="https://imaginative-flan-32fd15.netlify.app/" target="_blank"><button className="viewProjectBtn p-2 m-1">View Project</button></a>
                  <a href="https://github.com/bhattrishita/fatj-website" target="_blank"><button className="viewProjectBtn p-2 m-1">View Source Code</button></a>
                </div>
              </div>
            </div>
        </div>
  );
}
