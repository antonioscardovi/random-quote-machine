import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import quotes from './quotes'

// const { motion, useMotionValue } = Motion;
// import { motion } from "https://cdn.skypack.dev/framer-motion"

class QuoteBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      quotes: quotes,
      test: 'Random Quote'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  
  handleClick() {
    this.setState((state) => {
      let newIndex = Math.floor(Math.random() * 10);
      while(this.state.index === newIndex) {
        newIndex = Math.floor(Math.random() * 10)
      }
      return { index: newIndex }
    })
  }
  
  render() {
    return(
      <div id="container">
        <div id="quote-box">
          <h1 id="text"><i class="fas fa-quote-left"></i> {this.state.quotes[this.state.index].quote}</h1>
          <p id="author">- {this.state.quotes[this.state.index].author}</p>
          <div id="actions">
          <a href="twitter.com/intent/tweet" id="tweet-quote"><i class="icon fab fa-twitter fa-lg"></i></a>
          <button id="new-quote" onClick={this.handleClick}>New quote</button>
          </div>
            </div>
          
        <p>by <a href="https://github.com/antonioscardovi" id='git-link' rel="noreferrer" target="_blank">antonioscardovi</a></p>
      </div>
    )
  }
}


ReactDOM.render(<QuoteBox />, document.querySelector("#app"))