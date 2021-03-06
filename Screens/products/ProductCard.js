import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native';

var {width} = Dimensions.get("window");


const ProductCard = (props)=>{
  const {name, price, image, countInStock}=props;
  console.log(image);
  return(
      <View style={styles.container}>
          <Image 
          style={styles.imageStyles}
          resizeMode="contain"
          source={require('../images/7-78960_burger-transparent-bacon-sonic-bacon-cheeseburger.png')}
          />
          <View style={styles.card}/>
          <Text style={styles.title}>
          {
          name.length > 15 ? name.substring(0,12)
          + '...':name
        }
          </Text>

        <Text style={styles.price}>${price}</Text>

        { countInStock > 0 ? (
          <View style={{marginBottom: 60}}>
           <Button title={'Add'} color={'green'} />
          </View>
        )
        : <Text style={{marginTop: 20}}>currently unavailable</Text>
      }
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 180,
        height:width / 1.7,
        padding:10,
        borderRadius:10,
        marginTop:55,
        marginBottom:5,
        marginLeft:10,
        alignItems:'center',
        elevation:8,
        backgroundColor:'#fff'
    },
    imageStyles:{
        width:100,
        height:width / 2 - 20 - 30,
        backgroundColor:'transparent',
        position:'absolute',
        top:-45,
    },
    card:{
        marginBottom:10,
        height:width / 2 - 20 - 90,
        backgroundColor:'transparent',
        width:width / 2 - 20 - 10,
    },
    title:{
      fontWeight:"bold",
      fontSize:14,
      textAlign:'center'
    },
    price:{
      fontSize:20,
      color:'orange',
      marginTop:10
    }
})

export default ProductCard;