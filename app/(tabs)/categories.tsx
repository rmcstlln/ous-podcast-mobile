import { StyleSheet, ScrollView, View, Text, Image, StatusBar, SafeAreaView } from 'react-native';

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#260000" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.categoriesTitle}>Categories</Text>

        <View>
          <View style={styles.topPodcasts}>
            <Text style={styles.podcastsTitle}>TOP PODCASTS</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <View style={styles.podcastsContainer}>
            <View style={styles.podcastsImageNameContainer}>
              <Image
                source={require('C:/Users/Romark/Podcast/assets/images/recently1.png')}
                style={styles.podcasts}
              />
              <Text style={styles.podcastsName}>Podcast Name</Text>
            </View>
            <View style={styles.podcastsImageNameContainer}>
              <Image
                source={require('C:/Users/Romark/Podcast/assets/images/recently2.png')}
                style={styles.podcasts}
              />
              <Text style={styles.podcastsName}>Podcast Name</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.topEpisodes}>
            <Text style={styles.episodesTitle}>TOP EPISODES</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.topEpisodesScroll}
          >
            <View style={styles.episodeColumn}>
              <View style={styles.topEpisodesContainer}>
                <Image
                  source={require('C:/Users/Romark/Podcast/assets/images/recently1.png')}
                  style={styles.episodeImage}
                />
                <Text style={styles.episodeNumber}>1</Text>
                <View>
                  <Text style={styles.episodeName}>Episode Name</Text>
                  <Text style={styles.episodeChannel}>Podcast channel Name</Text>
                </View>
              </View>
              <View style={styles.topEpisodesContainer}>
                <Image
                  source={require('C:/Users/Romark/Podcast/assets/images/recently2.png')}
                  style={styles.episodeImage}
                />
                <Text style={styles.episodeNumber}>2</Text>
                <View>
                  <Text style={styles.episodeName}>Episode Name</Text>
                  <Text style={styles.episodeChannel}>Podcast channel Name</Text>
                </View>
              </View>
            </View>

            <View style={styles.episodeColumn}>
              <View style={styles.topEpisodesContainer}>
                <Image
                  source={require('C:/Users/Romark/Podcast/assets/images/recently1.png')}
                  style={styles.episodeImage}
                />
                <Text style={styles.episodeNumber}>3</Text>
                <View>
                  <Text style={styles.episodeName}>Episode Name</Text>
                  <Text style={styles.episodeChannel}>Podcast channel Name</Text>
                </View>
              </View>
              <View style={styles.topEpisodesContainer}>
                <Image
                  source={require('C:/Users/Romark/Podcast/assets/images/recently2.png')}
                  style={styles.episodeImage}
                />
                <Text style={styles.episodeNumber}>4</Text>
                <View>
                  <Text style={styles.episodeName}>Episode Name</Text>
                  <Text style={styles.episodeChannel}>Podcast channel Name</Text>
                </View>
              </View>
            </View>

            <View style={styles.episodeColumn}>
              <View style={styles.topEpisodesContainer}>
                <Image
                  source={require('C:/Users/Romark/Podcast/assets/images/recently1.png')}
                  style={styles.episodeImage}
                />
                <Text style={styles.episodeNumber}>5</Text>
                <View>
                  <Text style={styles.episodeName}>Episode Name</Text>
                  <Text style={styles.episodeChannel}>Podcast channel Name</Text>
                </View>
              </View>
              <View style={styles.topEpisodesContainer}>
                <Image
                  source={require('C:/Users/Romark/Podcast/assets/images/recently2.png')}
                  style={styles.episodeImage}
                />
                <Text style={styles.episodeNumber}>6</Text>
                <View>
                  <Text style={styles.episodeName}>Episode Name</Text>
                  <Text style={styles.episodeChannel}>Podcast channel Name</Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
  categoriesTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: 'white',
    marginTop: 20,
  },
  topPodcasts: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  podcastsTitle: {
    fontSize: 14,
    color: 'white',
    fontWeight: '900',
  },
  seeAll: {
    fontSize: 12,
    color: 'white',
  },
  podcastsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  podcastsImageNameContainer: {
    alignItems: 'center',
    gap: 5,
  },
  podcasts: {
    height: 140,
    width: 140,
    borderRadius: 20,
  },
  podcastsName: {
    fontSize: 10,
    color: 'white',
  },
  topEpisodes: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  episodesTitle: {
    fontSize: 14,
    color: 'white',
    fontWeight: '900',
  },
  topEpisodesScroll: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  episodeColumn: {
    marginRight: 20,
  },
  topEpisodesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  episodeImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  episodeNumber: {
    fontSize: 15,
    color: 'white',
    fontWeight: '900',
  },
  episodeName: {
    fontSize: 14,
    color: 'white',
    fontWeight: '900',
  },
  episodeChannel: {
    fontSize: 8,
    color: 'white',
  },
});
