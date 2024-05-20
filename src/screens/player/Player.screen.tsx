import React, { useEffect } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  State,
  usePlaybackState,
} from 'react-native-track-player';
import {styleActions, styles} from './Player.style';
import {Icons} from '../../components/Icon';
import {COLORS} from '../../styles/theme-variables';
import {tracks} from '../../hooks/tracker-player';
import {Play, Pause} from 'phosphor-react-native';

export default function PlayerScreen() {
  const playerState = usePlaybackState();

  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        capabilities: [Capability.Play, Capability.Pause],
      });
      await TrackPlayer.add(tracks);
    } catch (e) {
      console.log(e);
    }
  };

  const setToLive = async () => {
    try {
      await TrackPlayer.reset();
      await TrackPlayer.add(tracks);
      await TrackPlayer.play();
    } catch (error) {
      console.log('Error from reset', error);
    }
  };

  useEffect(() => {
    setUpTrackPlayer();

    return () => {
      try {
        TrackPlayer.destroy();
      } catch (error) {}
    };
  }, []);

  return (
    <SafeAreaView style={styles.Wrapper}>
      <Image
        style={styles.Background}
        source={require('../../../assets/img/background/background.png')}
      />

      {/* Brand */}
      <Image
        style={styles.Logo}
        source={require('../../../assets/img/logo.png')}
      />

      <View style={styleActions.Wrapper}>
        <Text style={styleActions.Text}>
          103,1 FM 103,1 FM 103,1 FM 103,1 FM 103,1 FM 103,1 FM 103,1 FM
          <Text style={{color: COLORS.white}}> 103,1 FM </Text>
          FM 103,1 FM 103,1 FM 103,1 FM
        </Text>
        <ImageBackground
          source={require('../../../assets/img/background/actions.png')}
          resizeMode="cover"
          style={styleActions.Background}>
          <View style={styleActions.ButtonWrapper}>
            <TouchableOpacity
              style={styleActions.ButtonMainAction}
              onPress={() => {
                if (playerState.state == State.Playing) {
                  TrackPlayer.pause();
                } else {
                  setToLive();
                }
              }}>
              <Icons
                icon={playerState.state == State.Playing ? Pause : Play}
                color={COLORS.white}
                size={45}
                type={'fill'}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
