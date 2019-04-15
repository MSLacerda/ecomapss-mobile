import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import { Container, Content, Text, View, Button, Icon } from 'native-base';

class WizardSteps extends Component {
    state = {
        steps: this.props.steps,
        currentStep: 1,
        teste: true,
        model: {}
    }

    setCurrerentActive = (index) => {
        let steps = [...this.state.steps].map((step, i) => {
            index == i ? step.active = true : step.active = false;
            return step;
        });
        this.setState({
            ...this.state,
            steps,
            currentStep: index + 1
        })
    }

    render() {
        return (
            <View style={styles.stepsContainer}>
                <View style={styles.steps}>
                    <View style={styles.progressContainer}></View>
                    <View style={[styles.progress, { width: this.props.progress + '%' || 0 }]}></View>
                    {
                        this.state.steps.map((step, index) => {
                            return (
                                <View key={index}>
                                    <Button style={[styles.step, step.active ? styles.stepActive : null]} onPress={() => { this.props.onStepChange(step); this.setCurrerentActive(index) }}>
                                        <Icon style={{ color: step.active ? '#FFF' : '#8ac248', fontSize: 18 }} name={step.iconName} />
                                    </Button>
                                    <Text style={{ textAlign: 'center', fontSize: 12, color: '#b1adad' }}>{step.label}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.stepsIndex}>
                    <Text style={{ color: '#b1adad' }}>{this.state.currentStep} de {this.state.steps.length}</Text>
                </View>
            </View>
        )
    }
}

export default class Wizard extends Component {

    state = {
        progress: 0,
        currentStep: this.props.steps[0]
    }

    setCurrentStep = (step) => {
        this.setState({
            ...this.state,
            currentStep: step
        })
    }

    render() {
        return (
            <Container>
                <WizardSteps steps={this.props.steps} onStepChange={this.setCurrentStep} progress={this.state.progress} />
                <View style={{ marginTop: 20, flex: 1, padding: 20 }}>
                    {this.state.currentStep.component}
                </View>
            </Container>
        )
    }
}



var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 65,
        backgroundColor: 'white',
    },
    labelInput: {
        color: '#673AB7',
    },
    formInput: {
        borderBottomWidth: 1.5,
        marginLeft: 20,
        borderColor: '#333',
    },
    input: {
        borderWidth: 0
    },
    container: {
        backgroundColor: '#FFF'
    },
    stepsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    stepsIndex: {
        position: 'absolute',
        top: 22,
        right: 0
    },
    steps: {
        height: 60,
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'center'
    },
    step: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 10,
        backgroundColor: "#FFF",
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 2,
        borderColor: '#8ac248',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepActive: {
        backgroundColor: '#8ac248',
        borderColor: '#FFF',
    },
    progressContainer: {
        width: '100%',
        height: 5,
        position: 'absolute',
        backgroundColor: '#CCC',
        borderRadius: 2,
        top: 32,
        left: 0
    },
    progress: {
        height: 5,
        position: 'absolute',
        backgroundColor: '#8ac248',
        borderRadius: 2,
        top: '60%',
        left: 0
    }
});