import { memo, useState } from "react";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Post } from "../../../components/ui/meny-time use/post";
import Repair from "../../../components/ui/meny-time use/repair";
import useDinamickPagination from "../../../customHooks/useDinamickPagination";
import { arrey } from "../../../functions/GiveConst";
import { DftPost } from "../../../pages/main/news";



export const WallChild = ({ }: {}) => {
    const [posts, setPosts] = useState<any[]>([{ el: '' }, {}])

    // const ref = useDinamickPagination(() => setPosts((prev: any) => [...prev, ...arrey]))
    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', gap: '20px' }}>
                    <div style={{ padding: '0 40px' }}>
                        <p style={{ margin: '10px 0' }}>действующая версия: 3.00</p>
                        <div style={{ margin: '25px 0' }}>
                            <Repair />
                        </div>
                        <div>
                            <p style={{ margin: '5px 0' }}>о нас</p>
                            <p>приложение разработанно как некомерческая платформа для
                                организации и проведения турниров и товарищеских встреч по различным спортивным - киберспортивным дисциплинам</p>
                        </div>
                        <div className="reference">
                            <a title="наш дискорд" href="https://t.me/+xJIMXDHnrvwyMjMy" target="_blank"><img src="/svg/telegram.svg" alt="" /></a>
                            <a title="наш телеграм" href="https://discord.gg/saN3mAmyyp" target="_blank"><img src="/svg/discord.svg" alt="" /></a>
                            <a title="исходный код" href=""><img src="/svg/github.svg" alt="" /></a>
                            <a title="исходный код" href=""><img src="/svg/github.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </SmallCenterPlate>

            {posts.map((el) => (
                // <DftPost el={el.id} el={el} />
                <></>
            ))}

            {/* <div ref={ref} className="scrollhandlerref"></div> */}
        </>
    );
}