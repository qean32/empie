import Repair from "../../components/ui/meny-time use/repair";


export const StreamChild = ({ }: {}) => {
    return (
        <>
            <div className="rightcontainer positioncenterbyflex" style={{ padding: '40px 0', gap: '20px' }}>
                <Repair />
                <p>стрим не идет</p>
            </div>
            {/* <iframe
                src="https://player.twitch.tv/?channel=evelone2004&parent=streamernews.example.com&parent=localhost:5173&muted=false&autoplay=true"
                height="100%"
                width="100%"
            >
            </iframe> */}
        </>
    );
}