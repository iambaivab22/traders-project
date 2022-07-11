import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    articles: [],
    category:[]
}

export const fetchArticle = createAsyncThunk('getArticles',async () => {
        const data = await axios.get('/article')
        const category = await axios.get('/article/category')
        return {article: data.data, category: category.data}
      // return articles
})
const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        postDeleted(state,action){
          console.log(action.payload)
          axios.post(`/article/delete/${action.payload}`)
        }
    },
    extraReducers: {
        [fetchArticle.pending]: (state, action) => {
            state.status = 'loading'
          },
          [fetchArticle.fulfilled]: (state, action) => {
              console.log(action.payload)
              state.status = 'succeeded'
              state.articles = state.articles.concat(action.payload.article)
              state.category = state.category.concat(action.payload.category)
            
          },
          [fetchArticle.rejected]: (state, action) => {
            state.status = 'failed'
          },
    }
})

export const { postDeleted } = articleSlice.actions
export default articleSlice.reducer;