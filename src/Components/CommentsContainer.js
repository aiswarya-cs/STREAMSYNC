import React from 'react'
import Comment from './Comment';

const commentsData=[
  {
    name:"@shwetabhat9981",
    text:"That was so cute❤🎉 Congrts  dears🙌",
    replies:[
          {
            name:"@div138947",
            text:"thnks❤",
            replies:[],
          }
    ],
  },
  {
    name:"@Cufylicy_shorts",
    text:"nice video bro, carry on bro",
    replies:[],
  },
  {
    name:"@anjanaplacid2682",
    text:"Bro you just nailed it.....just keep it up we need more projects like this....I request you to please bring API development project and some fullstack project🙏",
    replies:[
      {
        name:"@sangammukherjee3009",
        text:"Thank you, I will",
        replies:[],
      }
    ],
  },
  {
    name:"@abbas__00",
    text:"That was so cute❤🎉 Congrts  dears🙌",
    replies:[],
  },
  {
    name:"@Anukunju9396",
    text:"I felt aswin is an very good person....he is sooo sweet person I noticed through ur vedios...  ❤🎉😊",
    replies:[
      {
        name:" @neetumukundan3020",
        text:"Yes",
        replies:[
                {
                name:"",
                text:"Thank you for 42 subscriber's guys ❤❤❤",
                replies:[
                  {
                    name:"@rahulsingla1710",
                    text:"Bhaiii gajab❤❤❤",
                    replies:[],
                  }
                ]
                },
                {
                  name:"@garima3331",
                  text:"Today I gave a coding assessment and 2 questions were asked from this. Thank you so much 😊",
                  replies:[],
                }
             ]
      }
    ],
  },
  {
    name:"@spillthebuzz",
    text:"Literally i was studying from 2 hour and feeling so ❤❤❤ tired then accidentally come on this playlist ",
    replies:[
      {
        name: "Samat chavan",
        text: "Your voice is totally heart touching ❤😊",
        replies: [],
      },
    ]
    
  },
  {
    name:"@yogeshsabankar",
    text:"jiosdjcfo kjsikca;lscw cjsiockpadxl, jncuisdehfpajnc nd ",
    replies: [
      {
        name: "@Samath",
        text: "Amo suas receitas,e seu estilo de cozinhar tbm!!❤❤😊😊",
        replies: [],
      },
      {
        name: "@Dasappan",
        text: "yes nailed it ",
        replies: [],
      },
      {
        name: "@dineshan",
        text: "its nice ",
        replies: [],
      },
    ],
  },
  {
    name:"@ayothikan",
    text:"anyways good decision...and all the very best wishes u both....may ur relationship ends in a marriage and stay together forever",
    replies:[
      {
        name:"@pappachan",
        text:"ok bro",
        replies:[],
      }
    ]
  }
]

const CommentsList = ({ comments }) => {
  return (
    comments.map((comment,index) => (
    <div className="p-2">
      <Comment key={index} data={comment} />
      
      <div className="pl-5 ml-5 min-w-64 -mt-5 text-gray-950">
      <hr/>
        <CommentsList comments={comment.replies} />
      </div>
      
    </div>
     
  ) ))
}

    
const CommentsContainer = () => {

  return (
    <div className="m-5 -mt-2 p-2 bg-slate-100 max-w-5xl">
      <h1 className='text-2xl font-bold'>Comments:1256</h1>
       <CommentsList comments={commentsData} />
       
    </div>
  )
}



export default CommentsContainer;