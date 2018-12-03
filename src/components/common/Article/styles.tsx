import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width: 156.65,
    height: 97,
    marginLeft: -21.96,
    marginTop: -6
  },
  crop:{
    width: 336.71,
    height: 85,
    position: 'absolute',
    overflow: 'hidden',
    top: 0
  },
  text: {
    width: width-(375-195),
    height: 41,
    marginLeft: 145,
    fontSize: width == 320 ? 10 : 14,
    fontWeight: '600',
    fontFamily: 'Hiragino Kaku Gothic Pro',
    lineHeight: 16,
    position: 'relative'
  },
  subText: {
    width: 81,
    height: 20,
    top: 2,
    marginLeft: 145,
    fontSize: width == 320 ? 11 : 12,
    fontWeight: '300',
    lineHeight: 20,
    position: 'relative'
  },
  container: {
    width: 345,
    marginTop: 10,
    height: 85,
    borderBottomWidth: 0
  }
});
export default styles;
