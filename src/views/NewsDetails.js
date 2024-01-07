import { Box, Typography,Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NewsDetails = () => {
  const { id } = useParams(); // Assuming you have set up the routing and a parameter for articleId

  const articles = useSelector((state) => state.articles.articles);
  const article = articles.find((article) => article.id === id);
    console.log(articles);
  if (!article) {
    return (
      <Box>
        <Typography variant="h4">Article not found</Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="20px"
    >
      <Typography variant="h4" gutterBottom>
        {article.title}
      </Typography>
      {article.author && (
        <Typography variant="subtitle1" gutterBottom>
          Author: {article.author}
        </Typography>
      )}
      {article.publishedAt && (
        <Typography variant="subtitle2" gutterBottom>
          Published: {new Date(article.publishedAt).toDateString()}
        </Typography>
      )}
      <img
        src={article.urlToImage}
        alt={article.title}
        style={{ maxWidth: "50%", marginBottom: "20px" }}
      />
      <Typography variant="body1" gutterBottom>
        {article.description}
      </Typography>
      {article.content && (
        <Typography variant="body2" gutterBottom>
          {article.content}
        </Typography>
      )}
      {article.url && (
        <Link href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      )}
    </Box>
  );
};

export default NewsDetails;