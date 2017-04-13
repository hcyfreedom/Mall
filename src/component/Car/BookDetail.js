import React from 'react';

const Bookdetail = ({currentBook, addToCar}) => {
    if (!currentBook) return <div className='col-md-4'><h2>选择图书</h2></div>
    return (
        <div className='col-md-4'>
            <h2>图书详情</h2>
            <h3>{currentBook.title}</h3>
            <p>作者:{currentBook.author}</p>
            <p>价格:{currentBook.price}</p>
            <p>编号:{currentBook.id}</p>
            <button onClick={() => addToCar(currentBook)}>
                放进购物车
            </button>
        </div>
    );
};

export default Bookdetail;/**
 * Created by hcy on 2017/4/11.
 */
