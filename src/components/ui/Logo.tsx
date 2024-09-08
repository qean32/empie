type Props = {
 size?: number
}
export const EmpieLogo = ({size = 45}: Props) => {
    return (
        <img src="/svg/empieLogo.svg" alt="" style={{width: `${size}px`}} />
    );
}