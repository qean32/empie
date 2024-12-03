import { memo } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { Modal } from "./modal";
import useBoolean from "../../customHooks/useBoolean";


export const LeftPanel = memo(() => {
    const navigate = useNavigate()
    const modal = useBoolean(false)

    return (
        <div className="leftpanel" >
            {modal.boolean && createPortal(
                <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>,
                document.body
            )}
            <div onClick={() => navigate('/')}><img src="/svg/news.svg" alt="" /><p>новости</p></div>
            <div onClick={() => navigate('/music')}><img src="/svg/music.svg" alt="" /><p>музыка</p></div>
            <div onClick={() => navigate('/chat')}><img src="/svg/chat.svg" alt="" /><p>чат</p></div>
            <div onClick={() => navigate('/community')}><img src="/svg/community.svg" alt="" /><p>сообщество</p></div>
            <div onClick={() => modal.SwapFn()}><img src="/svg/dragon.svg" alt="" /><p>направления</p></div>
            <div onClick={() => navigate('/cash')}><img src="/svg/cash.svg" alt="" /><p>расходы</p></div>
            <article className="under-color" style={{ minHeight: '48px' }}>
                <section>
                    <div><p onClick={() => navigate('/wall')}>разработчикам</p><p onClick={() => navigate('/wall')}>блог</p></div>
                    <div> <p onClick={() => navigate('/wall')}>еще</p><p onClick={() => navigate('/wall')}>помощь</p></div>
                </section>
            </article>
        </div>
    );
})