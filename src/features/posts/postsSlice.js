// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  fetchStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  addStatus: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
  fetchError: null,
  addError: null,
};

// Thunk para GET - Obtener publicaciones
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      if (!response.ok) {
        throw new Error('Error al obtener publicaciones');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk para POST - Crear nueva publicación
export const addPost = createAsyncThunk(
  'posts/addPost',
  async (newPost, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPost),
        }
      );
      if (!response.ok) {
        throw new Error('Error al crear publicación');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Limpiar error de creación después de mostrarlo
    clearAddError: (state) => {
      state.addError = null;
      state.addStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      // === fetchPosts (GET) ===
      .addCase(fetchPosts.pending, (state) => {
        state.fetchStatus = 'loading';
        state.fetchError = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded';
        // Agregar uniqueId a cada post obtenido de la API
        state.items = action.payload.map((post, index) => ({
          ...post,
          uniqueId: `api-${post.id}-${Date.now()}-${index}`,
        }));
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.fetchError = action.payload || 'Error al obtener publicaciones';
      })
      // === addPost (POST) ===
      .addCase(addPost.pending, (state) => {
        state.addStatus = 'loading';
        state.addError = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.addStatus = 'succeeded';
        // Agregar el nuevo post al inicio de la lista con uniqueId
        const newPost = {
          ...action.payload,
          uniqueId: `new-${Date.now()}-${Math.random()}`,
        };
        state.items.unshift(newPost);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.addStatus = 'failed';
        state.addError = action.payload || 'Error al crear publicación';
      });
  },
});

export const { clearAddError } = postsSlice.actions;
export default postsSlice.reducer;
