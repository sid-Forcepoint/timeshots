import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      <Likes post={post}/>
      <Caption post={post}/>
      <CommentsSection post={post}/> 
      <Comments post={post}/>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ color: "white", margin: 5, fontWeight: 400 }}>
          {post.user}
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-glyphs/60/ffffff/ellipsis.png",
          }}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.profile_picture }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 26,
    height: 26,
    marginHorizontal: 5,
    marginTop: 10,
  },
});

const postFooterIcons = [
  {
    name: "Waiting",
    imageUrl: "https://img.icons8.com/wired/64/ffffff/hourglass--v1.png",
    likedimageUrl: "https://img.icons8.com/dusk/64/ffffff/hourglass--v1.png",
  },

  {
    name: "Comment",
    imageUrl: "https://img.icons8.com/ios/50/ffffff/speech-bubble--v1.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/share.png",
  },
  {
    name: "Add to events",
    imageUrl: "https://img.icons8.com/dotty/80/ffffff/calendar.png",
  },
];

const PostFooter = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({post}) => (
    <View style={{flexDirection:'row',marginTop:4}}>

    <Text style={{color:'white',fontWeight:'400'}}>{post.likes.toLocaleString('en')} waiting</Text>
    </View>
)

const Caption = ({post}) => (
    <View style={{marginTop:5}}>

    <Text style={{color:'white'}}>
        <Text style={{fontWeight:600}}>{post.user}</Text>
        <Text>  {post.caption}</Text>
    </Text>
    </View>
)

const Comments = ({post}) => (
    <>
    {post.comments.map((comment,index)=>(
        <View key={index} style={{flexDirection:'row',marginTop:3}}>
            <Text style={{color:'white'}}>
                
                <Text style={{fontWeight:600}}>{comment.user}</Text>{' '}
                {comment.comment}
            </Text>
        </View>
    ))}
    </>
)

const CommentsSection = ({post}) =>(
    <View style={{marginTop:5}}>
        {!!post.comments.length && (

            <Text style={{color:'gray'}} >
        View{post.comments.length > 1  ? ' all' : ''} {post.comments.length} {post.comments.length > 1  ? 'comments' : 'comment'}
     </Text>
         )}
    </View>
)

export default Post;
