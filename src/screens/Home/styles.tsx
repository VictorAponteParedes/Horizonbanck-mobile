import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#d9d8df',
    paddingVertical: 30,
  },
  cardContainer: {
    backgroundColor: colors.greenPrimary[300],
    paddingVertical: 75,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  cardText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  activitiesContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 20,
    // paddingVertical: 100,
  },
  scrollContentContainer: {
    paddingBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  activityImage: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    marginRight: 10,
  },
  activityInfo: {
    flex: 1,
  },
  amount: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  activityDescription: {
    fontSize: 12,
    color: '#555',
  },
  activityName: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default styles;
