import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { CgProfile } from "react-icons/cg";
import { FaUsersCog } from "react-icons/fa";
import { MdOutlineAnnouncement } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { RiCoupon2Line } from "react-icons/ri";


const AdminMenu = () => {
    return (
        <div>
            <MenuItem
            address={'/dashboard/admin-profile'}
            label={'Admin Profile'}
            icon={CgProfile}
            size={20}
            ></MenuItem>

            <MenuItem
            address={'/dashboard/manage-member'}
            label={'Manage Members'}
            icon={FaUsersCog}
            size={20}
            ></MenuItem>

            <MenuItem
            address={'/dashboard/make-announcement'}
            label={'Make Announcement'}
            icon={MdOutlineAnnouncement}
            size={20}
            ></MenuItem>

            <MenuItem
            address={'/dashboard/agreement-request'}
            label={'Agreement Request'}
            icon={FaCodePullRequest}
            size={20}
            ></MenuItem>

            <MenuItem
            address={'/dashboard/manage-coupons'}
            label={'Manage Coupons'}
            icon={RiCoupon2Line}
            size={20}
            ></MenuItem>



        </div>
    );
};

export default AdminMenu;