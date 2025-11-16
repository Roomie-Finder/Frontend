import { FiLogOut } from "react-icons/fi";
import { LuBedDouble } from "react-icons/lu";
import { FaCheck, FaLaptopHouse } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillHousesFill } from "react-icons/bs";
import { IoHome, IoLanguage, IoWifiOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import {
  HiMiniCheckBadge,
  HiOutlineBriefcase,
  HiUser,
  HiUserPlus,
  HiUsers,
} from "react-icons/hi2";

export const HomeIcon = ({ className = "size-6" }) => {
  return <IoHome className={className} />;
};

export const RegisterIcon = ({ className = "size-6" }) => {
  return <HiUserPlus className={className} />;
};

export const LogOutIcon = ({ className = "size-6" }) => {
  return <FiLogOut className={className} />;
};

export const ProfileIcon = ({ className = "size-6" }) => {
  return <HiUser className={className} />;
};

export const RoomsIcon = ({ className = "size-6" }) => {
  return <BsFillHousesFill className={className} />;
};

export const InfoIcon = ({ className = "size-6" }) => {
  return <TbInfoSquareRoundedFilled className={className} />;
};

export const CheckBadgeIcon = ({ className = "size-6 text-violet-700" }) => {
  return <HiMiniCheckBadge className={className} />;
};

export const LocationIcon = ({ className = "size-6" }) => {
  return <FaLocationDot className={className} />;
};

export const ImageIcon = ({ className = "size-6" }) => {
  return <FaImage className={className} />;
};

export const BedIcon = ({ className = "" }) => {
  return <LuBedDouble className={className} />;
};
export const PeopleIcon = ({ className = "size-6" }) => {
  return <HiUsers className={className} />;
};

export const CalenderIcon = ({ className = "size-6" }) => {
  return <MdOutlineCalendarToday className={className} />;
};

export const CheckIcon = ({ className = "size-6" }) => {
  return <FaCheck className={className} />;
};

export const BriefCaseIcon = ({ className = "size-6" }) => {
  return <HiOutlineBriefcase className={className} />;
};

export const LangaugeIcon = ({ className = "size-6" }) => {
  return <IoLanguage className={className} />;
};

export const WFHIcon = ({ className = "" }) => {
  return <FaLaptopHouse className={className} />;
};

export const CloseIcon = ({ className = "size-3" }) => {
  return <IoClose className={className} />;
};
