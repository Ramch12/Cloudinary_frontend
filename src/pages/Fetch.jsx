import {useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom';
import { Paper,TableBody,TableCell,TableContainer,TableHead,TableRow,Table } from "@mui/material";
import axios from "axios";
const Fetch = () => {
    
    const [data,setData]=useState([]);
    useEffect(()=>{
         axios.get('https://cloudinary-backend-ko2c.onrender.com/fetchall').then(({data})=>{
            console.log(data?.result);
            setData(data?.result);
         })
    },[]);


  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Thumbnails</TableCell>
            <TableCell align="">Title</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
           <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
               <Link to={"/video"} state={{url:row.video.url}}><img src={row.image.url} width={"100px"} alt="" /></Link>
              </TableCell>
              <TableCell align=""><Link to={"/video"} state={{url:row.video.url}}>{row.Title}</Link></TableCell>
              <TableCell align="right">{row.Description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default Fetch;
