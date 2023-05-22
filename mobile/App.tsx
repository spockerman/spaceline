import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import{BaiJamjuree_700Bold} from '@expo-google-fonts/bai-jamjuree'
import ImgBlur from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import NlwImg from './src/assets/nlw-spacetime-logo.svg'
import {  styled } from 'nativewind';
const StyleStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold, 
    BaiJamjuree_700Bold
  })
  if(!hasLoadedFonts){
    null
  }
 
  return (
    <ImageBackground source={ImgBlur} className='bg-gray-900 flex-1 items-center relative px-8 py-10' imageStyle={{position:'absolute', left: '-100%'}}>
      <StatusBar style="light" translucent/>
      <StyleStripes className='absolute left-2'/>
      <View className='flex-1 items-center justify-center gap-6' >
        <NlwImg/>
        <View className='space-y-2'>
          <Text className='font-title text-gray-50 text-2xl leading-tight text-center'>Sua cápsula do tempo</Text>
          <Text className='font-body text-gray-100 text-center text-base leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-2 hover:bg-green-600 transition-colors'>
        <Text className='text-black font-alt uppercase text-sm'>COMERÇAR A CADASTRAR</Text>
      </TouchableOpacity>
      </View>
      <Text className='text-sm text-center text-gray-200 leading-relaxed'>Feito com 💜 no NLW da Rocketseat</Text>
    </ImageBackground>
    
  );
}
