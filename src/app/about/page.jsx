import WallE from "../../ui/walle";
import Image from "next/image";

function AboutMe() {
  return (
    <div className="pb-4 lg:flex justify-center block md:block mt-14">
      <div className=" lg:w-1/2 sm:w-screen mt-2 px-4">
        <h1 className=" text-4xl font-bold">About Me</h1>

        <p className="px-2 text-2xl font-sans mt-6 ">
          I am a software engineer based in Sydney, Australia. My passion lies
          within web development and I love to explore the latest cutting edge
          technology! <br></br>
          <br></br>I currently work as a Backend Engineer.
          <br></br>
          <br></br>I&apos;m mainly a backend engineer by profession, but in my spare time I dabble in the frontend to create various apps. I seek opportunities where I can learn, grow
          and thrive with development. I also love building real, genuine
          relationships with people.
          <br></br>
          <br></br>
          When I was a kid, I remember watching the movies like Wall-E or Iron
          Giant and reading a magazine about Hondas Robot
          <a
            className="text-bold text-blue-500"
            href="https://en.wikipedia.org/wiki/ASIMO"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            ASIMO
          </a>
          , which greatly inspired my love for technology. The idea of an
          emotional resonance from sentient machine facinated me.
          <br></br>

          <svg className="mb-0 pb-0 w-20 h-20 mt-4 ml-auto mr-auto block filter fill-slate-800 dark:fill-white " xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
    <path d="M 5 3 C 3.8954305 3 3 3.8954305 3 5 C 3 6.0728943 3.8455546 6.9506653 4.90625 7 L 18.90625 34.15625 C 19.53525 33.91325 20.18475 33.69825 20.84375 33.53125 L 6.6875 6.09375 C 6.8890763 5.7815498 7 5.3992632 7 5 C 7 3.8954305 6.1045695 3 5 3 z M 45 3 C 43.895431 3 43 3.8954305 43 5 C 43 5.3992632 43.110924 5.7815498 43.3125 6.09375 L 29.15625 33.53125 C 29.81425 33.69825 30.46475 33.91225 31.09375 34.15625 L 45.09375 7 C 46.154445 6.9506653 47 6.0728943 47 5 C 47 3.8954305 46.104569 3 45 3 z M 25 35 C 18.484 35 12.941 39.184 10.875 45 L 39.125 45 C 37.059 39.184 31.516 35 25 35 z M 8 46 L 8 48 L 42 48 L 42 46 L 8 46 z"/>
</svg>


          <video
            playsInline
            autoPlay
            loop
            muted
            className="mt-0 w-full lg:w-80 md:5/12 h-auto ml-auto mr-auto block border-solid rounded-lg border-4 border-slate-800 dark:border-white"
          >
            <source src={"/assets/iron-giant.mp4"} type="video/mp4"></source>
          </video>
          <br></br>
          The use of programs and computer science to advance humanity gave me
          hope for a future with countless possibilites. Naturally, my
          specialisation into software happened thereafter.
        </p>
      </div>
      <WallE></WallE>
    </div>
  );
}

export default AboutMe;
