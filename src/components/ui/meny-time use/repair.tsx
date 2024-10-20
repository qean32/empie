const Repair = ({ size }: { size?: number }) => {
    return (<img src="/svg/repair.svg" alt="" style={size ? { width: `${size}vh` } : {}} />);
}

export default Repair;