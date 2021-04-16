import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import "./Components/NewMeme";
import "./Components/UserInput";
import "./Components/Memes";
import "./Components/Captions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      captions: [],
      memes: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/captions")
      .then((response) => {
        console.log(response.data);
        this.setState({ captions: response.data });
      })
      .catch();
    axios
      .get("/api/memes")
      .then((response) => {
        console.log(response.data);
        this.setState({ memes: response.data });
      })
      .catch();
  }
  render() {
    return (
      <main>
        <header>
          <h1>MEMERATOR 2000</h1>
        </header>

        {this.state.memes.map((meme) => {
          return (
            <section className="images">
              <img src={meme} alt="meme-pic" />
            </section>
          );
        })}
        {this.state.captions.map((caption) => {
          return (
            <section className="captions">
              <h2>{caption}</h2>
            </section>
          );
        })}
        <input type="text" placeholder="Write Your Own Caption Here!"></input>
        <button>Save Your Caption</button>
        <aside className="rightSide">
          <button className="memeButton">Get New Image</button>
          <button className="captionButton">Get New Caption</button>
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
