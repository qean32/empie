type Props = {
    ref: any
}
export const ScrollHandlerRef = ({ ref }: Props) => {
    return (
        <div ref={ref} className="scrollhandlerref">загрузка..</div>
    );
}