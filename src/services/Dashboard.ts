import { OrderStatus } from 'types';
import { ApiService } from './APIService';

class Dashboard extends ApiService {
  async getDashboardData() {
    return this.post<OrderStatus[]>('/Order/GetDashboardData', {
      from: null,
      to: null,
      pageSize: 10,
      pageNumber: 1,
    });
  }
}

const dashboardService = new Dashboard();
export default dashboardService;
