type Props = {
    children: any
}
export const CenterPlate = ({ children }: Props) => {

    return (
        <div className="centerplate">
            {children}
            <article className="under-color"></article>
        </div>
    );
}

type Props_ = {
    children: any
}
export const SmallCenterPlate = ({ children }: Props_) => {

    return (
        <div className="smallcenterplate">
            {children}
        </div>
    );
}