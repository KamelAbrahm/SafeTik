import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import PostSingle from '../../../components/post';

const FeedScreen = () => {
  const mediaRefs = useRef([]);
  const array = [1, 2, 3, 4, 5, 6];

  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach((element) => {
      console.log(
        `onViewItemsChanged for index ${element}, isViewable: ${element.isViewable}`
      );
      const cell = mediaRefs.current[element.key];

      if (cell) {
        console.log('onViewItemsChanged', element, element.isViewable);
        if (element.isViewable) {
          cell.play();
        } else {
          console.log(`Stopping video for item at index ${element}`);
          cell.stop();
        }
      }
    });
  });
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          { flex: 1, height: Dimensions.get('window').height - 54 },
          index % 2 == 0
            ? { backgroundColor: 'blue' }
            : { backgroundColor: 'red' },
        ]}
      >
        <PostSingle
          ref={(PostSingleRef) => {
            mediaRefs.current[item] = PostSingleRef;
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        windowSize={4}
        initialNumToRender={1}
        maxToRenderPerBatch={2}
        removeClippedSubviews
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100,
        }}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={(item) => item}
        decelerationRate={'normal'}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default FeedScreen;
