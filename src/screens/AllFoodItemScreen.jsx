import { Image, ScrollView, Text,TouchableOpacity,View } from "react-native";
import { Data } from "../../Data";
function AllFoodItemScreen({route,navigation}){
    const allFoods=Data.reduce((acc,curr)=>{
        return acc.concat(curr.foods)
    },[])
    return(
        <ScrollView>
                   <View className="bg-slate-100">
        {allFoods.map((item)=>{
            return(
            <TouchableOpacity onPress={()=>navigation.navigate("SingleFoodItem",{foodItem:item})}>
                <View className="flex-col block mx-auto">
                <Image className="h-[150px] w-[150px] mt-[40px]" source={item.image}/>
                <View className="bg-white flex-col px-6 justify-center  rounded-[20px] w-[150px] h-[200px]">
                <Text className='font-sans font-bold'>{item.foodName}</Text>
                {/* <Text>{item.description}</Text> */}
                <Text className='text-[#FF7356] text-xl'>Ksh.{item.price}</Text>
                </View>
                </View>
                </TouchableOpacity>
            )
        })}
    </View>
    </ScrollView>
 
    )
}
export default AllFoodItemScreen