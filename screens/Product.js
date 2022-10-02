import { View, Text } from 'react-native'
import React from 'react'

class Product extends React.Component{
    render(){
        const {name, brand, price, productImage}= this.props.product
        return(
            <View style={{width:'48%',alignItems:'center',borderWidth:0.75,margin:'1%',padding:15}}>
                <Image style={{width:150,height:150}} source={{url:productImage}}/>
            </View>
        )
    }
}