import { StyleSheet, ScrollView, View, Text, Image, StatusBar, SafeAreaView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#260000" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Image
              source={require('C:/Users/Romark/Podcast/assets/images/pup-logo.png')}
              style={styles.pupIcon}
            />
          </View>
          <View>
            <Text style={styles.headerTitle}>Welcome Isko!</Text>
            <Text style={styles.headerSubTitle}>Find today's best podcasts</Text>
          </View>
          <View>
            <Image
              source={require('C:/Users/Romark/Podcast/assets/images/cpe-logo.png')}
              style={styles.cpeIcon}
            />
          </View>
        </View>

        <View style={styles.lessonContainer}>
          <Image
            source={require('C:/Users/Romark/Podcast/assets/images/lesson.png')}
            style={styles.lesson}
          />
          <View style={styles.lessonText}>
            <View>
              <Text style={styles.lessonTitleText}>Lesson 1: History</Text>
              <View style={styles.lessonTime}>
                <FontAwesome6 name="clock-four" size={16} color="rgba(255, 255, 255, 0.5)" />
                <Text style={styles.lessonIconText}>15 mins of listening</Text>
              </View>
            </View>
            
            <View style={styles.lessonPlay}>
              <FontAwesome6 name="play" size={18} color="black" />
            </View>
          </View>
        </View>


        <View >
          <View style={styles.recentlyPlayedContainer}>
            <Text style={styles.recentlyPlayed}>Recently Played</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          
          <View style={styles.recentlyContainer}>
            <View>
              <Image
                source={require('C:/Users/Romark/Podcast/assets/images/recently1.png')}
                style={styles.recently}
              />
            </View>
            
            <View style={styles.recentlyTitleContainer}>
              <View>
                <Text style={styles.recentlyTitle}>The New York Fiction</Text>
                <Text style={styles.recentlyEpisode}>Episode 4</Text>
              </View>
              <View style={styles.recentlyTime}>
                <FontAwesome6 name="clock-four" size={16} color="rgba(255, 255, 255, 0.5)" />
                <Text style={styles.recentlyText}>15 mins of listening</Text>
              </View>
            </View>
          </View>

          <View style={styles.recentlyContainer}>
            <View>
              <Image
                source={require('C:/Users/Romark/Podcast/assets/images/recently2.png')}
                style={styles.recently}
              />
            </View>
            
            <View style={styles.recentlyTitleContainer}>
              <View>
                <Text style={styles.recentlyTitle}>60 songs that explain the</Text>
                <Text style={styles.recentlyEpisode}>Episode 16</Text>
              </View>
              <View style={styles.recentlyTime}>
                <FontAwesome6 name="clock-four" size={16} color="rgba(255, 255, 255, 0.5)" />
                <Text style={styles.recentlyText}>45 mins of listening</Text>
              </View>
            </View>
          </View>


          <View style={styles.divider}></View>
          
          <View>
            <View style={styles.recentlyPlayedContainer}>
              <Text style={styles.recentlyPlayed}>Popular Podcasts</Text>
              <Text style={styles.seeAll}>See all</Text>
            </View>
          </View>

          <View style={styles.popularContainer}>
            <Image
              source={require('C:/Users/Romark/Podcast/assets/images/popular1.png')}
              style={styles.popular}
            />
            <Image
              source={require('C:/Users/Romark/Podcast/assets/images/popular2.png')}
              style={styles.popular}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#260000',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#560000',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
  headerSubTitle: {
    fontSize: 10,
    color: '#585858',
    fontWeight: '600',
  },
  pupIcon: {
    height: 44,
    width: 44,
  },
  cpeIcon: {
    height: 50,
    width: 50,
  },
  lessonContainer: {
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden', 
    position: 'relative',
  },
  lesson: {
    width: '100%',
    height: 190,
  },
  lessonText: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    position: 'absolute',
    bottom: 6,
    left: '2%',
    width: '96%',
  },
  lessonTitleText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900',
  },
  lessonTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonIconText: {
    opacity: 0.5,
    color: 'white',
    fontSize: 10,
    marginLeft: 5,
  },
  lessonPlay: {
    backgroundColor: 'white',
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  recentlyPlayedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  recentlyTitleContainer: {
    gap: 6,
  },
  recentlyTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900',
  },
  recentlyEpisode:{
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  recentlyText: {
    fontSize: 10,
    color: 'white',
    opacity: .5,
  },
  recentlyPlayed: {
    color: 'white'
  },
  seeAll: {
    fontSize: 12,
    color: '#FF6D45',
  },
  recently: {
    borderRadius: 12,
    height: 75,
    width: 75,
  },
  recentlyContainer: {
    height: 75,
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  recentlyTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  divider: {
    borderBottomColor: '#292929',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  popularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  popular: {
    width: 145,
    height: 145,
    borderRadius: 20,
  },
});
