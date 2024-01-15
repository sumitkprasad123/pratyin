import "./sidemenu.scss";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleContext } from "../../context/ToggleContext";

const Sidemenu = ({data,handleTitle,handleMenu,menu,active}) => {
    const {hideMenu,setHideMenu} = useContext(ToggleContext)
  return (
    <>
      {
        data.map((item,i) => {
            return<div key={i}>
               <Accordion sx={{boxShadow: "none",}}>
                    <AccordionSummary onClick={item.subTitle.length===0?()=>handleMenu(item.title):null}
                        sx={[
                            { margin: '-16px',border:"none", },
                            
                            {
                                '& .MuiSvgIcon-root': {
                                    marginRight:menu===item.title ?"0px":"20px",
                                    fontSize:"22px",
                                    color:menu===item.title ?"blue":"#6f6f6f",
                                }, 
                                '& .MuiAccordionSummary-content':{
                                    gap:menu===item.title ?"20px":"0px",
                                },
                            },
                            {
                                '& .MuiAccordionSummary-content':{
                                    color:menu===item.title ?"blue":"#6f6f6f",
                                    background:"white",
                                    width:"100%",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    fontSize:"14px",
                                }
                            },
                            {
                             '&:hover': {
                                transition:"0.8s ease",
                                '& .MuiSvgIcon-root': {
                                   color: 'blue', // Change icon color to blue on hover
                                   marginRight:"0px", 
                                },
                                '& .MuiTypography-root': {
                                   color: 'blue', // Change text color to blue on hover
                                },
                                '& .MuiAccordionSummary-content':{
                                    color: 'blue',
                                    gap:"20px",
                                },
                                
                             },
                          }]
                        }
                        expandIcon={item.subTitle.length!==0? <KeyboardArrowRightIcon sx={{display:hideMenu?"none":"flex"}} />:null}  > 
                        <Typography  > {item.icone} </Typography>
                        <Typography sx={{display:hideMenu?"none":'hover{display:"flex"}'}} > {item.title} </Typography>
                    </AccordionSummary >
                
                    <AccordionDetails  sx={{ display:`${item.subTitle.length===0?"none":""}`,}}>
                        {item.subTitle && item.subTitle.map((el,ind)=>{
                           return<Link key={ind} to={el} className="link">
                                    <div
                                        key={ind} 
                                        onClick={()=>handleTitle(item.title,`${i+1}${el}${ind+1}`)} 
                                        className={active===`${i+1}${el}${ind+1}`?"submenu_list active":"submenu_list"}
                                    >{el}</div>
                                </Link>
                            })
                        }
                    </AccordionDetails>
              
                </Accordion>
            </div>
        })
      }
    </>
  )
}

export default Sidemenu