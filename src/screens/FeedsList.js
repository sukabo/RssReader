import React from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Button,
    Icon,
    Text
} from 'native-base';
import { observer } from 'mobx-react';
import { selectFeed } from '../action';

@observer
export default class FeedsList extends React.Component {

    // static navigationOptions = ({ navigation }) => {
    //     return {
    //       title: 'My Feeds',
    //       headerRight: (
    //         <Button transparent onPress={()=>{ navigation.push('AddFeed') }}>
    //             <Icon name="add" />
    //         </Button>
    //       ),
    //     };
    //   };
    static navigationOptions = props => ({
        title: 'My Feeds',
        headerRight: (
            <Button transparent onPress={()=>props.navigation.navigate('AddFeed')}>
                <Icon name="add" />
            </Button>
        ),
    });

    _handleFeedPress(feed){
        selectFeed(feed);
        this.props.navigation.navigate('FeedDetail',{feedUrl: feed.url});
    }

    render() {
        const {feeds} = this.props.screenProps.store;

        // console.log('feedlist feeds',feeds);

        // feeds && feeds.map ((f, i) => {
        //     console.log('feedlist f',f);
        // });

        return (
            <Container>
                <Content>
                    <List>
                        {
                                feeds && feeds.map ((f, i) => (

                                <ListItem key={i} onPress={this._handleFeedPress.bind(this,f)}>
                                    <Text>{f.title}</Text>
                                </ListItem>
                            ))
                        }
                    </List>
                </Content>
            </Container>
        );
    }
}