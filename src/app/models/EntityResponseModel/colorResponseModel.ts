import { Color } from "../Entity/color";
import { ResponseModel } from "../responseModel";

export interface ColorResponseModel extends ResponseModel{
  data:Color[];
  
}