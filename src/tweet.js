import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
 //Tweet{
  // in top avtar,from, id, time,
  // in middle tweet, photo(if there)
  // in bottom <comments, retweets, Likes, Direct Message>
//}


class Top extends React.Component{

  

    render(){
        return       <div> "ramus";
  {this.props.pic+this.props.from+this.props.id+this.props.time}</div>;
    }
    }
    
    class Bottom extends React.Component{
        constructor()
        {
            super();
        }
    render(){
        return "";
    }
    }
    
    class Middle extends React.Component{
        render(){
            return "Ramu"+this.props.tweet;
        }
    }

class Tweet extends React.Component{

  


    render()
    {

        const style={
            width:"60vw",
            //'margin-left':"20vw",
            //'margin-right':"20vh"
        }

        const stylet={
            color:'#5D6D7E'
        }

       return <Card style={style} align="left">
        <CardHeader margin="0" padding="0"
          title={this.props.from||'from'}
          subtitle={this.props.id||"id"}
          avatar={this.props.avatar||"ramu"}
          containerStyle={{
            'margin':"0vw",
            'padding':'0',
            width:'70vw',
            left:0
          }
          }
        />
      
        <CardTitle title={this.props.tweet||"tweet"} subtitle={this.props.time||"time"} />
        <CardActions>
          <FlatButton label={"comment "+"0"||this.props.comments} style={stylet}/>
          <FlatButton label={"Retweet "+"0"||this.retweets} style={stylet}/>
          <FlatButton label={"like "+"0"||this.props.love} style={stylet}/>
          <FlatButton label={"Direct Message "+"0"||this.props.dm} style={stylet}/>
        </CardActions>
      </Card>}
}

export default Tweet;