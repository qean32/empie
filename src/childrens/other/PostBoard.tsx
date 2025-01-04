import React, { useRef } from 'react'
import useDinamickPagination from '../../customHooks/useDinamickPagination'
import { DftPost } from '../../pages/main/news'
import { POSTServices } from '../../services/POSTServices'
import { useParams } from 'react-router'

interface Props {
    className?: string
}


export const PostBoard: React.FC<Props> = () => {
    const scrollRef: any = useRef()
    const params = useParams()
    const posts: any = useDinamickPagination(() => POSTServices.GETPost(posts.offset, params.iddirection), scrollRef, ['post'], 4, 1)

    return (
        <>
            {posts && posts.finaldata.map((item: any) => (
                <DftPost key={item.id} item={item} />
            ))}
            <div ref={scrollRef} className="scrollhandlerref"></div>
        </>
    )
}