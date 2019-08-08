import store from './store';
import xml2js from 'react-native-xml2js';

export async function fetchFeed(url){
    
    const xml = await fetch(url).then( response => {return response.text()});
//    console.log("xml",xml);
    var json = '';
    const parser = new xml2js.Parser();
    parser.parseString(xml, function(err,result){
        //Extract the value from the data element
        json = result;
        console.log('result',result);
    });

    return {
        entry: (json.feed && json.feed.entry) || (json.rss && json.rss.channel[0].item),
        title: (json.feed && json.feed.title[0]) || (json.rss && json.rss.channel[0].title[0]),
        updated: (json.feed && json.feed.updated) || null
    }

}

export function selectFeed(feed){
    store.selectFeed(feed);
}

export function selectEntry(entry){
    store.selectEntry(entry);
}

export function addFeed(url, feed){
    store.addFeed(url, feed);
}

export function removeFeed(url){
    store.removeFeed(url);
}