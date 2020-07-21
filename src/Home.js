import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text,List,ListItem ,Left,Body,Right,Thumbnail} from 'native-base';
import { FlatList, ActivityIndicator,View } from 'react-native';
import  _ from 'lodash'
export default class Home extends Component {
    // https://jsonplaceholder.typicode.com/photos

    // https://via.placeholder.com/150

    constructor(props){
        super(props)
        this.state={
            data:[],
            fullData:[],
            loading:false,
            error:null,
            query:"",
            page:1
        }
    }

    componentWillUnount(){
clearInterval(this.timer);
this.timer=null;
    }

    componentDidMount(){

        clearInterval(this.timer);
        this.timer = setInterval(() => this.RequestAPIPhotos(), 10000);
    }
    RequestAPIPhotos=()=>{
        this.setState({loading:true})
        const apiURL=`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.page}`

        // const apiURL="https://jsonplaceholder.typicode.com/photos?_limit=30"
        fetch(apiURL).then((res)=>res.json()).then((resJson)=>{
            this.setState({
                loading:false,
                data:resJson.hits,
                fullData:resJson.hits,
                page:this.state.page+1
            })
            

        }).catch(error=>{
            this.setState({
                error,loading:false
            })
        })
    }


    renderFooter=()=>{
      if(!this.state.loading) return null
      return(
          <View style={{paddingVerticle:20,borderTopWidth:1,borderColor:"#CED0CE"}}>
         <ActivityIndicator animating size="large"/>

          </View>
      )
    }

    handleSearch=(text)=>{
const formattedQuery=text.toLowerCase()
const data=_.filter(this.state.fullData,photo=>{
    if(photo.title.includes(formattedQuery)){

        return true
    }

    return false
})

this.setState({data,query:text})
    }

    _renderItem=({item,index})=>{
        return(
          
            


            <ListItem avatar>

          
          <Left>

{/* <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('DisplayJson',{name:'Bhargavi Mohan Raut'})}
        /> */}


          <Button rounded onPress={() => this.props.navigation.navigate('DisplayJson',{Title:item.title,Url:item.url,Created_at:item.created_at,Page_No:this.state.page})}>
            <Text>View</Text>
          </Button>
            {/* <Thumbnail source={{ uri: item.thumbnailUrl }} /> */}
          </Left>
          <Body>
          <Text>Title:{item.title}</Text>
            <Text note>Url:{item.url}</Text>
            <Text note>Created At:{item.created_at}</Text>
            <Text note>Page No.:{this.state.page}</Text>
            {/* <Text note>Page Number:{item.created_at}</Text> */}
            
          
          </Body>
          <Right>
           
          </Right>
        </ListItem>
        )
    }

render(){
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={this.handleSearch}/>
           
          </Item>
          
        </Header>

        {/* <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('DisplayJson',{name:'Bhargavi Mohan Raut'})}
        /> */}

              <List>
                   <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={(item,index)=>index.toString()}
            ListFooterComponent={this.renderFooter}
            />

           
          </List>

      </Container>

    );
  }
}