import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface BrandResponeseModel extends ResponseModel{

  data:Brand[];
}
