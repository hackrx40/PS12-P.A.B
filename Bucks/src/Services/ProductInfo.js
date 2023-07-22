import Api from "./Api"
import RecommendApi from "./RecommendApi"

const ProductInfo = async(productId) => {
  res={}
  productInfo=await Api.get(`${productId}`)
  if(productInfo.data["Product"]){
    res["Product"]=productInfo.data["Product"]
  }
  recommendations=await RecommendApi.get(`recommend/${productId}`)
  if(recommendations.data){
    res["recommendations"]=recommendations.data["Result"]
  }
  return res
}

export default ProductInfo
