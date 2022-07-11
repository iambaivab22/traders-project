import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './features/authSlice'
import articleReducer from './features/articleSlice'

export default configureStore({
    reducer: {
        auth: adminReducer,
        article: articleReducer
    }
})