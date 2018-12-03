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
  cateName: {
    width: 81,
    height: 20,
    top: -10,
    marginLeft: 145,
    fontSize: width == 320 ? 11 : 12,
    fontWeight: '600',
    color: '#945D60',
    lineHeight: 20,
    position: 'relative'
  },
  userName: {
    width: 81,
    height: 20,
    top: -10,
    fontSize: width == 320 ? 11 : 12,
    fontWeight: '300',
    lineHeight: 20,
    position: 'absolute',
    right: 5,
    textAlign: 'right'
  },
  container: {
    width: 345,
    marginTop: 10,
    height: 85,
    borderBottomWidth: 0
  },
  Rank1: {
    position: 'absolute',
    marginTop: 5,
    marginLeft: 5,
    width: 22,
    height: 22,
    borderRadius: 22/2,
    backgroundColor:'#D8C36C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Rank2: {
    position: 'absolute',
    marginTop: 5,
    marginLeft: 5,
    width: 22,
    height: 22,
    borderRadius: 22/2,
    backgroundColor:'#C2C3C6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Rank3: {
    position: 'absolute',
    marginTop: 5,
    marginLeft: 5,
    width: 22,
    height: 22,
    borderRadius: 22/2,
    backgroundColor:'#9D6A6F',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Rank: {
    position: 'absolute',
    marginTop: 5,
    marginLeft: 5,
    width: 22,
    height: 22,
    borderRadius: 22/2,
    backgroundColor:'#000000',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default styles;