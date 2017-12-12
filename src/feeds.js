

import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Tweet from './tweet';


//comments, retweets, love, tweet, avatar, from, time, dm, photo, id


const tilesData = [
  {
    comments: 25,
    retweets: 752,
    love: 1025,
    avatar:'https://pbs.twimg.com/profile_images/853850199609024512/Rjw4RCp7_bigger.jpg',
    from:'ICC',
    time:'4 hours ago',
    dm:4,
    photo:'https://pbs.twimg.com/media/DQ2osAFWkAAesGO.jpg',
    id:'@iccofficial',
    tweet:'The South Africa #U19CWC squad features the son of a legendary fast bowler - can you guess which?'
  },
  {
    comments: 85,
    retweets: 954,
    love: 752,
    avatar:'https://pbs.twimg.com/profile_images/848668042707968001/KSKNpXYt_bigger.jpg',
    from:'Ramesh',
    time:'8 hours ago',
    dm:4,
    photo:'https://pbs.twimg.com/media/DQ2osAFWkAAesGO.jpg',
    id:'@ramesh42',
    tweet:'Hasura lets you build powerful applications FAST⚡️. Get instant backend APIs without writing code + git push to deploy any custom code. The best part: your apps gets built on a cutting edge stack. 2 min'
  },
  
  {
    comments: 32,
    retweets: 35,
    love: 85,
    avatar:'https://pbs.twimg.com/profile_images/854807916838174720/TP2F4BgN_bigger.jpg',
    from:'Kalu Bhalu',
    time:'4 hours ago',
    dm:74,
    photo:'https://pbs.twimg.com/media/DQ2osAFWkAAesGO.jpg',
    id:'@kalubhalu',
    tweet:'Namaskar. Aaj maanneey Sharad Pawar ji ka janamdin hai. Main unko badhaai deti hun.Unki aayu lambi ho aur wo hamesha swasth rahe yehi meri Ishwar se prarthana.'
  },
  
  {
    comments: 954,
    retweets: 654,
    love: 354,
    avatar:'https://pbs.twimg.com/profile_images/862113899230797824/tPyXcqJg_bigger.jpg',
    from:'Khilafat',
    time:'25 hours ago',
    dm:14,
    photo:'https://pbs.twimg.com/media/DQ2osAFWkAAesGO.jpg',
    id:'@deshbhjh',
    tweet:'Grow your business on the go. Learn new skills in minutes with the Digital Skills Training Hub'
  },
  {
    comments: 25,
    retweets: 752,
    love: 963,
    avatar:'https://pbs.twimg.com/profile_images/853850199609024512/Rjw4RCp7_bigger.jpg',
    from:'ICC',
    time:'6 jan',
    dm:85,
    photo:'https://pbs.twimg.com/media/DQ2osAFWkAAesGO.jpg',
    id:'@iccofficial',
    tweet:'On his 36th birthday, watch @YUVSTRONG12s Player of the Match performance to help knock defending champions Australia out of the 2011 @cricketworldcup!'
    
  },
  {
    comments: 147,
    retweets: 582,
    love: 574,
    avatar:'https://pbs.twimg.com/profile_images/3710665744/673fe1a0055ca23bf19e7f3e6de4f089_bigger.png',
    from:'ICC',
    time:'9 jan',
    dm:741,
    photo:'https://pbs.twimg.com/media/DQ2osAFWkAAesGO.jpg',
    id:'@iccofficial',
    tweet:'arry Brook will lead England at next months #U19CWC - check out who will be on the plane to New Zealand for them.'
    
  },
];

const style={
    'padding-top':70,
    width:"60vw",
    'margin-left':"20vw",
    'margin-right':"20vh"
    
    
}

const Feeds = () => (

   

 <div style={style}>
   
     {tilesData.map((tile) => (
     <Tweet comments={tile.comments} id={tile.id} avatar={tile.avatar} love={tile.love} 
     
     tweet={tile.tweet} time={tile.time} dm={tile.dm} from={tile.from} retweets={tile.retweets}
     
     />
     ))}
 </div>
);

export default Feeds;