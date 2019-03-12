import React, { Component } from 'react';
import axios from 'axios';
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
import OneRow from './components/OneRow';

const urlHeadline = 'https://newsapi.org/v2/top-headlines?' + 'country=id&' + 'apiKey=66cd3036f20e42b199d9335f9283b88e';
const urlEverything = 'https://newsapi.org/v2/everything?' + 'q=manchester united&' + 'apiKey=66cd3036f20e42b199d9335f9283b88e';


class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            listNews : [],
            listTopNews: []
        };
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const self = this;
        axios
            .get(urlEverything)
            .then(function(response) {
                self.setState({ listNews: response.data.articles });
                // console.log(response.data);
            })
            .catch(function(error) {
               console.log(error); 
            });

        axios
            .get(urlHeadline)
            .then(function(response) {
                self.setState({ listTopNews: response.data.articles });
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    handleChange(e) {
        this.doSearch(e.target.value);
    }

    doSearch(keyword) {
        const self = this;
        const urlSearch = 'https://newsapi.org/v2/everything?' + 'q=' + keyword + '&apiKey=66cd3036f20e42b199d9335f9283b88e';
        axios
            .get(urlSearch)
            .then(function(response) {
                self.setState({ listNews: response.data.articles });
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    render() {
        const { listNews, listTopNews } = this.state;
        return (
            <div>
                <Header />
                <Search handleChange = { this.handleChange }/>
                <OneRow listNews = {listNews} listTopNews = {listTopNews} />
                {/* <TopArticle /> */}
                {/* <ContentBlog /> */}
                {/* <Gallery /> */}

                <Footer />
                {/* <ContactUs /> */}
            </div>
        );
    }
}

export default App;