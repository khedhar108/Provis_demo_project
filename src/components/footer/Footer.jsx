import { RiFacebookCircleFill } from "react-icons/ri";
import { FaGooglePlus } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-4 mt-8 bg-blue-800 container-fluid text-light">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <h5 className="mb-2 display-5">
            Ship<span className="text-danger">Up</span>
          </h5>
          <p>
            ShipUp delivers an unparalled customer service through dedicated
            customer team.
          </p>
        </div>

        <div className="col-lg-3 col-md-6">
          <h5 className="mb-2 display-5">Explore</h5>
          <p>About</p>
          <p>Our WareHouses</p>
          <p>Blog</p>
          <p>News and Media</p>
        </div>

        <div className="col-lg-3 col-md-6">
          <h5 className="mb-2 display-5">Legal</h5>
          <p>Teams</p>
          <p>Privacy</p>
        </div>

        <div className="col-lg-3 col-md-6">
          <h5 className="mb-2 display-5">Social Media</h5>
          <div className="flex-row gap-4 d-flex social-media-links">
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

      <hr />

      <div className="my-1 text-center">
        Ship <span className="text-danger">Up</span>
      </div>
    </footer>
  );
}

export default Footer;
