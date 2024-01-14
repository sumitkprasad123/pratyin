import React from 'react';
import "./student.scss";
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Progress from '../../../components/pogress/Progress';
import LineCharts from '../../../components/chat/LineCharts';
import Timeline from '../../../components/vertical timeline/Timeline';
import Clender from '../../../components/clender/Clender';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Task from '../../../components/task/Task';

const Student = () => {
   const task1 = [
      {
         time:"08:00 am",
         subject:"Botony",
         title:"lorem ipsum sit amet",
         timeDuration:"08:00 - 09:00 am"
      },
      {
         time:"09:00 am",
         subject:"Botony",
         title:"lorem ipsum sit amet",
         timeDuration:"09:00 - 10:00 am"
      },
      {
         time:"10:00 am",
         subject:"Botony",
         title:"lorem ipsum sit amet",
         timeDuration:"10:00 - 11:00 am"
      }
   ]

   const task2 = [
      {
         time:"08:00 am",
         subject:"English",
         title:"lorem ipsum sit amet",
         timeDuration:"08:00 - 09:00 am"
      },
      {
         time:"09:00 am",
         subject:"Mathematics",
         title:"lorem ipsum sit amet",
         timeDuration:"09:00 - 10:00 am"
      },
      {
         time:"10:00 am",
         subject:"History",
         title:"lorem ipsum sit amet",
         timeDuration:"10:00 - 11:00 am"
      },{
         time:"11:00 am",
         subject:"Break",
         title:"lorem ipsum sit amet",
         timeDuration:"11:00 - 12:00 am"
      },
      {
         time:"11:30 am",
         subject:"History",
         title:"lorem ipsum sit amet",
         timeDuration:"11:30 - 12:30 am"
      }
   ]
  return (
    <div className="student_container">
        <div className="student">

            <div className="student_title">
               <span className="title">Welcome Bruklin!</span>
               <Link to="/" className="home_link">Home / Student</Link>
            </div>

            {/* total_review container */}
            <div className="total_review">
               <div className="total_review_container">
                  <div className="total_review_data">
                     <span className="course">All Courses</span>
                     <span className="course_data">04/06</span>
                  </div>
                  <div className="img_box">
                     <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg" alt="pic" className="total_review_img" />
                  </div>
               </div>
               <div className="total_review_container">
                  <div className="total_review_data">
                     <span className="course">All Projects</span>
                     <span className="course_data">40/60</span>
                  </div>
                  <div className="img_box">
                     <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-02.svg" alt="pic" className="total_review_img" />
                  </div>
               </div>
               <div className="total_review_container">
                  <div className="total_review_data">
                     <span className="course">Test Attended</span>
                     <span className="course_data">30/50</span>
                  </div>
                  <div className="img_box">
                     <img src="	https://preschool.dreamstechnologies.com/template/assets/img/icons/student-icon-01.svg" alt="pic" className="total_review_img" />
                  </div>
               </div>
               <div className="total_review_container">
                  <div className="total_review_data">
                     <span className="course">Test Passed</span>
                     <span className="course_data">15/20</span>
                  </div>
                  <div className="img_box">
                     <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/student-icon-02.svg" alt="pic" className="total_review_img" />
                  </div>
               </div>
            </div>

            {/* student_detail_container */}
            <div className="student_detail_container">
                 <div className="student_detail_left">

                      <div className="lesson">
                          <div className="lesson_top">
                              <span className="lesson_top_title">Today’s Lesson</span>
                              <div className="lesson_nav">
                                <span className="lesson_nav_dot active"></span>
                                <span className="lesson_nav_dot"></span>
                                <span className="lesson_nav_dot"></span>
                                <span className="lesson_nav_title">View All</span>
                                <MoreVertIcon className="lesson_nav_vertical_logo"/>
                              </div>
                          </div>
                          <div className="lesson_bottom">
                             <div className="lesson_percentage">
                                 <Progress/>
                             </div>

                             <div className="lesson_info">
                                <div className="lesson_info_item">
                                   <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/lesson-icon-01.svg" alt="pic" className="lesson_info_img" />
                                   <div className="lesson_info_detail">
                                      <span className="lesson_info_detail_type">Class</span>
                                      <span className="lesson_info_detail_data">Electrical Engg</span>
                                   </div>
                                </div>
                                <div className="lesson_info_item">
                                   <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/lesson-icon-04.svg" alt="pic" className="lesson_info_img" />
                                   <div className="lesson_info_detail">
                                      <span className="lesson_info_detail_type">Asignment</span>
                                      <span className="lesson_info_detail_data">5 Asignment Engg</span>
                                   </div>
                                </div>
                                <div className="lesson_info_item">
                                   <img src="	https://preschool.dreamstechnologies.com/template/assets/img/icons/lesson-icon-02.svg" alt="pic" className="lesson_info_img" />
                                   <div className="lesson_info_detail">
                                      <span className="lesson_info_detail_type">Lessons</span>
                                      <span className="lesson_info_detail_data">5 Lessons</span>
                                   </div>
                                </div>
                                <div className="lesson_info_item">
                                   <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/lesson-icon-05.svg" alt="pic" className="lesson_info_img" />
                                   <div className="lesson_info_detail">
                                      <span className="lesson_info_detail_type">Staff</span>
                                      <span className="lesson_info_detail_data">John Doe</span>
                                   </div>
                                </div>
                                <div className="lesson_info_item">
                                   <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/lesson-icon-03.svg" alt="pic" className="lesson_info_img" />
                                   <div className="lesson_info_detail">
                                      <span className="lesson_info_detail_type">Time</span>
                                      <span className="lesson_info_detail_data">Lessons</span>
                                   </div>
                                </div>
                                <div className="lesson_info_item">
                                   <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/lesson-icon-06.svg" alt="pic" className="lesson_info_img" />
                                   <div className="lesson_info_detail">
                                      <span className="lesson_info_detail_type">Lesson Learned</span>
                                      <span className="lesson_info_detail_data">10/50</span>
                                   </div>
                                </div>         
                             </div>

                             <div className="lesson_btn">
                                 <div className="skip_btn">skip</div>
                                 <div className="continue_btn">Continue</div>
                             </div>
                          </div>

                       </div>
                       
                       <div className="l_activity">
                           <div className="l_activity_heading">
                               <span className="left">Learning Activity</span>
                               <div className="right">
                                   <span className="dot1"></span>
                                   <span className="name1">Teacher</span>
                                   <span className="dot2"></span>
                                   <span className="name3">Student</span>
                                   <MoreVertIcon className='title_icon'/>
                               </div>
                           </div>
                           <div className="l_activity_chart">
                              <LineCharts/>
                           </div>
                       </div>

                       <div className="t_history">
                           <div className="t_history_title">
                              <span className="heading">Teaching History</span>
                              <MoreVertIcon className='title_icon'/>
                           </div>
                           <Timeline/>
                       </div>
                    </div>

                 
                 <div className="student_detail_right">
                      <Clender/>
                      <div className="clender_title">
                          <span className="clender_det">Upcoming Events</span>
                          <AddIcon />
                      </div>
                      <div className="event">
                        <div className="event_time">
                           <span className="event_date">10 Jan</span>
                           <MoreHorizIcon/>
                        </div>
                         {task1.map((task,ind) => {
                           return <Task
                               key={ind}
                               {...task}
                             />
                         })}
                      </div>
                      <div className="event">
                        <div className="event_time">
                           <span className="event_date">10 Jan</span>
                           <MoreHorizIcon/>
                        </div>
                         {task2.map((task,ind) => {
                           return <Task
                               key={ind}
                               {...task}
                             />
                         })}
                      </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Student