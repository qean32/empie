import { memo } from "react";
import { useNavigate } from "react-router";

type Props = {
    function_: Function
}
export const LeftPanel = memo(({ function_ }: Props) => {
    const navigate = useNavigate()

    const fn = () => { function_() }
    return (
        <div className="leftpanel">
            <div onClick={() => navigate('/')}><img src="/svg/news.svg" alt="" /><p>новости</p></div>
            <div onClick={() => navigate('/music')}><img src="/svg/music.svg" alt="" /><p>музыка</p></div>
            <div onClick={() => navigate('/chat')}><img src="/svg/chat.svg" alt="" /><p>чат</p></div>
            <div onClick={() => navigate('/community')}><img src="/svg/community.svg" alt="" /><p>сообщество</p></div>
            <div onClick={fn}><img src="/svg/dragon.svg" alt="" /><p>направления</p></div>
            <div onClick={() => navigate('/cash')}><img src="/svg/cash.svg" alt="" /><p>расходы</p></div>
            <article className="under-color" style={{ minHeight: '48px' }}>
                <section>
                    <div><p onClick={() => navigate('/well')}>разработчикам</p><p onClick={() => navigate('/well')}>блог</p></div>
                    <div> <p onClick={() => navigate('/well')}>еще</p><p onClick={() => navigate('/well')}>помощь</p></div>
                </section>
            </article>
        </div>
    );
})