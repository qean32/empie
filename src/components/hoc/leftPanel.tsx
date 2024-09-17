type Props = {

}
export const LeftPanel = ({ }: Props) => {
    return (
        <div className="leftpanel">
            <div><img src="/svg/news.svg" alt="" /><p>новости</p></div>
            <div><img src="/svg/music.svg" alt="" /><p>музыка</p></div>
            <div><img src="/svg/chat.svg" alt="" /><p>чат</p></div>
            <div><img src="/svg/community.svg" alt="" /><p>сообщество</p></div>
            <div><img src="/svg/dragon.svg" alt="" /><p>направления</p></div>
            <div><img src="/svg/cash.svg" alt="" /><p>расходы</p></div>
            <article className="under-color" style={{ minHeight: '48px' }}>
                <section>
                    <div><p>разработчикам</p><p>блог</p></div>
                    <div> <p>еще</p><p>помощь</p></div>
                </section>
            </article>
        </div>
    );
}