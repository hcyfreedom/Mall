import React, { Component } from 'react';

import BookList from './BookList';
import BookDetail from './BookDetail';
import Car from './Car';

class Books extends Component {
    constructor() {
        super()
        this.handleListClick = this.handleListClick.bind(this);
        this.handleAddToCar = this.handleAddToCar.bind(this);

        this.state = {
            currentBook: null,
            car: [],
            totalNum: 0,
            total: 0
        };
    }

    handleListClick(book) {
        this.setState({
            currentBook: book
        });
        console.log(book)
    }

    handleAddToCar(currentBook) {
        let totalNum = this.state.totalNum;
        let car = this.state.car;
        let total = this.state.total;

        let exist = false;

        if (car.length) {
            car.forEach(book => {
                if (book.id === currentBook.id) {
                    book.number += 1;
                    totalNum += 1;
                    exist = true;
                    this.setState({
                        totalNum
                    });
                }
            });
        }

        if (!exist) {
            car = car.concat(Object.assign({}, currentBook, {number:1}));
            totalNum += 1;
            this.setState({
                car,
                totalNum
            });
        }

        total = car.map(book => (book.price * book.number)).reduce((prev, cur) => prev + cur);
        this.setState({
            total
        });
    }

    render() {
        return (
            <div className='row'>
                <BookList books={this.props.books} listClick={this.handleListClick}/>
                <BookDetail currentBook={this.state.currentBook} addToCar={this.handleAddToCar}/>
                <Car {...this.state} />
            </div>
        );
    }
}

Books.defaultProps = {
    books: [
        {
            id: 1,
            category: 'CSS',
            title: 'CSS权威指南',
            author: 'Eric A. Meyer',
            price: 42
        },
        {
            id: 2,
            category: 'JS',
            title: 'JavaScript高级程序设计',
            author: 'Nicholas C.Zakas',
            price: 69
        },
        {
            id: 3,
            category: 'CSS',
            title: '精通CSS:高级Web标准解决方案',
            author: '巴德,科利森,莫尔',
            price: 25
        }
    ]
};

export default Books;