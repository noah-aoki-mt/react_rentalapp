import React from 'react'

const Add = () => {
    return (
        <div>
            <p>社員番号</p>
            <input type="text" />
            <p>貸出書籍</p>
            <input typpe="text" />
            <p>貸出日</p>
            <input type="date" />
            <p>返却日</p>
            <input type="date" />
            <p>貸出ステータス</p>
            <input type="text" />
        </div>
    )
}

export default Add