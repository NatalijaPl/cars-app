import ApiService from "./ApiService";

class CarService extends ApiService {
  async getAll() {
    return await this.client.get("/cars");
  }
  async createCar(data) {
    return this.client.post("/cars", data);
  }
}

export const carService = new CarService();
