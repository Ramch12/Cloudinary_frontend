import {Button } from "@mui/material";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="my-2">
      <ul className="flex text-xl justify-end">
      <Link to="/"><Button variant="contained" sx={{marginX:"20px"}}><li >UploadFile</li></Button></Link>
      <Link to="/fetch"><Button variant="contained"><li >ListAllData</li></Button></Link>
      </ul>
    </div>
  );
};

export default Navbar;
