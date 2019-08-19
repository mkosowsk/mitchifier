import React, { Component } from 'react';
import { Form, Grid, TextArea } from 'semantic-ui-react';

class InputTweet extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const originalTweet = this.props.originalTweet;

        return (
            <div>
                <Grid padded>
                    <Grid.Row centered>
                        <Grid.Column width={8}>
                            <Form>
                                <TextArea placeholder='Paste your dumb tweet here' value={originalTweet} onChange={this.handleChange} />
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default InputTweet;