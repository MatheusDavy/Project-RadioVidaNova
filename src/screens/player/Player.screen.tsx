import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import {styleActions, styles} from './Player.style';
import {Icons} from '../../components/Icon';
import {COLORS} from '../../styles/theme-variables';
import {formatSeconds, tracks} from '../../hooks/tracker-player';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';

export default function PlayerScreen() {
  const playerState = usePlaybackState();
  const {position} = useProgress();

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
        source={require('../../../assets/img/background/bg-01.jpg')}
      />

      {/* Brand */}
      <View style={styles.TextWrapper}>
        <Text style={{...styles.Text, fontSize: 20, lineHeight: 30}}>
          Rádio
        </Text>
        <Text style={{...styles.Text, fontSize: 30, lineHeight: 43}}>
          VidaNova
        </Text>
      </View>

      <View style={styleActions.Wrapper}>
        <Text style={{...styles.Text, fontSize: 30, lineHeight: 43}}>
          VidaNova
        </Text>
        <Text style={styleActions.Author}>Radio</Text>
        <View style={styleActions.WaveWrapper}>
          <Slider
            style={styleActions.WaveProgress}
            minimumValue={0}
            maximumValue={position}
            value={position}
            minimumTrackTintColor={'#ae100a'}
            maximumTrackTintColor={COLORS.white}
            thumbTintColor={'#ae100a'}
          />
          <View style={styleActions.WaveTimer}>
            <Text style={{color: COLORS.white}}>
              {formatSeconds(position)}
            </Text>
          </View>
        </View>
        <View style={styleActions.ButtonWrapper}>
          <TouchableOpacity
            style={styleActions.ButtonMainAction}
            onPress={() => {
              if (playerState.state == State.Playing) {
                TrackPlayer.pause();
              } else {
                TrackPlayer.play();
              }
            }}>
            <Icons
              name={
                playerState.state === State.Playing ? 'pause' : 'caretright'
              }
              color={COLORS.gray400}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styleActions.ButtonAction}
            onPress={() => setToLive()}>
            <Icons name="forward" size={25} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>

      <LinearGradient
        style={{
          width: '100%',
          height: 500,
          padding: 0,
          margin: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 1)']}
      />
    </SafeAreaView>
  );
}
