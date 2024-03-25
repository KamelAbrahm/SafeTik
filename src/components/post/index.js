import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { ResizeMode, Video } from 'expo-av';
import styles from './styles';
import PostSingleOverlay from './overlay';

const PostSingle = forwardRef((props, parentRef) => {
  const ref = useRef(null);

  useImperativeHandle(parentRef, () => ({
    play,
    unload,
    stop,
  }));

  useEffect(() => {
    return () => {
      unload();
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log('PostSingle unmounting, ref:', ref.current);
    };
  }, []);

  const play = async () => {
    console.log('Attempting to play video at ref');
    if (ref.current == null) {
      return;
    }
    const status = await ref.current.getStatusAsync();
    if (status?.isPlaying) {
      return;
    }
    try {
      await ref.current.playAsync();
    } catch (e) {
      console.log(e);
    }
  };

  const stop = async () => {
    console.log('attempting to stop video at ref');
    if (ref.current == null) {
      console.log(`Video ref is ${ref.current}, cannot stop`);
      return;
    }
    const status = await ref.current.getStatusAsync();
    if (!status?.isPlaying) {
      return;
    }
    try {
      await ref.current.stopAsync();
    } catch (e) {
      console.log(e);
    }
  };

  const unload = async () => {
    console.log('unload');
    if (ref.current == null) {
      return;
    }
    try {
      await ref.current.unloadAsync();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <PostSingleOverlay />
      <Video
        ref={ref}
        style={styles.container}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        isLooping
        source={{
          uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
        }}
      />
    </>
  );
});

export default PostSingle;
