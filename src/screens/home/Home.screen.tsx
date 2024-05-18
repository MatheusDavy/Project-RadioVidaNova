import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {styles} from './Home.style';
import {Icons} from '../../components/Icon';
import {CaretCircleRight} from 'phosphor-react-native';

type Props = {
  navigation: any;
};

export default function HomeScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.Wrapper}>
      <Image
        style={styles.Background}
        source={require('../../../assets/img/background/bg-01.jpg')}
      />
      <View style={styles.TextWrapper}>
        <Text style={{...styles.Text, fontSize: 20, lineHeight: 30}}>
          Rádio
        </Text>
        <Text style={{...styles.Text, fontSize: 30, lineHeight: 43}}>
          VidaNova
        </Text>
      </View>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Player')}>
        <Text style={styles.ButtonText}>Iniciar</Text>
        <Icons style={styles.ButtonIcon} icon={CaretCircleRight} size={32} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
