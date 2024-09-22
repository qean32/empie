type Props = {
    children: any
}
export const Center = ({ children }: Props) => {
    return (
        <div className="center">
            {children}
        </div>
    );
}