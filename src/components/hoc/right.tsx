type Props = {
    children: any
}
export const Right = ({ children }: Props) => {
    return (
        <div className="right">
            {children}
        </div>
    );
}