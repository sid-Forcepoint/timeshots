import { Users } from "./users";

export const Posts = [
  {
    imageurl:
      "https://assets.gqindia.com/photos/64c2660c55d9445b48560c2f/16:9/pass/Peaky-Blinders-movie.jpg",
    user: Users[0].user,
    likes: 97451,
    caption: "I am the devil of my own world 😈😈",
    profile_picture: Users[0].image,
    comments: [
      {
        user: "siddharth",
        comment: "Loved the show!",
      },
      {
        user: "Samyak",
        comment: "Must Watch!",
      },
      
    ],
  },
  {
    imageurl:
      "https://www.pluggedin.com/wp-content/uploads/2020/08/Lucifer.jpg",
    user: Users[1].user,
    likes: 134661,
    caption:
      "Men Like Us, Mr. Shelby, Will Always Be Alone. And What Love We Get, We Will Have To Pay For. 🤠",
    profile_picture: Users[1].image,
    comments: [
      {
        user: "Ananya",
        comment: "What a humour!",
      },
    ],
  },
  {
    imageurl:
      "https://assets.gqindia.com/photos/64c2660c55d9445b48560c2f/16:9/pass/Peaky-Blinders-movie.jpg",
    user: Users[0].user,
    likes: 197451,
    caption: "By the order of Peaky Blinders",
    profile_picture: Users[0].image,
    comments: [
      {
        user: "siddharth",
        comment: "Loved the show!",
      },
    ],
  },
  {
    imageurl:
      "https://www.pluggedin.com/wp-content/uploads/2020/08/Lucifer.jpg",
    user: Users[1].user,
    likes: 134661,
    caption: "I am the devil of my own world",
    profile_picture: Users[1].image,
    comments: [
      {
        user: "Ananya",
        comment: "What a humour!",
      },
    ],
  },
];
