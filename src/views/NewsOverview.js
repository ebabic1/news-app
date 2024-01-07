import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import NewsArticleItem from "../components/NewsArticleItem";
import { setArticles } from "../redux/articlesSlice";

const NewsOverview = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { articles } = useSelector((state) => state.articles);
  const fetchNewsData = async () => {
    try {
      const response = await getNews(searchTerm);
      console.log(response); 

      if (response.status === 200) {
        const articlesWithIds = response.data.articles.map((article, index) => ({
          ...article,
          id: index.toString(),
        }));
        dispatch(setArticles(articlesWithIds));
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };
  useEffect(() => {
    fetchNewsData();
  }, []);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
    <TextField
        label="Search Articles"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 20, width: 300 }}
        sx={{
          "& input": {
            color: "white", // Text color
            borderBottomColor: "white", // Bottom line color
          },
          "& label": {
            color: "white", // Label color
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Outline color
          },
        }}
        onKeyDown={(ev) => {
    if (ev.key === 'Enter') {
      // Do code here
      ev.preventDefault();
      fetchNewsData();
    }
  }}
        
      />
      {articles.map((article, index) => (
        <NewsArticleItem
          key={index}
          item={article}
        />
      ))}
    </Box>
  );
};
export default NewsOverview;
