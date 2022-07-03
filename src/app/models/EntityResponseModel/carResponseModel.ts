
import { Car } from "../Entity/car";
import { ResponseModel } from "../responseModel";

export interface CarResponseModel extends ResponseModel{
  data:Car[];
}