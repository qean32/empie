import { memo } from "react";
import { useNavigate } from "react-router";


export const LeftPanel = memo(({ function_ }: { function_: Function }) => {
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
                    <div><p onClick={() => navigate('/wall')}>разработчикам</p><p onClick={() => navigate('/wall')}>блог</p></div>
                    <div> <p onClick={() => navigate('/wall')}>еще</p><p onClick={() => navigate('/wall')}>помощь</p></div>
                </section>
            </article>
        </div>
    );
})