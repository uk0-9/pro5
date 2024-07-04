import { useContext } from "react";
import { Link } from "react-router-dom";
import { Usar } from "../../../context/usar";



const Profile = () => {
  const usar =useContext(Usar)
  const usar_data = usar.usar_data
  return (<>
    <div className={`profile-page `} style={{ marginTop: "-1%" }}>
      <div className="content" style={{ }}>
        <div className="content__cover">
          <img
            src={require("../../../imgs/geranimo-WJkc3xZjSXw-unsplash.jpg")}
            alt="img"
            className="content__avatar"
          ></img>
        </div>
        <div className="content__title">
          <h1>{usar_data.name}{" "}<Link to="#"><img src={require("../../../imgs/pencil (4).png")} width="40px"height="40px" alt="Settings"/></Link></h1>
          <span>{usar_data.email}</span>
        </div>

        <div className=" mt-3   order-3">
          <div className="button_selikt  ">
            <Link className=" text-decoration-none text-dark" to="#">
              <div className="w-100 mb-2 d-flex align-content-center justify-content-between mt-1 content__actions3">
                <span>
                Settings{" "}
                <img src={require("../../../imgs/Settings.png")} width="30px"height="30px" alt="Settings"/>
                </span>
                <span className=" me-1"></span>
              </div>
            </Link>
          </div>
          <div className="button_selikt  ">
            <Link className=" text-decoration-none text-dark" to="/favorite">
              <div className="w-100 mb-2 d-flex align-content-center justify-content-between mt-1">
                <span>
                Favorite{" "}
                  <img src={require("../../../imgs/Favorite.png")} width="30px"height="30px" alt="Settings"/>
                </span>
                <span className=" me-1  mt-1">15</span>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
    <br/>
    <br/>
    <br/>
    </>
  );
};

export default Profile;
