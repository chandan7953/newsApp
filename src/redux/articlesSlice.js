import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  loading: false,
  error: null,
  currentPage: 1,
  currentPageRange: [1, 5],
  article: {},
  category: "everything",
};

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (category, { getState }) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}`
    );
    return response.data.articles.filter(
      (article) =>
        article.content &&
        article.urlToImage &&
        article.title &&
        article.description
    );
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentPageRange: (state, action) => {
      state.currentPageRange = action.payload;
    },
    setArticle: (state, action) => {
      state.article = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setCurrentPageRange, setArticle, setCategory } =
  articlesSlice.actions;

export default articlesSlice.reducer;
