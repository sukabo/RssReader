import React from 'react';
import { WebView } from 'react-native-webview';
import {observer} from 'mobx-react/native';


@observer
export default class EntryDetail extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const entry = this.props.screenProps.store.selectedEntry;
        //console.log('entry',entry);
        if (entry.link[0].$)
            var link = entry.link[0].$.href;
        else
            var link = entry.link[0];

        //console.log('url link',link);

        return <WebView source={ { url: link} } />        
    }

}