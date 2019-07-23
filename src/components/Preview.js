import React,{Component} from 'react';
import {
    
CardActions,Button,CardMenu,IconButton,Card,CardTitle,CardText} from "react-mdl";
import {Grid,Cell} from 'react-mdl';

    class Preview extends Component{
    render(){
        return(
            

            <div style={{ height: "300px", position: "relative" }}>
                <p> 
                <div className="preview-text">
                            <h1>
                                Here is the posted CVs.
                                </h1>  </div>

                </p>
                <Grid className="preview-grid">
                             

<Card shadow={0} style={{width: '220px', margin: 'auto'}}>
    
    <CardTitle style={{ height: '176px', background: 'url(https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/032_girl_avatar_profile_woman_blouse-512.png) center / cover'}}></CardTitle>
    <CardText>
        Name: Hind Alayed.<br></br>Major: CS. <br></br>University: Qassim.
    </CardText>
    <CardActions border>
        <Button colored><a href="#">Preview the CV</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
</Card>

<Card shadow={0} style={{width: '220px', margin: 'auto'}}>
    <CardTitle style={{ height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/professions-1-1/128/14-512.png) center / cover'}}></CardTitle>
    <CardText>
        Name:Mohammed Alhomaidi.<br></br>Major: IT.<br></br>University: --.
    </CardText>
    <CardActions border>
        <Button colored><a href="#">Preview the CV</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
</Card>


<Card shadow={0} style={{width: '220px', margin: 'auto'}}>
    <CardTitle style={{ height: '176px', background: 'url(https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/032_girl_avatar_profile_woman_blouse-512.png) center / cover'}}></CardTitle>
    <CardText>
        Name: Zahra Alowisheer.<br></br>Major: BME.<br></br>University: KFU.
    </CardText>
    <CardActions border>
        <Button colored><a href="#">Preview the CV</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
</Card>





<Card shadow={0} style={{width: '220px', margin: 'auto'}}>
    <CardTitle style={{ height: '176px', background: 'url(https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/032_girl_avatar_profile_woman_blouse-512.png) center / cover'}}></CardTitle>
    <CardText>
        Name: <br></br>Major:<br></br>University: 
    </CardText>
    <CardActions border>
        <Button colored><a href="#">Preview the CV</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
</Card>
</Grid>
</div>

                 
                )
    }
}
export default Preview;