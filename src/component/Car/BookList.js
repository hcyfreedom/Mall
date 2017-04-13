/**
 * Created by hcy on 2017/4/11.
 */
import React from 'react';

const BookList = ({books, listClick}) => {
    return (
        <div className='col-md-2'>
            <h2>图书列表</h2>
            <ul>
                {books.map((book) => {
                    return (
                        <li key={book.id} onClick={() => listClick(book)}>
                            {book.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default BookList;