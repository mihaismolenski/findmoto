import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export interface YoutubeVideosProps {
    search: string;
    count: number;
}

export const YoutubeVideos = ({ search, count }: YoutubeVideosProps) => {
    const [youtubeVideos, setYoutubeVideos] = useState<any[]>();

    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?q=${search} Review&maxResults=${count}&key=AIzaSyDzp5R2xH4ibB3p6oB3F_5LRZKBOsQs5xk`)
            .then(r => r.json())
            .then(r => setYoutubeVideos(r.items));
    }, [search, count]);

    return <div className="youtube-videos">
        {youtubeVideos && youtubeVideos.map((yt, index) => {
            return <YouTube videoId={yt.id.videoId} opts={opts} key={index} />;
        })}

    </div>;
}

export default YoutubeVideos;