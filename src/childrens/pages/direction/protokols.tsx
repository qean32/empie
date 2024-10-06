import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";

type Props = {
}

export const ProtokolsChild = ({ }: Props) => {

    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer">
                    <span style={{ padding: '0 30px' }}>
                        <p style={{ margin: '10px 0 30px 0' }}>протоколы проведения встреч и организации турниров</p>
                        <a href="/svg/word.svg" download={''}>
                            <img src="/svg/word.svg" alt="" />
                        </a>
                    </span>
                </div>
            </SmallCenterPlate>
        </>
    );
}