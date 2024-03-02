import React, {useEffect, useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ViewLayoutEvent,
} from 'react-native';
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
      } catch (error) {
        console.log(error);
      }
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
      <View style={{overflow: 'hidden', position: 'relative'}}>
        <BlurView
          overlayColor="transparent"
          blurType="dark"
          blurAmount={10}
          style={styleActions.Blur}
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styleActions.Wrapper}
          colors={['#ffffff1c', '#ffffff38', '#ffffff1c']}>
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
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}
