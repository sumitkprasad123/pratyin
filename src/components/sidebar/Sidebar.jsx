import React, { useState } from 'react'
import "./sidebar.scss";
import GridViewIcon from '@mui/icons-material/GridView';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'; 
import DescriptionIcon from '@mui/icons-material/Description';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TodayIcon from '@mui/icons-material/Today';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories'; 
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import NoteIcon from '@mui/icons-material/Note';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BarChartIcon from '@mui/icons-material/BarChart';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FeedIcon from '@mui/icons-material/Feed';
import TableViewIcon from '@mui/icons-material/TableView';
import CodeIcon from '@mui/icons-material/Code';

import Sidemenu from '../sidebar menu/Sidemenu';

const sidebardata = [
   {
     "menuTitle":"Main Menu",
     "data":[
                {
                    icone:<GridViewIcon/>,
                    title:"Dashboard",
                    subTitle:["Admin Dashboard","Teacher Dashboard","Student Dashboard"]
                },
                {
                    icone:<SchoolIcon/>,
                    title:"Students",
                    subTitle:["Student List","Student View","Student Add","Student Edit"]
                },
                {
                    icone:<CastForEducationIcon/>,
                    title:"Teachers",
                    subTitle:["Teacher List","Teacher View","Teacher Add","Teacher Edit"]
                },
                {
                    icone:<ApartmentIcon/>,
                    title:"Departments",
                    subTitle:["Departments List","Departments Add","Departments Edit"]
                },
                {
                    icone:<LocalLibraryIcon/>,
                    title:"Subjects",
                    subTitle:["Subjects List","Subjects Add","Subjects Edit"]
                },
                {
                    icone:<DescriptionIcon/>,
                    title:"Invoices",
                    subTitle:["Invoices List","Invoices Grid","Add Invoices","Edit Invoices","Invoices Details","Invoices Setting"]
                }
            ],
       },
       {
        "menuTitle":"Management",
        "data":[
            {
                icone:<ContactPageIcon/>,
                title:"Accounts",
                subTitle:["Fees Collection","Expenses","Salary","Add Fee","Add Expenses","Add Salary"]
            },
            {
                icone:<WaterfallChartIcon />,
                title:"Holiday",
                subTitle:[]
            },
            {
                icone:<ReviewsIcon/>,
                title:"Fees",
                subTitle:[]
            },
            {
                icone:<ReceiptLongIcon/>,
                title:"Exam list",
                subTitle:[]
            },
            {
                icone:<TodayIcon/>,
                title:"Events",
                subTitle:[]
            },
            {
                icone:<CalendarViewMonthIcon/>,
                title:"Time Table",
                subTitle:[]
            },
            {
                icone:<BookIcon/>,
                title:"Library",
                subTitle:[]
            },
            {
                icone:<AutoStoriesIcon/>,
                title:"Blogs",
                subTitle:["All Blogs","Add Blog","Edit Blog"]
            },
            {
                icone:<SettingsIcon/>,
                title:"Settings",
                subTitle:[]
            }
         ],
      },
      {
        "menuTitle":"Pages",
        "data":[
            {
                icone:<SecurityIcon />,
                title:"Authentication",
                subTitle:["Login","Register","Forgot Password","Error Page"]
            },
            {
                icone:<NoteIcon/>,
                title:"Blank Page",
                subTitle:[]
            }
        ],
     },
     {
        "menuTitle":"Others",
        "data": [
            {
                icone:<SportsBaseballIcon/>,
                title:"Sports",
                subTitle:[]
            },
            {
                icone:<DomainAddIcon/>,
                title:"Hostel",
                subTitle:[]
            },
            {
                icone:<DirectionsSubwayIcon/>,
                title:"Transport",
                subTitle:[]
            }
        ],
    },
    {
    "menuTitle":"UI Interface",    
    "data":[
        {
            icone:<CloudDoneIcon/>,
            title:"Base UI",
            subTitle:["Alerts",
                    "Accordions",
                    "Avatar",
                    "Badges",
                    "Buttons",
                    "Button Group",
                    "Breadcrumb",
                    "Cards",
                    "Carousel",
                    "Dropdowns",
                    "Grid",
                    "Images",
                    "Lightbox",
                    "Media",
                    "Modals",
                    "Offcanvas",
                    "Pagination",
                    "Popover",
                    "Progress Bars",
                    "Placeholders",
                    "Range Slider",
                    "Spinner",
                    "Sweet Alerts",
                    "Tabs",
                    "Toasts",
                    "Tooltip",
                    "Typography",
                    "Video"
                ]
            },
            {
                icone:<ViewInArIcon/>,
                title:"Elements",
                subTitle:["Ribbon","Clipboard","Drag & Drop","Rating","Text Editor","Counter","Scrollbar","Notification","Sticky Note","Timeline","Horizontal Timeline","Form Wizard"]
            },
            {
                icone:<BarChartIcon/>,
                title:"Charts",
                subTitle:["Apex Charts","Chart Js","Morris Charts","Flot Charts","Peity Charts","C3 Charts"]
            },
            {
                icone:<WorkspacePremiumIcon/>,
                title:"Icons",
                subTitle:["Fontawesome Icons","Feather Icons","Ionic Icons","Material Icons","Pe7 Icons","Simpleline Icons","Themify Icons","Weather Icons","Typicon Icons","Flag Icons"]
            },
            {
                icone:<FeedIcon/>,
                title:"Forms",
                subTitle:["Basic Inputs","Input Groups","Horizontal Form","Vertical Form","Form Mask","Form Validation"]
            },
            {
                icone:<TableViewIcon/>,
                title:"Tables",
                subTitle:["Basic Tables","Data Table"]
            },
            {
                icone:<CodeIcon/>,
                title:"Multi Level",
                subTitle:["Level 1","Level 2"]
            },   
        ]
    },
] 



const Sidebar = () => {
const [menu,setMenu] = useState("Dashboard");
const [active, setActive] = useState("1Admin Dashboard1")

const handleTitle = (item1,item2) => {
    setMenu(item1)
    setActive(item2)
 }

const handleMenu = (title) => {
    console.log(title)
    setActive("")
    setMenu(title)
 }

  return (
    <div className="side_container">
      <div className="sidebar" >

        { 
          sidebardata.map((menu_data,index) => {
            return (
                <div key={index} className="side_menu">
                    <span  className="sidebar_menu_title">{menu_data.menuTitle}</span>
                    <Sidemenu 
                       data={menu_data.data}
                       handleTitle={handleTitle}
                       handleMenu={handleMenu}
                       menu={menu}
                       active={active}
                     />
                </div>
            )
          })
        }
       
      </div>
    </div>
  )
}

export default Sidebar