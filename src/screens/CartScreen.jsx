import { useContext, useState } from "react";
import { Text,View,Image, TouchableOpacity } from "react-native";
import { StateContext } from "../context/state";

function CartScreen({route,navigation}){
    const {cart,setCart}=useContext(StateContext)
    const {subTotal,setSubTotal}=useContext(StateContext)
    const deleteIcon=<Icon name="" size={30} color="black"/>
const increamentQuantity=(id)=>{
    setCart(prevCart=>
        prevCart.map(cartItem=>
            cartItem.id===id?{...cartItem,quantity:cartItem.quantity+1}:cartItem,
            
        
    
    )
        
    )
}
const decreamentQuantity=(id)=>{
    setCart(prevCart=>
        prevCart.map(cartItem=>
            cartItem.id===id?{...cartItem,quantity:cartItem.quantity>1?cartItem.quantity-1:1}:cartItem,
            
        
    
    )
        
    )
}
setSubTotal(()=>{
    return cart.reduce((total,cartItem)=>total+cartItem.price*cartItem.quantity
    ,0)
})
const removeCartItem =(id)=>{
    setCart((prevCart)=>prevCart.filter(cartItem=>cartItem.id!==id))
}

    console.log(cart)
    return(
        <View className='container mx-auto'>
            <View>
            <Text>Cart</Text>
            </View>
        {cart.map((foodItem)=>{
            return(
            <View className='m-2'>
            <View className='flex flex-row shadow-lg border rounded-lg'>
                <View>
                <Image className='h-[50px] w-[50px]' source={foodItem.image}/>
                </View>
                <View>
                <Text>{foodItem.foodName}</Text>
                <Text>Ksh.{foodItem.price}</Text>
                <View className="flex flex-row">
                <TouchableOpacity onPress={()=>decreamentQuantity(foodItem.id)}>
                <Text className='bg-red-400 rounded-full text-center h-4 w-4 text-white'>-</Text>
                </TouchableOpacity>
                <Text>{foodItem.quantity}</Text>
                <TouchableOpacity onPress={()=>increamentQuantity(foodItem.id)}>
                <Text className='bg-red-400 rounded-full text-center h-4 w-4 text-white'>+</Text>
                </TouchableOpacity>
                </View>
                </View>
                {/* <TouchableOpacity onPress={()=>removeCartItem(foodItem.id)}>
                    
                        <Text>Delete</Text>
                    
                </TouchableOpacity> */}
                <View>
                <Text>

                </Text>
                </View>
        </View>
        </View>
            )
        })}
        <View className="flex justify-between">
            <Text>KSh{subTotal}</Text>
            {/* <Text>Ksh</Text> */}
        </View>
        <View className='flex bg-[#FF7356] rounded-full h-10  items-center text-center text-white m-2'>
            <Text className='text-white m-1'>Checkout</Text>
        </View>
        </View>
    )
}
export default CartScreen
