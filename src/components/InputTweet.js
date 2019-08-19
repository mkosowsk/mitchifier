import React, { Component } from 'react';
import { Form, Grid, TextArea } from 'semantic-ui-react';

class InputTweet extends Component {
    render() {
        return (
            <Grid padded>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        <Form>
                            <TextArea placeholder='Paste your dumb tweet here' />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default InputTweet;