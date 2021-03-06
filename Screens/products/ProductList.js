import React from 'react';
import {TouchableOpacity,View,Dimensions} from 'react-native';
import ProductCard from './ProductCard.js';

var {width}=Dimensions.get("window");
console.log(width);
const ProductList = (props)=>{
    const {item} = props;
    return(
        <TouchableOpacity style={{width:'50%'}}>
        <View style={{width: width / 2}}>
        <ProductCard {...item}/>
        </View>
        </TouchableOpacity>
    )
}

export default ProductList;