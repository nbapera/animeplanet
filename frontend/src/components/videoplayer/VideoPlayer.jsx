import './VideoPlayer.css'

const VideoPlayer = (props) => {
    return (
        <div className="videoplayer">
            <iframe
                className='mb-4' title="outer" src={props.url} style={{
                    position: "relative",
                    boxShadow: "2% 2% 4% rgba(0,0,0,0.5)",
                    width: "80%",
                    height: "1000px"
                }}
                frameBorder="0"
                allowFullScreen={true}
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
            />
        </div>
    )
}

export default VideoPlayer
