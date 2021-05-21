import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import './Components/NewMeme';
import './Components/UserInput';
import './Components/Memes';
import './Components/Captions';
import Header from './Components/Header';
const getRandomNumber = (length) => Math.floor(Math.random() * length);
const getRandomCaption = (length) => Math.floor(Math.random() * length);

class App extends Component {
  constructor() {
    super();
    this.state = {
      captions: [],
      memes: [],
      meme: '',
      caption: '',
      newMemes: [],
    };
  }

  componentDidMount() {
    axios
      .get('/api/captions')
      .then((response) => {
        console.log(response.data);
        this.setState({ captions: response.data });
        this.setRandomCaption();
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get('/api/memes')
      .then((response) => {
        console.log(response.data);
        this.setState({ memes: response.data });
        this.setRandomMeme();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setRandomMeme = () => {
    const index = getRandomNumber(this.state.memes.length);

    this.setState({ meme: this.state.memes[index] });
  };

  setRandomCaption = () => {
    const sentence = getRandomCaption(this.state.captions.length);
    this.setState({ caption: this.state.captions[sentence] });
  };
  saveMeme = () => {
    axios
      .post('/api/newMemes', {
        meme: this.state.meme,
        caption: this.state.caption,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ newMemes: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <main>
        <Header header="MEMERATOR 200" />
        <section className="middle">
          <img className="pics" src={this.state.meme} alt="meme-pic" />

          <h2>{this.state.caption}</h2>

          <input type="text" placeholder="Write Your Own Caption Here!"></input>
          <button>Save Your Caption</button>
        </section>
        <aside className="rightSide">
          <button className="memeButton" onClick={this.setRandomMeme}>
            Get New Image
          </button>
          <button className="saveButton" onClick={this.saveMeme}>
            SAVE
          </button>

          <button className="captionButton" onClick={this.setRandomCaption}>
            Get New Caption
          </button>
        </aside>
        <aside className="leftSide">
          <button id="delete">Delete</button>
          <button id="delete">Delete</button>
          <button id="delete">Delete</button>
          <div id="newMeme">
            <img src alt="saved-meme"></img>
            <h3>caption</h3>
          </div>
          <div id="newMeme">
            <img src alt="saved-meme"></img>
            <h3>caption</h3>
          </div>
          <div id="newMeme">
            <img src alt="saved-meme"></img>
            <h3>caption</h3>
          </div>
        </aside>
      </main>
    );
  }
}

export default App;
