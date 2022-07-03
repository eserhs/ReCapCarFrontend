import { CarDetail } from "../Entity/carDetail";
import { ResponseModel } from "../responseModel";

export interface CarDetailResponseModel extends ResponseModel{
  data:CarDetail[];
}