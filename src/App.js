import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Search from './components/Search';
import TopArticle from './components/TopArticle';
import ContentBlog from './components/ContentBlog';
import OneRow from './components/OneRow'

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Search />
            <OneRow />
            {/* <TopArticle />
            <ContentBlog /> */}
            {/* <Gallery /> */}
            <Footer />
            {/* <ContactUs /> */}
        </div>
    );
  }
}

export default App;