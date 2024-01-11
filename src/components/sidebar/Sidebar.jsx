import React from 'react'
import "./sidebar.scss";
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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



import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
const Sidebar = () => {

  

  return (
    <div className="side_container">
      <div className="sidebar">
         <span className="sidebar_menu_title">Main Menu</span>

         {/* <div className="sidebar_submenu">
             <GridViewIcon className='logo'/>
             <div className="sidebar_content">
                 <span className="sidebar_title">Dashboard</span>
                 <KeyboardArrowRightIcon className='sidebar_icon'/>
             </div>
         </div> */}
          <Accordion
            sx={{
              
              // borderRadius: '8px',
              marginBottom: '8px',
              '&:hover': {
                // backgroundColor: '#f0f0f0',
              },
            }}
          >
          <AccordionSummary
            sx={{
              // backgroundColor: '#ddd',
            }}
            expandIcon={<ExpandMoreIcon />}
          >
         <div className="sidebar_submenu">
             <GridViewIcon className='logo'/>
             <div className="sidebar_content">
                 <span className="sidebar_title">Dashboard</span>
                 {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
             </div>
         </div>
         </AccordionSummary>
         <AccordionDetails 
         sx={{
          padding: '16px',
        }}>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </AccordionDetails>
      </Accordion>
         {/* ---------- */}
         {/* <div>
         <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Accordion 1</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </AccordionDetails>
      </Accordion>
        
          </div> */}
   

{/* ------------------- */}
         <div className="sidebar_submenu">
             <SchoolIcon className='logo'/>
             <div className="sidebar_content">
                 <span className="sidebar_title">Students</span>
                 <KeyboardArrowRightIcon className='sidebar_icon'/>
             </div>
         </div>
         
         <div className="sidebar_submenu">
             <CastForEducationIcon className='logo'/>
             <div className="sidebar_content">
                 <span className="sidebar_title">Teachers</span>
                 <KeyboardArrowRightIcon className='sidebar_icon'/>
             </div>
         </div>
         
         <div className="sidebar_submenu">
             <ApartmentIcon className='logo'/>
             <div className="sidebar_content">
                 <span className="sidebar_title">Departments</span>
                 <KeyboardArrowRightIcon className='sidebar_icon'/>
             </div>
         </div>
         
         <div className="sidebar_submenu">
             <LocalLibraryIcon className='logo'/>
             <div className="sidebar_content">
                 <span className="sidebar_title">Subjects</span>
                 <KeyboardArrowRightIcon className='sidebar_icon'/>
             </div>
         </div>
         
         <div className="sidebar_submenu">
             <DescriptionIcon className='logo'/>
             <div className="sidebar_content">
                 <span className="sidebar_title">Invoices</span>
                 <KeyboardArrowRightIcon className='sidebar_icon'/>
             </div>
         </div>
         {/* --- */}
         <span className="sidebar_menu_title">Management</span>

        <div className="sidebar_submenu">
            <ContactPageIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Accounts</span>
                <KeyboardArrowRightIcon className='sidebar_icon'/>
            </div>
        </div>

        <div className="sidebar_submenu">
            <WaterfallChartIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Holiday</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>

        <div className="sidebar_submenu">
            <ReviewsIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Fees</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>

        <div className="sidebar_submenu">
            <ReceiptLongIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Exam list</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>

        <div className="sidebar_submenu">
            <TodayIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Events</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>

        <div className="sidebar_submenu">
            <CalendarViewMonthIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Time Table</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>
        
        <div className="sidebar_submenu">
            <BookIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Library</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>
        
        <div className="sidebar_submenu">
            <AutoStoriesIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Blogs</span>
                <KeyboardArrowRightIcon className='sidebar_icon'/>
            </div>
        </div>
        
        <div className="sidebar_submenu">
            <SettingsIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Settings</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>
        {/* ------ */}
        <span className="sidebar_menu_title">Pages</span>

         <div className="sidebar_submenu">
             <SecurityIcon className='logo'/>
             <div className="sidebar_content">
                 <span className="sidebar_title">Authentication</span>
                 <KeyboardArrowRightIcon className='sidebar_icon'/>
             </div>
         </div>

         <div className="sidebar_submenu">
             <NoteIcon className='logo'/>
             <div className="sidebar_content">
                 <span className="sidebar_title">Blank Pages</span>
                 {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
             </div>
         </div>
         {/* ------ */}
        <span className="sidebar_menu_title">Others</span>

        <div className="sidebar_submenu">
            <SportsBaseballIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Sports</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>

        <div className="sidebar_submenu">
            <DomainAddIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Hostel</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>
        
        <div className="sidebar_submenu">
            <DirectionsSubwayIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Transport</span>
                {/* <KeyboardArrowRightIcon className='sidebar_icon'/> */}
            </div>
        </div>
         {/* ------ */}
         <span className="sidebar_menu_title">UI Interface</span>

        <div className="sidebar_submenu">
            <CloudDoneIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Base UI</span>
                <KeyboardArrowRightIcon className='sidebar_icon'/>
            </div>
        </div>

        <div className="sidebar_submenu">
            <ViewInArIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Elements</span>
                <KeyboardArrowRightIcon className='sidebar_icon'/>
            </div>
        </div>

        <div className="sidebar_submenu">
            <BarChartIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Charts</span>
                <KeyboardArrowRightIcon className='sidebar_icon'/>
            </div>
        </div>
        
        <div className="sidebar_submenu">
            <WorkspacePremiumIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Icons</span>
                <KeyboardArrowRightIcon className='sidebar_icon'/>
            </div>
        </div>
        
        <div className="sidebar_submenu">
            <FeedIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Forms</span>
                <KeyboardArrowRightIcon className='sidebar_icon'/>
            </div>
        </div>
        
        <div className="sidebar_submenu">
            <TableViewIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Tables</span>
                <KeyboardArrowRightIcon className='sidebar_icon'/>
            </div>
        </div>
        
        <div className="sidebar_submenu">
            <CodeIcon className='logo'/>
            <div className="sidebar_content">
                <span className="sidebar_title">Multi Levels</span>
                <KeyboardArrowRightIcon className='sidebar_icon'/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar