import React, { useState, useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed';
import { Spinner } from '../../../features/spinner';
import ErrorAlert from '../../../features/errorAlert/errorAlert';
import { Skeleton } from '@chakra-ui/react';
import './tweets.scss';

const Tweets = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Skeleton className={`${loading ? 'skeleton' : ''}`} isLoaded={!loading}>
        <TweetEmbed
          className={`tweet ${loading ? 'show' : ''}`}
          id="1452017848822509573"
        />
      </Skeleton>
      <Skeleton className={`${loading ? 'skeleton' : ''}`} isLoaded={!loading}>
        <TweetEmbed
          className={`tweet ${loading ? 'show' : ''}`}
          id="1452066835927556099"
        />
      </Skeleton>
      <Skeleton className={`${loading ? 'skeleton' : ''}`} isLoaded={!loading}>
        <TweetEmbed
          className={`tweet ${loading ? 'show' : ''}`}
          id="1452000630755659777"
        />
      </Skeleton>
    </>
  );
};

export default Tweets;
