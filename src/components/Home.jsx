import Navbar from "./Navbar";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

//import{AiFillFacebook,AiFillLinkedin,AiOutlineFacebook, AiFillTwitterCircle,AiOutlineGithub} from 'react-icons/ai'

const Home = () => {
  return (
    <div className="">
      <div className="header">
        <div>
          <div className="navigation">
            <Navbar />
          </div>

          <div></div>
          <div className="front">
            <div className="title">
              <h2>Welcome to GiXp Littin recipes</h2>
            </div>
            <div className="font">
              <a href="https://web.facebook.com/gideonkipngeno.ngetich">
                <span>
                  <BsFacebook />
                </span>
                Facebook
              </a>
              <a href="https://twitter.com/gideon_etich">
                <span>
                  {" "}
                  <AiOutlineTwitter />
                </span>
                Twitter
              </a>
              <a href="https://www.instagram.com/kipngenogideon67/">
                <span>
                  <AiOutlineInstagram />
                </span>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
