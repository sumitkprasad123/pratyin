import {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const Progress = () => {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 80 ? 80 : prev + 5));
      }, 90);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <Box sx={{
         position: 'relative', display: 'inline-flex',}}>
          <CircularProgress variant="determinate" value={progress} size={90} sx={{color:"#7e92df"}} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{fontSize:"20px",color:"rgb(189, 189, 203)",fontWeight:"bold"}}>
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
      </Box>
    )
}
export default Progress