type Props = {
    size?: number
}

const Repair = ({ size }: Props) => {
    return (<img src="/svg/repair.svg" alt="" style={size ? {width: `${size}vh`} : {}} />);
}

export default Repair;