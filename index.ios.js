import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Container, Col, Row, Grid, Form, Item, Input, Label, ListItem, Switch, Header, Title, Content, Card, CardItem, Thumbnail, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class ReactNativeProject extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <Container>

        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>Header</Title>
            </Body>
            <Right />
        </Header>

        <Content>
            <Text>{this.state.text}</Text>

            <Button><Text>Click Me! </Text></Button>
            <Button light block><Text>Light</Text></Button>

            <Form>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>
                </Item>
                <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                </Item>
            </Form>

            <ListItem icon>
                <Left>
                    <Icon name="plane" />
                </Left>
                <Body>
                  <Text>Airplane Mode</Text>
                </Body>
                <Right>
                    <Switch valur={false} />
                </Right>
            </ListItem>

            <Card >
              <CardItem>
                  <Left>
                      <Body>
                          <Text>NativeBase</Text>
                          <Text note>GeekyAnts</Text>
                      </Body>
                  </Left>
                </CardItem>
                <CardItem content>
                    <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                    Are you telling me that you built a time machine... out of a DeLorean?!
                    Whoa. This is heavy.</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                  <Body>
                      <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>4 Comments</Text>
                      </Button>
                  </Body>
                  <Right>
                      <Text>11h ago</Text>
                  </Right>
              </CardItem>
            </Card>

            <Card >
              <CardItem>
                  <Left>
                      <Body>
                          <Text>NativeBase</Text>
                          <Text note>GeekyAnts</Text>
                      </Body>
                  </Left>
                </CardItem>
                <CardItem content>
                    <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                    Are you telling me that you built a time machine... out of a DeLorean?!
                    Whoa. This is heavy.</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                  <Body>
                      <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>4 Comments</Text>
                      </Button>
                  </Body>
                  <Right>
                      <Text>11h ago</Text>
                  </Right>
              </CardItem>
            </Card>

            <Card >
              <CardItem>
                  <Left>
                      <Body>
                          <Text>NativeBase</Text>
                          <Text note>GeekyAnts</Text>
                      </Body>
                  </Left>
                </CardItem>
                <CardItem content>
                    <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                    Are you telling me that you built a time machine... out of a DeLorean?!
                    Whoa. This is heavy.</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                  <Body>
                      <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>4 Comments</Text>
                      </Button>
                  </Body>
                  <Right>
                      <Text>11h ago</Text>
                  </Right>
              </CardItem>
            </Card>

        </Content>




        <Footer>
          <FooterTab>
              <Button badgeValue={2} badgeValueStyle={{ color: '#fff' }}>
                  <Icon name="apps" />
                  <Text>Apps</Text>
              </Button>
              <Button>
                  <Icon name="camera" />
                  <Text>Camera</Text>
              </Button>
              <Button active badgeValue={2} badgeValue={51} badgeColor="blue">
                  <Icon active name="navigate" />
                  <Text>Navigate</Text>
              </Button>
              <Button>
                  <Icon name="person" />
                  <Text>Contact</Text>
              </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    margin: 10,
  },
});


AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);
