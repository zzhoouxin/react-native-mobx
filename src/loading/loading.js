
import React,{ Component } from 'react';
import {View,StyleSheet,Text } from "react-native";



export default class DefaultComponent extends Component {


    constructor(props){
        super(props);
        this.state = {
            isFirstLoad:true,
            loadError:null
        };

        this.renderError = this.renderError.bind(this);
        this._render = this._render.bind(this);
    }


    setSuccessPage(){
        this.setState({
            isFirstLoad:false,
            loadError:null
        });
    }



    setErrorPage(error){
        if(this.state.isFirstLoad == false){
            return;
        }
        this.setState({
            isFirstLoad:false,
            loadError:error
        });
    }

    renderError(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>加载失败</Text>
            </View>
        )
    }

    _render(){
        return(
            <View>
                <Text>加载完成</Text>
            </View>
        )
    }

    render() {
        let {isFirstLoad,loadError} = this.state;

        if(isFirstLoad === true){
            return <View style={{flex:1}}>
                <Text>加载中...</Text>
            </View>
        }else{
            if(loadError){
                return this.renderError();
            }else{
                return this._render();
            }
        }
    }

}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#f3f4f5'
    },
});