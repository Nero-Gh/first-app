import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory'
    );
  }

  getCategoryByName(name: string) {
    return this.http.get(
      `https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory?categoryId=${name}`
    );
  }

  login(loginObj: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/zomato/Login',
      loginObj
    );
  }
}
