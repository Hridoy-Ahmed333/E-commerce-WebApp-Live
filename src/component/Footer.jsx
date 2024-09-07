import "./Footer.css";
import { TbBrandFacebook } from "react-icons/tb";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer-Container">
      <div className="footer-Container2">
        <div>
          <div className="logo">
            <div className="icon2">
              <div>F</div>
            </div>
            <div className="funi">Furni</div>
            <div className="flex">Flex</div>
          </div>
        </div>
        <div className="left-container">
          <div className="foot-desc">
            <div className="bold">About Us</div>
            <div className="foot-sub-cont">
              <div>Master Plan</div>
              <div>Jobs</div>
              <div>Invest</div>
              <div>Pressroom</div>
              <div>Blog</div>
              <div>Contact</div>
            </div>
          </div>
          <div className="foot-desc">
            <div className="bold">Explore EEVE</div>
            <div className="foot-sub-cont">
              <div>Unlock my robot power</div>
              <div>Starlight</div>
              <div>Robot Platform</div>
              <div>EEVE roadmap</div>
            </div>
          </div>
          <div className="foot-desc">
            {" "}
            <div className="bold">Community & Support</div>
            <div className="foot-sub-cont">
              <div>Willow X Community</div>
              <div>Developer and Mark Access</div>
              <div>Special Classes</div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer-container">
        <div className="footer-box1">
          <div className="icon-box">
            <div>
              <TbBrandFacebook size={20} />
            </div>
            <div>
              <GrInstagram size={20} />
            </div>
            <div>
              <FaXTwitter size={20} />
            </div>
            <div>
              <FaLinkedinIn size={20} />
            </div>
          </div>
          <div className="icon-box2">
            <div>March22 Recap</div>
            <div>Privace Policy</div>
            <div>Genaral Terms</div>
            <div>Contact</div>
          </div>
          <div>United States (English)</div>
        </div>
        <div className="footer-box2">
          <div> EVEE &copy; 2024. All Right Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
