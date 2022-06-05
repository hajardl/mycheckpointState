import React, {useState} from 'react';
import './App.css';
import image from "./user.png"
const button= {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "20px",
  textAlign: "center",
  display:" inline-block",
  fontSize: "16px",
  borderRadius:"15px"
}
class App extends React.Component{
  constructor(props) {
   super(props);
   this.state={
    fullName:'Hajar ',
     bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
     profession:"my Profession ",
     imgsrc:image,
     shows:false,
     style:{display:"none"}
   }
 }
    componentDidMount() {
        this.timerID = setInterval(() => this.setState({
            fullName:'HajarDl ',
            bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            profession:"my Profession2 ",
            imgsrc:image,
        }), 1000);
            console.log(this.timerID);
    }


  handleClick=()=> {
      {this.state.shows===false ? this.setState({shows:true, style:{marginLeft:"275px",
              width:" 57em"}}) : this.setState({shows:false, style:{display:"none"}})

      }
  }

  render() {
    return (
<>
    {
        this.state.shows===true ? ( <div style={this.state.style}>
            <span><img style={{height:"148px"}} src={this.state.imgsrc}/></span>
            <h3>
                My Name is : {this.state.fullName}
            </h3>
            <h3>Bio: {this.state.bio}</h3>
            <h3>Profession: {this.state.profession}</h3>

        </div>):("")
    }
    <button style={button}  onClick={this.handleClick}>
        {this.state.shows===true ? "Hide": "Show"}
    </button></>
    );
  }
}


export default App;
