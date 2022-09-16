import React from 'react'
import './Pagination.scss'

const Pagination = ({ page, setPage, totalPage }) => {

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0)
        setPage(nextPage)
    }
    const nextPage = () => {
        const nextPage = Math.max(page + 1, 0)
        setPage(nextPage)
    }

    return (
        <div className='pagination'>
            <a href='#' onClick={() => setPage(lastPage)} className={page === 0 ? 'disabled prev' : 'prev'}>
                <span>&lt;&lt;</span>
            </a>
            <div className='pagination__page'>{page} on {totalPage}</div>
            <a href='#' onClick={() => setPage(nextPage)} className={page === totalPage ? 'disabled next' : 'next'}>
                <span>&gt;&gt;</span>
            </a>
        </div >
    )
}

export default Pagination