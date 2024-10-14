import { useState } from "react";
import { CenterPlate } from "../../../components/hoc/plates/centerPlate";


export const ProfileChild = ({ }: {}) => {
    const [trophy, setTrophy] = useState<any[]>([{}, {}, {}, {}])
    return (
        <>
            <CenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                    <div className="background"><img src="" alt="" /></div>
                    <article className="about">
                        <p>username</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium?</p>
                    </article>
                    <div style={{ width: '80%', margin: '20px 0 0 0', display: 'flex', gap: '20px' }}>
                        <div className="role" style={{ backgroundColor: `#c78d11` }}>организатор</div>
                    </div>
                    <div style={{ width: '80%', margin: '20px 0 25px 0', display: 'flex', gap: '20px', justifyContent: 'end' }}>
                        <a href={``}><img src="/svg/telegram.svg" alt="" style={{ width: '44px' }} className="hover3 transition07" /></a>
                        <a href={``}><img src="/svg/steam.svg" alt="" style={{ width: '44px' }} className="hover3 transition07" /></a>
                    </div>
                </div>
            </CenterPlate>
            <CenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                    <div className="aboutcareer" style={{ justifyContent: 'center' }}>
                        <div><img src="" alt="" /><img src="" alt="" /></div>
                        <div><img src="" alt="" /><img src="" alt="" /></div>
                    </div>
                </div>
            </CenterPlate>
            <CenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                    <div className="trophy">
                        <div>
                            {trophy.map((item, index) => (<img src="" alt="" key={index} />))}
                        </div>
                    </div>
                </div>
            </CenterPlate>
        </>
    );
}