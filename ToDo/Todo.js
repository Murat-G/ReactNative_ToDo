import React, { useState } from 'react';
import {SafeAreaView, View,StyleSheet, Text,Dimensions,FlatList, TouchableOpacity} from 'react-native';
import { Button } from './components'
const Todo = () =>{
const [mainText, setMainText] = useState([])

const [countDone, setCountDone] = useState(0)


    function plusTodo(values) {
        const Element = {
            id: Math.random().toString(),
            todo : values,
            isDone : false 
        }

        const newList = [Element, ...mainText]
        setMainText(newList)
    }
    function doneTodo(todoId){
        const newList = [...mainText];
        const todoIndex = newList.findIndex(i => i.id == todoId);
        newList[todoIndex].isDone = !newList[todoIndex].isDone;
        setMainText(newList);
        countTodo();

    }
    function countTodo() {
        const newList = [...mainText]
        const counter = newList.filter(i=>i.isDone == true)
        setCountDone(counter.length)
    }
    
    function removeTodo(removeId){
        const newList = [...mainText]
        const removeIndex = newList.findIndex(i => i.id == removeId);
        newList.splice(removeIndex,1);
        setMainText(newList);
        countTodo();
    }
    

    const renderData = ({ item }) => {
        return(
        <View>
            <TouchableOpacity
                style = {styles.touch}
                onPress = {() => doneTodo(item.id)}


                // data={item} 
                // onDone = {() => doneTodo(item.id)}
                // onRemove={() => removeTodo(item.id)}
            >
               <Text 
                style={[styles.text, { textDecorationLine: item.isDone ? 'line-through': null } ]}
                
                > {item.todo} 
                    
                 </Text>

                 <TouchableOpacity
                    onPress = {() => removeTodo(item.id)}
                 ><Text style= {styles.close}> X </Text></TouchableOpacity>

            </TouchableOpacity> 
        </View> 
            )
        }

    return (
        <SafeAreaView style={styles.container}>

         <View style= {styles.header}>


         
        <View >
            <Text style= {styles.textHead}>TODO</Text>
        </View>

        <View style={styles.elements}>
                <Text style={styles.count}>Total: {mainText.length}</Text>
                <Text style={styles.count}>Remain: {mainText.length - countDone} </Text>
                <Text style={styles.count}>Done: {countDone} </Text>

        </View>

        </View>
            <FlatList
                keyExtractor = {(_,index)=> index.toString()}
                data= {mainText}
                renderItem={renderData}

            />
            <View style= {styles.addtodo}>
                <Button 
                    // sendText = {(values) => { setMainText(values) } } 
                    sendText = {plusTodo}
                />
            </View>
        </SafeAreaView>
    )
}
export default Todo;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(238,222,222)',
    },
    header:{
        backgroundColor: 'rgb(184,35,184)',
        // margin:15,
        // alignSelf:'center'
    },
    textHead: {
        color:'rgb(238,222,222)',
        fontSize: 50,
        textAlign: 'center'
    },
    elements: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:10,
    },
    count: {
        color:'rgb(238,222,222)',
        fontSize: 25
    },  
    addtodo:{
        // flex:1,
        paddingBottom: 10,
        borderRadius: 10,
        margin:10,
        backgroundColor: '#9E00C5',
        width: Dimensions.get('window').width*0.95,
        // height: Dimensions.get('window').height*0.05
    },
    touch:{
        flexDirection: 'row',
        margin:5, 
        padding:10,
        backgroundColor:'gray',
        // width: Dimensions.get('window').width * 0.9,
        justifyContent:'space-between',
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    close: {
        color:'red',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#eceefe'
    }
})