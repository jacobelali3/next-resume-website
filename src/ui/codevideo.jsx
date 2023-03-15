
function CodeVideo() {


    return(
        <div className="animate-beat w-full h-full top-0 bottom-0 absolute overflow-hidden object-cover min-h-full min-w-full " >
        <video playsInline autoPlay loop muted className="object-cover w-full h-full min-w-full min-h-full -z-50 ">
          <source src={process.env.BACKGROUND} type="video/mp4"></source>
        </video>
      </div>

    );
}

export default CodeVideo;