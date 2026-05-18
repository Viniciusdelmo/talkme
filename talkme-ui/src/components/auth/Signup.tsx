import { Link } from "react-router-dom";
import { Link as MUIlink } from "@mui/material";
import Auth from "./Auth";

const Signup = () => {
  return (
    <>
      <Auth submitLabel="Signup" onSubmit={async () => {}}>
        <Link to={"/login"} style={{ alignSelf: "center"}}>
          <MUIlink>Login Page</MUIlink>
        </Link>
      </Auth>
    </>
  );
};

export default Signup;
