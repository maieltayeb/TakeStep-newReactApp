import React, { Component } from "react";
// import styles from './subcribeCard.module.css';
import "./subscribeCard.css";
import { Col, Container } from "reactstrap";
class SubscribeCard extends Component {
  render() {
    let btnClasses = [];
    let classes = [];
    if (this.props.type === "Plus") {
      classes.push("subscribeCard-card");
      classes.push("subscribeCard-middleCard");

      btnClasses.push("subscribeCardbtnMiddle");
      //  btnClasses.push('subscribeCardbtn');
    } else {
      classes.push("subscribeCard-card");
      btnClasses.push("subscribeCardbtn");
    }
    
  

    return (
      <>
      <div  className={classes.join(" ")}  style={{ padding: " 0px 33px" }}>
          <div className="subscribeCard-top">
            <h3>Free</h3>
            <h1>0.00 $</h1>
             <p>per month</p> 
             </div>
             <hr />
             <div className="subscribeCard-middle">
      
     
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                 Create Untill 5 Free Tasks 
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                      Show  B-Owners  Profiles &nbsp;
                
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                     Rate  Volunteer Proposals
                 
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#000000", paddingRight: "10px" }}
                  ></i>
                    Filter Volunteer Proposals
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#000000", paddingRight: "10px" }}
                  ></i>
               Show  Volunteer  Profiles &nbsp;
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#000000", paddingRight: "10px" }}
                  ></i>
                   Assign Tasks to Volunteer
               
                </div>
           
          </div>
          <div className="subscribeCard-bottom">
            <button className={btnClasses.join(" ")}>
            <a style={{textDecoration:"none",color:"#000000"}} href="/signUp"> Select plan &#8594;</a> 
            </button>
          </div>
     
      </div>
      <div  className=" subscribeCard-card subscribeCard-middleCard"  style={{ padding: " 0px 33px" }}>
          <div className="subscribeCard-top">
            <h3>Plus</h3>
            <h1>99.00 $</h1>
             <p>per month</p> 
             </div>
             <hr />
             <div className="subscribeCard-middle">
      
     
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                 Create Untill 20 Free Tasks 
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                 Show B-Owners  Profiles &nbsp;
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                     Rate  Volunteer Proposals
                 
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                Filter Volunteer Proposals 
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#000000", paddingRight: "10px" }}
                  ></i>
                     Show Volunteer  Profiles &nbsp;
                
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#000000", paddingRight: "10px" }}
                  ></i>
                Assign Tasks to Volunteer
                </div>
           
          </div>
          <div className="subscribeCard-bottom">
            <button className="subscribeCardbtnMiddle">
              Select plan &#8594;
            </button>
          </div>
     
      </div>
      <div  className={classes.join(" ")}  style={{ padding: " 0px 33px" }}>
          <div className="subscribeCard-top">
            <h3>Premium</h3>
            <h1>199.00 $</h1>
             <p>per month</p> 
             </div>
             <hr />
             <div className="subscribeCard-middle">
      
     
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                 Create Untill 50 Free Tasks 
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                     Show B-Owners  Profiles &nbsp;
                
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                     Rate  Volunteer Proposals
                  
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                   Filter Volunteer Proposals
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
               Show Volunteer  Profiles &nbsp;
                </div>
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                  Assign Tasks to Volunteer
                  
                </div>
           
          </div>
          <div className="subscribeCard-bottom">
            <button className={btnClasses.join(" ")}>
              Select plan &#8594;
            </button>
          </div>
     
      </div>
      </>
    );
  }
}

export default SubscribeCard;
