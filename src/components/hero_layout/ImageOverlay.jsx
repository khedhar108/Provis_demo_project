import { LuVideo } from "react-icons/lu";
import { VideoPopup } from "./VideoPopup";

function ImageOverlayHorizontal() {
  return (
    <div className="mx-8 mt-20 shadow-sm h-4/7">
      <div className="container my-xxl">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3 card">
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="card-body">
                    <div className="align-middle" style={{ height: "100%" }}>
                      <h5 className="card-title display-2">
                        Quick & reliable{" "}
                        <span className="text-danger">
                          WareHousing and Logistic
                        </span>{" "}
                        solutions
                      </h5>
                      <p className="card-text">
                        Our team of experts will help you to manage your
                        inventory and deliver your products to your customers on
                        time.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 mx-3 mt-4 mb-1">
                    <button className="btn btn-primary">Join Now</button>
                    <button className="flex gap-1 items-center btn btn-light">
                      <span>
                        <LuVideo />
                      </span>
                      {/* PopUp Video activating by this button */}
                      <VideoPopup />
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="/heroimg.png"
                    alt="hero image"
                    className="img-fluid rounded-start"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageOverlayHorizontal;
