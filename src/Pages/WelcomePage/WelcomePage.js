import React, { Component } from "react";
import SubscribeCardsSection from "./SubscribeCardSections/subscribeCardSection";
import SubscribeCard from "../../Components/Card/SubscribeCard/subscribeCard";
import HowItWorkCard from "../../Components/Card/HowItWorkCard/howitworkcard";
import Footer from "../../Layout/Footer/footer";
// import { Row, Container, Jumbotron } from "reactstrap";
// import WelcomeNavBar from "../../Layout/Navbar/navbar";
import Header from "../../Layout/Header/header";
import Example from "../../Components/Card/InProgressTaskCard/inprogresstaskcard";
import Login from "../LoginPage/login";
import HowITWork from "../../Components/HowToWork/howtowork";

// import SubscribeCardsSection from "./SubscribeCardSections/subscribeCardSection";
import WelcomeNavBar from "../../Layout/Navbar/navbar";

// import Navmai from "../../Layout/ournav";
import NavWelcome from "../../Layout/navWelcome";
import { Container, Row, Jumbotron } from "reactstrap";
// import Header from "../../Layout/Header/header";
import OurCategoeyCard from "../../Components/Card/CategoreyCard/ourCategoryCard";
class WelcomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <NavWelcome />

        <Header />

        {/** ************************************/}

        <Container>
          <h3 className="text-center mt-5">All Categories</h3>
          <Row
            style={{
              marginTop: "47px",
              "margin-left": "14px",
              "justify-content": "center"
            }}
          >
            <OurCategoeyCard name={"Web Development"}  nameTwo={"Mobile Development"}
             description={"Find Web Developers on Take Step ,the leading freelancing website for short-term"}
              descriptionTwo={"Find Mob Developers on Take Step ,the leading freelancing website for short-term"}
              srcc={"/img/computerweb.png "}
              srccc={"/img/mobile.png"}
              />
          </Row>
          <Row
            style={{
              marginTop: "47px",
              "margin-left": "14px",
              "justify-content": "center"
            }}
            className="mb-5"
          >
            <OurCategoeyCard name={"Web & Mobile Design"} nameTwo={"QA & Testing"} 
                      srcc={"/img/mobandcomp.png"}
                      srccc={"/img/setting.png"}
            descriptionTwo={"Find Testers on Take Step ,the leading freelancing website for short-term"}
             description={"Find Web Designers on Take Step ,the leading freelancing website for short-term"} />
          </Row>
        </Container>

        <HowITWork></HowITWork>
        {/*/////////////////mariaaaaaaaaaaam*/}

        {/*/////////////////mariaaaaaaaaaaam*/}
        {/*/////////////////mariaaaaaaaaaaam*/}
        <Container>
          <div>
            <Jumbotron
              fluid
              className="bg-white"
              style={{ marginTop: "108px" }}
            >
              <Container fluid className="text-center ">
                <div
                  className=" m-5  "
                  style={{
                    backgroundColor: "#F0F0F0",
                    border: "none",
                    display: "inline-block",
                    borderRadius: "39px",
                    padding: "10px 25px"
                  }}
                >
                  <p className="m-0 text-warning"> PRICING PLANS</p>
                </div>
                <h1 className="display-5 text-center text-dark">
                  Start your plan
                </h1>
                <p className="lead text-center text-dark">
                   Choose the offering that works best for you,
                you can select among our Subscriptions plans 
                  <br /> 
                  Free , Plus and Premium as shown below .
                
      
                </p>
              </Container>
            </Jumbotron>
          </div>
        </Container>
        {/*/////////////////mariaaaaaaaaaaam*/}
        {/*/////////////////mai*/}
        {/* <Row>
 <SubscribeCard />
 <SubscribeCard />
 <SubscribeCard />
 </Row> */}

        <SubscribeCardsSection />

        {/*/////////////////mai*/}
        {/*/////////////////mariaaaaaaaaaaam*/}
        <Footer></Footer>
        {/*/////////////////mariaaaaaaaaaaam*/}
      </>
    );
  }
}

export default WelcomePage;
