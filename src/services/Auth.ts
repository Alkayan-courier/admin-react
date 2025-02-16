import { AuthPayload, JWTDataTypes, User } from 'types';
import { ApiService } from './APIService';
import { jwtDecode } from 'jwt-decode';
import environment from 'enviroment';
class AuthService extends ApiService {
  private path: string;
  constructor() {
    super();
    this.path = '/auth';
  }
  async login(username: string, password: string) {
    try {
      const response = await this.post<AuthPayload>(`${this.path}/AdminLogin`, {
        username,
        password,
      });
      this.saveTokens(response);
      return response;
    } catch (error: any | Error) {
      throw error;
    }
  }
  async getUserData() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const tokenData = jwtDecode<JWTDataTypes>(token);
    const user: User = {
      userId: tokenData[environment.idClaim],
      phoneNumber: tokenData[environment.mobileClaim],
      roles: tokenData[environment.roleClaim],
      name: tokenData[environment.userName],
    };
    return user;
  }
  getToken() {
    return localStorage.getItem('accessToken');
  }
}

export const authService = new AuthService();
