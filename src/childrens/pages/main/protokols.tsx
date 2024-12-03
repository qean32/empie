import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";


export const ProtokolsChild = ({ }: {}) => {

    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer">
                    <span style={{ padding: '0 30px' }}>
                        <p style={{ margin: '10px 0 30px 0' }}>протоколы проведения встреч и организации турниров</p>
                        <a href="/img/___.pdf" download={''}>
                            <img src="/svg/pdf.svg" alt="" width={34} />
                        </a>
                    </span>
                </div>
            </SmallCenterPlate>
        </>
    );
}