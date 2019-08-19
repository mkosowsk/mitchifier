import React, { Component } from 'react';
import { Form, Grid, TextArea } from 'semantic-ui-react';

class OutputTweet extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const mitchifiedTweet = this.props.mitchifiedTweet;
        const temperature = this.props.temperature;

        return (
            <Grid padded>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        <Form>
                            <TextArea placeholder='Mitchified tweet will go here' value={temperature} onChange={this.handleChange}/>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default OutputTweet;