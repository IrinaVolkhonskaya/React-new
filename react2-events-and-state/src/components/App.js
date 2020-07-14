import React, { Component } from 'react';
import Counter from './Counter';
import StepChanger from './StepChanger';
import Toggle from './Toggle';
// import MessageUpdater from './MessageUpdater';

export default class App extends Component {
	state = {
        // message: Date.now(),
        counterStep: 0
	};

    handleChangeStep = () => {
        this.setState(prevState => ({
            counterStep: prevState.counterStep + 1
        }));
    };

	// updateMessage = () => {
	// 	this.setState({
	// 		message: Date.now(),
	// 	});
	// }; 

	render() {
        const { counterStep} = this.state;
		return (
			<div>
				<h1>{this.state.message}</h1>
				{/* <MessageUpdater changeMessage={this.updateMessage} /> //передаем метод updateMessage(сallback), как prop. Он вызываясь, меняет state у родителя. Это единственный вариант менять state родителя через ребенка.  */}
				<Toggle>
					<Counter step={counterStep} initialValue={10} />
				</Toggle>
                <StepChanger 
                currentStep={counterStep} 
                onUpdateStep={this.handleChangeStep}/>
			</div>
		);
	}
}
