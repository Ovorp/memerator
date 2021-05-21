const memes = [
  'https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life.jpg?w=1000',
  'https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-2.jpg?w=1000',
  'https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-4.jpg?w=1000',
  'https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-6.jpg?w=1000',
  'https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-19.jpg?w=1000',
  'https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-30.jpg?w=1000',
  'https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-37.jpg?w=979',
  'https://img.youtube.com/vi/oMAn1AXXEu0/maxresdefault.jpg',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amusing-winking-owl-royalty-free-image-1585073811.jpg?crop=1xw:1xh;center,top&resize=980:*',
  'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/35/4000x2666/fox.jpg?resize=980:*',
  'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/35/4000x2666/frogdance.jpg?resize=980:*',
  'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/35/1504106954-monkey.jpg?resize=768:*',
  'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/35/1600x1066/owlfalling.jpg?resize=768:*',
  'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/35/1280x853/gallery-1504105818-seals.jpg?resize=768:*',
];
module.exports = {
  getMemes: (req, res) => {
    res.status(200).send(memes);
  },
};
