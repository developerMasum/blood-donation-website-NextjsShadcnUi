import { USER_ROLE } from "@/constants/role";
import { ISidebarItem, UserRole } from "@/types";

import { UserCog } from "lucide-react";

import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  Container,
  KeySquare,
  FileKey,
} from "lucide-react";

export const drawerItems = (role: UserRole): ISidebarItem[] => {
  // console.log(role);
  const roleMenus: ISidebarItem[] = [];
  const defaultMenus = [
    {
      title: "Change Password",
      path: `change-password`,
      icon: FileKey,
    },
  ];
  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Home,
        },
        {
          title: "User Management",
          path: `${role}/user-management`,
          icon: Users,
        },
        {
          title: "Blood Requests",
          path: `${role}/requests`,
          icon: UserCog,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: UserCog,
        },
        {
          title: "My Blood Requests",
          path: `${role}/my-requests`,
          icon: UserCog,
        }
      );

      break;
    case USER_ROLE.DONOR:
      roleMenus
        .push
        // {
        //   title: "Dashboard",
        //   path: `${role}`,
        //   icon: UserCog,
        // }
        // {
        //   title: "Got Blood Requests",
        //   path: `${role}/got-requests`,
        //   icon: UserCog,
        // }
        ();

      break;
    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
