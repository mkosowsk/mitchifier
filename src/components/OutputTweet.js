import React, { Component } from 'react';
import { Form, Grid, TextArea } from 'semantic-ui-react';

class OutputTweet extends Component {
    render() {
        const mitchifiedTweet = this.props.mitchifiedTweet;

        return (
            <Grid padded>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        <Form>
                            <TextArea placeholder='Mitchified tweet will go here' value={mitchifiedTweet} />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default OutputTweet;