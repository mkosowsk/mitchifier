import React, { Component } from 'react';
import { Button, Form, Grid, TextArea } from 'semantic-ui-react';

class OutputTweet extends Component {
    constructor(props) {
        super(props);

        this.state = { copySuccess: '' }
    }

    copyToClipboard = (e) => {
        console.log(this);
        this.textArea.select();
        document.execCommand('copy');
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
                                <TextArea placeholder='Mitchified tweet will go here' value={mitchifiedTweet} ref={(textarea) => this.textArea = textarea} />
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Button
                    color='green'
                    content='Mitchify™'
                    onClick={this.copyToClipboard}>Copy
                </Button>
            </div>
        )
    }
}

export default OutputTweet;