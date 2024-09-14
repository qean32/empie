type Props = {
    size?: number
}
export const EmpieLogo = ({ size = 4 }: Props) => {
    return (
        <img src="/svg/empieLogo.svg" className="logo" alt="" style={{ width: `${size}vh` }} />
    );
}