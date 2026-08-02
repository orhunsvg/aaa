import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';
dotenv.config();

const handleTweet = () => {
    const twitterClient = new TwitterApi({
        appKey: process.env.CONSUMER_KEY ?? 'Ns58tugCs20R4WPxMI6WILbD3',
        appSecret: process.env.CONSUMER_SECRET ?? 'NcwC4ivSWPUOfR5UNg6btLSmlLTXgiTVRdhgyvaj5UB1vOmxHA',
        accessToken: process.env.ACCESS_TOKEN ?? '2084032128300318720-9BlUSw7vQDuYHZvHL7w6TvtqU9Mg9H',
        accessSecret: process.env.ACCESS_TOKEN_SECRET ?? '',
    });

    const tweetClient = twitterClient.readWrite;

    tweetClient.v2.tweet('Milliseconds since 01/01/1970: ' + Date.now());
};

handleTweet();
