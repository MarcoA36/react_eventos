// import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// function ListItemEvento({ eventData }) {
  
//   const listItemStyle = {
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center", 
//     mb:3,
//     p: 2,
//     background: "#151515"
//   };

//   const avatarStyle = {
//     width: "100px",
//     height: "100px",
//     marginRight: "16px",
//     borderRadius: "12px"
//   };

//   const textStyle = {
//     color: "white"
//   };

//   return (
//     <ListItem disablePadding sx={listItemStyle} component={Link} to={`evento/${eventData.id}`}>
//       <ListItemAvatar>
//         <Avatar style={avatarStyle}>
//           <img src={eventData.image} alt={eventData.description} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//         </Avatar>
//       </ListItemAvatar>
//       <ListItemText
//         primary={
//           <>
//             <Typography variant="h5" sx={textStyle}>{eventData.title}</Typography>
//             <Typography variant="h6" sx={textStyle}>{eventData.location}</Typography>
//           </>
//         }
//       />
//       <ListItemText
//         primary={
//           <>
//             <Typography variant="h6" sx={textStyle}>{eventData.date}</Typography>
//             <Typography variant="h6" sx={textStyle}>{eventData.time}</Typography>
//           </>
//         }
//       />
//     </ListItem>
//   );
// }

// export default ListItemEvento;

