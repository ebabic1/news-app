import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewsArticleItem = ({item}) => {
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(`/article/${item.id}`);
  };
  const website = item.url.split('https://').pop().split('/')[0];
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${website}`;
  return (
    <Card
      sx={{
        width: "810px",
        minHeight: "260px",
        display: "flex",
        margin: "20px",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
          cursor: "pointer",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        },
      }}
      onClick = {navigateToDetails} 
    >
      <Box
      sx = {{
        display: 'flex',
        flexDirection:'column',
      }}>
      <Box
      sx={{
        alignSelf:'start',
        marginLeft:'15px',
        marginTop:'15px',
        fontSize:'20px',
      }}>
      <img
            src={faviconUrl}
            alt={`Favicon of ${website}`}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <span>{item.source.name}</span>
      </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        alt="image"
        image={
          item.urlToImage?.trim() ? item.urlToImage : "https://via.placeholder.com/400x300.png"
        }
        sx={{
          margin: "5px",
          width: "400px",
          height: "300px",
          alignItems: "center",
        }}
      />
    </Card>
  );
};
export default NewsArticleItem;
