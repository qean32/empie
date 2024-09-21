type Props = {
    children: any
}
export const RightPanel = ({ children }: Props) => {
    return (
        <div className="rightpanel">
            {children}
        </div>
    );
}