import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/hoc/modal";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { FullPlate } from "../../components/hoc/plates/fullPlate";
import { LeftPanel } from "../../components/hoc/leftPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { useQuery } from "react-query";
import { USERServices } from "../../services/USERServices";


export const Test = ({ }: {}) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('ТЕСТ ПАДЕ')
    const [offset, setOffset] = useState<any>(0)
    const [post, setPost] = useState<any>(0)
    const data = useQuery(['users', offset], () => USERServices.GETUser(offset, ''), { keepPreviousData: true })

    useEffect(() => {
        if (data.data) { setPost(data.data.results) }
        if (data.data) { console.log(data) }
    }, [data])
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <p>ТЕСТ ПАДЕ</p>
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel function_={modal.SwapFn} />
                    <Center>

                        <FullPlate>
                            <>
                            </>
                        </FullPlate>
                    </Center>
                    <Right><RightPanel><div className="dftcontainer"></div></RightPanel></Right>
                </>
            </div>
        </>
    );
}