import React, { Component } from 'react';
import { Button, Form, Grid, TextArea } from 'semantic-ui-react';
import copy from 'copy-to-clipboard';

class OutputTweet extends Component {
    constructor(props) {
        super(props);

        this.state = { copySuccess: '' }
    }

    copyToClipboard = (e) => {
        console.log(this);
        copy(this.props.mitchifiedTweet)
        this.setState({ copySuccess: 'Copied!' });
    };

    render() {
        const mitchifiedTweet = this.props.mitchifiedTweet;

        return (
            <div>
                <Grid padded>
                    <Grid.Row centered>
                        <Grid.Column width={8}>
                            <Form>
                                <TextArea placeholder='Mitchified tweet will go here' value={mitchifiedTweet} />
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Button
                    color='green'
                    content='Copy to Clipboard'
                    onClick={this.copyToClipboard}>
                </Button>
            </div>
        )
    }
}

export default OutputTweet;