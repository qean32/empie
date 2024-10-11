import { memo, useState } from "react";
import { CenterPlate } from "../../../components/hoc/plates/centerPlate";
import { InlineUser } from "../../../components/ui/meny-time use/inlinePrezentation";


export const TeamChild = ({ }: {}) => {
    return (
        <>
            <CenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                    <div className="background"><img src="" alt="" /></div>
                    <article className="about">
                        <p>teamname</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium?</p>
                        <p style={{ fontSize: '1.6vh' }}>матчи: 23/32 турниры: 2/3 показатели: 52%</p>
                    </article>
                    <div style={{ padding: '20px 0' }}></div>
                </div>
            </CenterPlate>
            <CenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                    <div className="trophy">
                        <div style={{ padding: '20px 40px' }}>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </CenterPlate>
            <CenterPlate>
                <div>
                    <img src="/svg/dota.svg" alt="" style={{ transform: 'translate(0, 10px)' }} />
                </div>
                <div className="dftcontainer" style={{ flexDirection: 'column', padding: '20px 0', alignItems: 'normal', justifyItems: 'normal' }}>
                    <div>
                        <Players />
                    </div>
                </div>
            </CenterPlate>
        </>
    );
}


const Players = memo(({ }: {}) => {
    const [player, setPlayer] = useState<any[]>([{}, {}, {}, {}])
    return (
        <CenterPlate>
            <div>
                <img src="/svg/dota.svg" alt="" style={{ transform: 'translate(0, 10px)' }} />
            </div>
            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '20px 0', alignItems: 'normal', justifyItems: 'normal' }}>
                <div>
                    {player.map((el, index) => (
                        <InlineUser key={index} />
                    ))}
                </div>
            </div>
        </CenterPlate>
    );
})