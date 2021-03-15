
import React from 'react';
import { SafeAreaView, Image, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.header}>
          <Text>back</Text>
          <Text>people</Text>
          <Text>setting</Text>
        </View>
        <View style={styles.profileimagecontainer} >
          <Image
            style={styles.profileimage}
            source={'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/6R0kusgfZmQv1jNcHSL9GU/f4c9517962f99704c3a0df849061b380/linkedIN-profile-FB.jpg'}
          />
        </View>
      </View>
      <View style={styles.userinfo}>
        <Text style={styles.username}>Caroline Steele</Text>
        <Text style={styles.userposition}>Photographer and Artist</Text>
        <Text style={styles.userdetails}>Hi, my name is Caroline Steele and i love photography! It's my gretest passion in life.
        i used here redux and axios
        </Text>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.followbtn}>
          <Text style={{ color: '#fff' }}>FOLLOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messagebtn}>
          <Text style={{ color: '#dd636b' }}>MESSAGE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <View style={styles.followers}>
          <Text>674</Text>
          <Text>Photos</Text>
        </View>
        <View style={styles.followers}>
          <Text>15K</Text>
          <Text>FOLLOWERS</Text>
        </View>
        <View style={styles.followers}>
          <Text>23K</Text>
          <Text>FOLLOWING</Text>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headercontainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#fcbc53',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,


    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50
    // borderBottomRightRadius
  },
  profileimage: {
    height: 140,
    width: 140,
    borderRadius: 80,
    backgroundColor: 'red'
  },
  profileimagecontainer: {
    marginTop: 30,
    alignItems: 'center'
  },
  userinfo: {
    marginTop: 50,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  followbtn: {
    backgroundColor: '#ea6c72',
    padding: 16,
    borderRadius: 20
  },
  messagebtn: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
    borderColor: '#dd636b',
    borderWidth: 1
    // width: 1
  },
  followers: {
    alignItems: 'center'
  },
  username: {
    fontSize: 30,
    fontWeight: '300',
    color: '#dd636b'
  },
  userposition: {
    color: '#89999f'
  },
  userdetails: {
    color: '#89999f',
    marginTop: 20
  }

});

export default App;
