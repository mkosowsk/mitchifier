import React, { Component } from 'react';
import { Button, Form, Grid, TextArea } from 'semantic-ui-react';

class InputTweet extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;

        return (
            <div>
                <Grid padded>
                    <Grid.Row centered>
                        <Grid.Column width={8}>
                            <Form>
                                <TextArea placeholder='Paste your dumb tweet here' value={temperature} onChange={this.handleChange} />
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Button
                    color='green'
                    content='Mitchify™'
                    icon='heart'
                // onClick={mitchifyText()}
                />
            </div>
        )
    }
}

export default InputTweet;