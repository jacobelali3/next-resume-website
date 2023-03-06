import WallE from "@/ui/walle"
import Image from "next/image";

function AboutMe() {
  return (
<div className="pb-4 lg:flex justify-center block md:block mt-14">
    <div className=" lg:w-1/2 sm:w-screen mt-2 px-4">
    <h1 className=" text-4xl font-bold">About Me</h1>

    <p className="px-2 text-2xl font-sans mt-6 ">
      I am a software engineer based in Sydney, Australia. My passion
      lies within web development and I love to explore the latest cutting
      edge technology! <br></br>
      <br></br>I currently work as a Backend Engineer at Macquarie Group.
      <br></br>
      <br></br>I&apos;m learning both frontend and backend in hopes
      of becoming a full stack. I seek opportunities where I can learn, grow
      and thrive with development. I also love building real, genuine
      relationships with people.
      <br></br>
      <br></br>
      When I was a kid, I remember watching the movies like Wall-E or Iron Giant and reading a
      magazine about Hondas Robot
      <a
        className="text-bold text-blue-500"
        href="https://en.wikipedia.org/wiki/ASIMO"
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        ASIMO
      </a>
      , which greatly inspired my love for technology. The idea of an emotional resonance from sentient machine facinated me.
      <br></br>
      <Image className="w-full lg:w-6/12 md:5/12 h-32 mt-8"
      src={'/assets/iron-giant.gif'}
      alt="Iron giant emotional outburst after kid almost dies"
      width={200}
      height={200}/>
      <br></br>
      The use of programs and computer science to advance humanity gave me hope for a future with
      countless possibilites. Naturally, my specialisation into software
      happened thereafter.
    </p>
  </div>
  <WallE></WallE>

  </div>
  );
}

export default AboutMe;
