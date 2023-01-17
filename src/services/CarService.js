import ApiService from "./ApiService";

class CarService extends ApiService {
  async getAll() {
    return await this.client.get("/cars");
  }
  async createCar(data) {
    return this.client.post("/cars", data);
  }
  async getId(id) {
    return this.client.get(`/cars/${id}`);
  }

  async add(newCar) {
    try {
      const { data } = await this.client.post("cars", newCar);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async edit(id, car) {
    try {
      const { data } = await this.client.put(`cars/${id}`, car);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async delete(id) {
    try {
      const { data } = await this.client.delete(`cars/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}
export const carService = new CarService();
