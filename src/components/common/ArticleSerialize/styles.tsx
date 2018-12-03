import {Dimensions} from 'react-native'
const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
const styles: any = {
  image1: {
    width: width+5, //380
    height: 228,
    marginLeft: -21.96,
    marginTop: -6
  },
  crop1:{
    width: width-30, //345
    height: 207,
    position: 'absolute',
    overflow: 'hidden',
    top: 0
  },
  container: {
    width: width-30, //345
    marginTop: 10,
    height: 207
  },
  buttonWithIcon: {
    height: width == 320 ? 20 : 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    marginLeft: -15
  },
  icon: {
    marginLeft: 20,
    marginRight: -10,
    marginTop: 0
  },
  text: {
    width: width-(375-279),
    height: 50,
    fontFamily: 'Hiragino Kaku Gothic Pro',
    fontSize: width == 320 ? 12 : 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 12,
    marginLeft: -50
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 26/2,
    marginLeft: 8,
    marginTop: -10
  },
  avatarName: {
    color: '#FFFFFF',
    marginTop:width == 320 ? -3 : -5,
    fontSize: width == 320 ? 10 : 12,
    marginLeft: 8,
    fontWeight: '600'
  },
  linear: {
    height: 90,
    width: width-30,
    position: 'absolute',
    bottom: 0,
    opacity: 0.8
  },
  bottomLine: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: width-(375-284)
  }
};
export default styles;
