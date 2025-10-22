import { CgProfile } from "react-icons/cg";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const UserMenu = () => {
  return (
    <div>
      <MenuItem
        address={"/dashboard"}
        label={"My Profile"}
        icon={CgProfile}
        size={20}
      ></MenuItem>
    </div>
  );
};

export default UserMenu;
