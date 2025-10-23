import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { RiSecurePaymentLine } from "react-icons/ri";


const MemberMenu = () => {
  return (
    <div>
      <MenuItem
        address={"/dashboard/member-profile"}
        label={"My Profile"}
        icon={CgProfile}
        size={20}
      ></MenuItem>

      <MenuItem
        address={"/dashboard/make-payment"}
        label={"Make Payment"}
        icon={MdPayment}
        size={20}
      ></MenuItem>

      <MenuItem
      address={"/dashboard/payment-history"}
      label={"Payment History"}
      icon={RiSecurePaymentLine}
      size={20}
      ></MenuItem>

      
    </div>
  );
};

export default MemberMenu;
