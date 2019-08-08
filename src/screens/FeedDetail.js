import React from 'react';
import {observer} from 'mobx-react/native';
import { Container , Content , List, ListItem, Text, Button, Icon } from 'native-base';
import {ActivityIndicator} from 'react-native';
import { fetchFeed, selectEntry, removeFeed } from '../action';

@observer
export default class FeedDetail extends React.Component {

    static navigationOptions = props => ({
        title: props.screenProps.store.selectedFeed.title,
        headerRight: (
            <Button transparent 
                    onPress={ ()=>{
                        removeFeed(props.navigation.state.params.feedUrl);
                        props.navigation.goBack();
                }}
            >
                <Icon name="trash" />
            </Button>
        ),
    });

    constructor(props){
        super(props);
        this.state  = {
            loading: false,
            entry: null,
        }
    }

    componentDidMount(){
        this.setState({loading:true});
        fetchFeed(this.props.screenProps.store.selectedFeed.url)
            .then( (feed) => { 
                this.setState({loading:false});
                this.setState({entry: feed.entry});
            });
    }

    _handleEntryPress(entry){
        selectEntry(entry);
        this.props.navigation.navigate('EntryDetail');
    }

    render(){
        const {entry} = this.state;
        return (
            <Container>
                <Content>
                    {
                        this.state.loading && (
                            <ActivityIndicator color="red" style={{margin:20}} />
                        )
                    }
                    <List>
                        {entry && entry.map ((e, i) => (
                                <ListItem key={i} onPress={ this._handleEntryPress.bind(this, e)}>
                                    <Text>{e.title}</Text>
                                </ListItem>
                            ))
                        }
                    </List>
                </Content>
            </Container>

        );
    }
}