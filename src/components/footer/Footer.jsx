import { RiFacebookCircleFill } from "react-icons/ri";
import { FaGooglePlus } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="py-4 mt-8 bg-blue-800 container-fluid text-light">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <h5 className="mb-2 display-5">
            Ship<span className="text-danger">Up</span>
          </h5>
          <p>
            ShipUp delivers an unparalled customer serive through dedicated
            customer team.
          </p>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5 className="mb-2 display-5">Explore</h5>
          <p>About</p>
          <p>Our WareHouses</p>
          <p>Blog</p>
          <p>News and Media</p>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5 className="mb-2 display-5">Legal</h5>
          <p>Teams</p>
          <p>Privacy</p>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5 className="mb-2 display-5">Social Media</h5>
          <div className="flex flex-row gap-4 social-media-links">
            <div className="w-4 h-4 social-media-link">
              <a href="#">
                <span className="social-media-icon">
                  <RiFacebookCircleFill />
                </span>
              </a>
            </div>
            <div className="w-4 h-4 social-media-link">
              <a href="#">
                <span className="social-media-icon">
                  <FaGooglePlus />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="flex justify-center my-1">
        Ship <span className="text-danger">Up</span>{" "}
      </div>
    </footer>
  );
}

export default Footer;
