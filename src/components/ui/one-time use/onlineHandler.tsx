import useOnline from "../../../customHooks/useOnline";

const OnlineHandler = () => {
    const online = useOnline()
    return (
        <span className="onlineindicator" style={!online ? {} : { backgroundColor: 'orangered' }}></span>
    );
}

export default OnlineHandler;