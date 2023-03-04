
function CodeVideo() {


    return(
        <div className="w-full h-full top-0 bottom-0 absolute overflow-hidden object-cover min-h-fill min-w-full " >
        <video playsInline autoPlay loop muted className="object-cover w-full h-full min-w-full min-h-full -z-50 ">
          <source src="https://d1jt5eir8qi0yi.cloudfront.net/resume-website/code-background.mp4" type="video/mp4"></source>
        </video>
      </div>

    );
}

export default CodeVideo;