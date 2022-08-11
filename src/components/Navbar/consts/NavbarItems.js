import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import DashIcon from '@mui/icons-material/Dashboard';
import StaffIcon from '@mui/icons-material/Workspaces';
import CallsIcon from '@mui/icons-material/Call';
import CustomersIcon from '@mui/icons-material/People';

const NavbarItems = [
  {
    id: '1',
    icon: <AdminIcon />,
    label: 'Administrator',
    route: 'administrator',
  },
  {
    id: '2',
    icon: <DashIcon />,
    label: 'Dashboard',
    route: 'dashboard',
  },
  {
    id: '3',
    icon: <StaffIcon />,
    label: 'Staff',
    route: 'staff',
  },
  {
    id: '4',
    icon: <CallsIcon />,
    label: 'Calls',
    route: 'calls',
  },
  {
    id: '5',
    icon: <CustomersIcon />,
    label: 'Customers',
    route: 'customers',
  },
];

export default NavbarItems;
