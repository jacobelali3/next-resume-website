import Image from "next/image";

function Projects() {
  return (
    <div>
      <div className="lg:ml-20    px-4  text-2xl lg:w-1/2 w-auto ">
        <h2 className="text-4xl text-left font-bold">Projects</h2>

        <div className="mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a
            href="https://github.com/jacobelali3/Software-Engineering-Studio-2B"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              className="place-items-center mt-4  animate-bounce w-12 float-right dark:bg-white dark:rounded-full"
              src={"/assets/githubLogo.png"}
              alt="Git Hub Logo"
              width={200}
              height={200}
            />
          </a>
          <p className="  font-sans  mt-10 ">
            <b>UTS HELPS Prototype</b>
            <br></br>
            <br></br> Collaborated on a prototype for the outdated UTS HELPS
            website that handled student appointment booking. The website was
            built with django, sqlite, JS and html. In addition to booking, the
            system had authentication, chat, email and various admin
            functionality.
          </p>
        </div>

        <div className="mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a
            href="https://github.com/jacobelali3/2021-SES3B-Team4"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              className="place-items-center mt-10 animate-bounce w-12 float-right dark:bg-white dark:rounded-full"
              src={"/assets/githubLogo.png"}
              alt="Git Hub Logo"
              width={200}
              height={200}
            />
          </a>

          <p className=" font-sans mt-10 ">
            <b>COVID-19 App</b>
            <br></br>
            <br></br> Collaborated on an application that was developed in
            response to the Covid-19 pandemic. The main feature consisted of a
            chatbot that predicted if a patient had covid. In addition; the app
            provided statistics, news, visual models and client-to-doctor
            communication functionality. It was built with React, Material UI
            and Flask.
          </p>
        </div>

        <div className="mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a
            href="https://github.com/jacobelali3/react-resume-website"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="place-items-center mt-10 w-12 animate-bounce float-right dark:bg-white dark:rounded-full"
              src={"/assets/githubLogo.png"}
              alt="Git Hub Logo"
              width={200}
              height={200}
            />
          </a>
          <p className="  font-sans mt-10 ">
            <b>This Website</b>
            <br></br>
            <br></br> This website is made using Next and Tailwind. I&apos;ve used tailwind to style and make the site
            responsive to most devices, aswell as Three.js to render WallE. This website was built to serve as my
            portfolio website. I partially built this website using the REMIX
            framework, which can be found
            <a
              className="text-bold text-blue-500"
              href="https://github.com/jacobelali3/REMIXresumeWebsite"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              here.
            </a>
            <br></br>Then I decided to build it with
            <a
              className="text-bold text-blue-500"
              href="https://github.com/jacobelali3/next-resume-website"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              React only
            </a>
            , because I found the distinguishment between SSR and client odd. Recently, I migrated it to Next in an effort to learn the framework. I also moved the heavy client loaded content to AWS CloudFront & S3 bucket.
          </p>
        </div>

        <div className="mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p className="font-semibold mt-10 ">Other Projects</p>
          <ul className=" pl-6 font-sans mt-6 list-disc">
            <li className="underline decoration-blue-400 hover:text-blue-500">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/jacobelali3/CprogrammingUTS"
              >
                Banking app using <b>C</b>.
              </a>
            </li>
            <li className="underline decoration-blue-400 hover:text-blue-500">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/jacobelali3/CProg"
              >
                Encryption and compression using <b>C</b>
              </a>
            </li>
            <li className="underline decoration-blue-400 hover:text-blue-500">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/jacobelali3/SES-1B-Group-3"
              >
                Android health app with map and heart rate monitor using{" "}
                <b>Java</b>.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
