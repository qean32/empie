import { useContext, useEffect, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { InputFile, InputNumber, InputText, Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import useDebounce from "../../customHooks/useDebounce";
import { InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { Button } from "../../components/ui/meny-time use/customButton";

type Props = {

}
export const EditProfile = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('редактор профиля')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel function_={modal.SwapFn} />
                    <Center>
                        <SmallCenterPlate>
                            <div className="dftcontainer" style={{ minHeight: '500px', justifyContent: 'start' }}>
                                <div className="edit">
                                    <span>
                                        <InputText title={"имя"} value={""} setValue={() => undefined} max={0} width={16} />
                                        <InputText title={"фамилия"} value={""} setValue={() => undefined} max={0} width={16} />
                                    </span>
                                    <div>
                                        <InputFile setValue={() => undefined} title="фон профиля" />
                                        <InputFile setValue={() => undefined} title="изображение профиля" />
                                    </div>

                                    <span>
                                        <InputText title={"ссылка стим"} value={""} setValue={() => undefined} max={0} />
                                        <InputText title={"ссылка тг"} value={""} setValue={() => undefined} max={0} />
                                    </span>

                                    <Button title="сохранить" function_={() => undefined} />
                                </div>
                            </div>
                        </SmallCenterPlate>
                        <SmallCenterPlate>
                            <div className="dftcontainer" style={{ justifyContent: 'start' }}>
                                <div className="edit" style={{ gap: '20px' }}>
                                    <p>pts dota2</p>
                                    <InputNumber title={""} value={0} setValue={() => undefined} max={0} min={0} />
                                    <p>elo cs2</p>
                                    <InputNumber title={""} value={0} setValue={() => undefined} max={0} min={0} />
                                    <Button title="сохранить" function_={() => undefined} />
                                </div>
                            </div>
                        </SmallCenterPlate>
                    </Center>
                    <Right>
                        <RightPanel><div className="dftcontainer"></div></RightPanel>
                    </Right>
                </div>}
        </>
    );
}