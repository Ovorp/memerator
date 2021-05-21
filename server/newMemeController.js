let newMemes = [];

// [{id:1, meme: dog caption: 'look at me'}]
let id = 0;

module.exports = {
  newMemes: (req, res) => {
    const { meme, caption } = req.body;

    const userCreated = {
      meme,
      caption,
      id,
    };

    if (newMemes.length < 3) {
      id++;
      newMemes.push(userCreated);
    }

    res.status(200).send(newMemes);
  },

  // [{id:1, meme: dog caption: 'look at me'}]

  changeCaption: (req, res) => {
    const { id, caption } = req.body;
    console.log(id, caption);
    newMemes.forEach((val, i) => {
      if (+id === val.id) {
        newMemes[i].caption = caption;
      }
    });
    res.status(200).send(newMemes);
    // for (let i = 0; i < newMemes.length; i++) {
    //   if (id === id) {
    //     return (caption.req.body = userInput);
    //   }
    // }
  },

  deleteMeme: (req, res) => {
    const { id } = req.params;
    //id will be the index of the newMemes array that we will delete.
    const filtedNewMemes = newMemes.filter((val) => val.id !== +id);
    newMemes = filtedNewMemes;
    // id= ""

    res.status(200).send(filtedNewMemes);
  },
  getMemeList: (req, res) => {
    res.status(200).send(newMemes);
  },
};
