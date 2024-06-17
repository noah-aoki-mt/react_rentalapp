import React from 'react'
import { useState } from 'react'

const Add = () => {
    const [employeeName, setEmployeeName] = useState('');
    const [num, setNum] = useState(0);
    const currentDate = new Date();
    const [rentalAt, setRentalAt] = useState('');
    const [returnAt, setReturnAt] = useState('');
    const [status, setStatus] = useState('');


    const handleNamechange = (event) => {
        setEmployeeName(event.target.value);
    }

    const handleCountUp = () => {
        setNum(prevState => prevState + 1)
    }

    const handleCountDown = () => {
        if (num > 1) {
            setNum(prevState => prevState - 1)
        } else {
            alert('貸出書籍がない場合は入力できません')
        }
    }

    const handleRentalAt = (event) => {
        const selectedDate = new Date(event.target.value);
        if (selectedDate >= currentDate) {
            setRentalAt(event.target.value)
        } else {
            alert('過去の日付けは入力できません')
        }
    }

    const handleReturnAt = (event) => {
        const selectedDate = new Date(event.target.value);
        if (selectedDate > new Date(rentalAt)) {
            setReturnAt(event.target.value)
        } else {
            alert('貸出日と同日または過去の日付けは入力できません')
        }
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value)
    }

    const handleAdd = () =>{
        const newData = {
            employeeName : employeeName,
            num : num,
            rentalAt : rentalAt,
            returnAt : returnAt,
            status : status
        };

        console.log("新規データ：",newData)

        setEmployeeName('');
        setNum(0);
        setRentalAt('');
        setReturnAt('');
        setStatus('');
    }
    return (
        <div>
            <p>社員名：{employeeName}</p>
            <input type="text" onChange={handleNamechange} />
            <p>貸出書籍数：{num}</p>
            <button onClick={handleCountUp}>+</button>
            <button onClick={handleCountDown}>-</button>
            <p>貸出日：{rentalAt}</p>
            <input type="date" onChange={handleRentalAt} />
            <p>返却日：{returnAt}</p>
            <input type="date" onChange={handleReturnAt} />
            <p>貸出ステータス：{status}</p>
            <input type="text" onChange={handleStatusChange} />
            <p>
                <button onClick={handleAdd}>保存</button>
            </p>
        </div>
    )
}

export default Add;