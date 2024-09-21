type Props = {
    children: any
}
export const FullPlate = ({ children }: Props) => {

    return (
        <div className="bigplate">
            {children}
        </div>
    );
}