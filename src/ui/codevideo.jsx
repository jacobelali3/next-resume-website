
function CodeVideo() {


    return(
        <div className="bg-blue-200 pattern-checks-md animate-beat fixed inset-0 w-full h-full overflow-hidden -z-10" >
        <video playsInline autoPlay loop muted className="object-cover w-full h-full min-w-full min-h-full" poster={process.env.POSTER}>
          <source src={process.env.BACKGROUND} type="video/mp4"></source>
        </video>
      </div>

    );
}

export default CodeVideo;