import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from 'services/Auth';
import {
  ApiResponse,
  AuthErrorMessages,
  AuthPayload,
  ErrorResponse,
  LoginDataType,
  User,
} from 'types';
import { setSnackbar } from './snackbar';

const initialState: {
  loggedIn: boolean;
  user?: AuthPayload | User;
  isLoading: boolean;
  isLoggingIn: boolean;
} = {
  loggedIn: false,
  user: undefined,
  isLoading: true,
  isLoggingIn: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      localStorage.clear();
      return { ...initialState, isLoading: false };
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loggedIn = true;
      state.user = payload;
      state.isLoggingIn = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loggedIn = false;
      state.isLoggingIn = false;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoggingIn = true;
    });
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      if (payload) {
        state.user = payload;
        state.loggedIn = true;
      }
      state.isLoading = false;
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.loggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(getUserData.pending, (state) => {
      state.isLoading = true;
    });
  },
});

function getAuthErrorMessage(response: ErrorResponse): string {
  switch (response.message) {
    case 'EMAIL_NOT_FOUND':
      return AuthErrorMessages.EMAIL_NOT_FOUND;
    case 'INVALID_PASSWORD':
      return AuthErrorMessages.INVALID_PASSWORD;
    case 'USER_DISABLED':
      return AuthErrorMessages.USER_DISABLED;
    default:
      return response.message;
  }
}

export const login = createAsyncThunk<User | undefined, LoginDataType>(
  'auth/login',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await authService.login(payload.username, payload.password);
      const user: User = {
        name: response.fullName,
        phoneNumber: response.phoneNumber,
        roles: response.roles,
        userId: response.userId,
      };
      return user;
    } catch (err) {
      const { error } = err as unknown as ApiResponse;
      const message = getAuthErrorMessage(error);
      dispatch(
        setSnackbar({
          color: 'error',
          title: 'login error',
          content: message,
        })
      );
      return rejectWithValue(message);
    }
  }
);

export const getUserData = createAsyncThunk<User | null, void>(
  'auth/getUser',
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await authService.getUserData();
      return response;
    } catch (error) {
      return rejectWithValue((error as ApiResponse).error.message);
    }
  }
);

export default auth.reducer;
export const { logout } = auth.actions;
