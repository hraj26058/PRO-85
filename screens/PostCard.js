import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

export default class PostCard extends Component {
   constructor(props){
    super(props);
    this.state={
      
    }
  }
  
  render() {
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              post: this.props.post
            })
          }
        >
          <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
          <View style={styles.authorImageContainer}>
          <Image
              source={require("../assets/profile_img.png")}
              style={styles.profileImage}
            ></Image>
            <Text style={styles.postAuthorText}>
                    {this.props.post.author}
                  </Text>
          </View>
          </View>
            <Image
              source={require("../assets/post.jpeg")}
              style={styles.postImage}
            ></Image>
            <View style={styles.captionContainer}>
              <Text style={styles.captionText}>
                {this.props.post.caption}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  postImage: {
    resizeMode: "contain",
    width: "95%",
    marginTop:-50,
    alignSelf: "center",
    height: RFValue(250)
  },
  profileImage: {
    resizeMode: "contain",
    width: "15%",
    marginLeft:20,
    marginTop:-30,
    alignSelf: "left",
    height: RFValue(250)
  },
  captionContainer: {
    marginTop:10,
    textAlign:'center',
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  captionText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  authorContainer:{
    marginBottom:80,
  },
  postAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white",
    marginTop:-100,
    marginLeft:80,
  },
});
