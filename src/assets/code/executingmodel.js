// Create an Execution object for the compiled model.
let execution = await compilation.createExecution();
// Setup the input tensors.
// They may contain data provided by user.
let inputTensor1 = new Float32Array(TENSOR_SIZE);
inputTensor1.fill(inputValue1);
let inputTensor2 = new Float32Array(TENSOR_SIZE);
inputTensor2.fill(inputValue2);
// Associate input tensors to model inputs.
execution.setInput(0, inputTensor1);
execution.setInput(1, inputTensor2);
// Associate output tensor to model output.
let outputTensor = new Float32Array(TENSOR_SIZE);
execution.setOutput(0, outputTensor);
await execution.startCompute();
// The computed result is now in outputTensor. 
