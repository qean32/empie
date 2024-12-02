import Shadaow from "../ui/meny-time use/shadow";

type Props = {
    children: any
    function_: React.MouseEventHandler<HTMLDivElement>
}
export const Modal = ({ children, function_ }: Props) => {
    return (
        <>
            <div>
                <div onClick={function_}>
                    <Shadaow />
                </div>
                <div className="modal">
                    {children}
                    <div className="under-color"></div>
                </div>
            </div>
        </>
    );
}