import React, { Component } from "react";

export class LikeButton extends Component<{}, {likes:number, msg:string}>{
    //create the state inside the constructor
    constructor(props:any){
        super(props)
        this.state = {likes:0, msg:'You have '}
    }
    public updateLikes(){
        //this.setState((p)=>{})
        this.setState((prevState)=>{return{likes: prevState.likes+1}})
    }

    render(): React.ReactNode{
        return(
            <button onClick={()=>this.updateLikes()}>{this.state.msg} {this.state.likes} 👍</button>
        )
    }
}