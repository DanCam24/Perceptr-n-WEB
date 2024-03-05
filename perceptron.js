class Perceptron {
    constructor() {
        this.weights = [0, 0];
        this.bias = 0;
        this.iterations = 0;
    }

    train(data, labels) {
        const learningRate = 0.1;
        const epochs = 1000;

        for (let epoch = 0; epoch < epochs; epoch++) {
            for (let i = 0; i < data.length; i++) {
                const inputs = data[i];
                const target = labels[i];

                const prediction = this.predict(inputs);
                const error = target - prediction;

                for (let j = 0; j < this.weights.length; j++) {
                    this.weights[j] += learningRate * error * inputs[j];
                }
                this.bias += learningRate * error;

                this.iterations++;
            }
        }
    }

    predict(inputs) {
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return sum + this.bias > 0 ? 1 : 0;
    }
}

let perceptron;

function trainPerceptron() {
    perceptron = new Perceptron();
    const trainingData = [[0, 0], [0, 1], [1, 0], [1, 1]];
    const labels = [0, 0, 0, 1];
    perceptron.train(trainingData, labels);
    alert(`Perceptron trained successfully! Iterations: ${perceptron.iterations}`);
}

function predict() {
    if (!perceptron) {
        alert('Please train the perceptron first.');
        return;
    }

    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    const output = perceptron.predict([input1, input2]);
    document.getElementById('output').innerText = output;
}
