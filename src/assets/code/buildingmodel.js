const TENSOR_SIZE = 200;
let operandIndex = 0;
// Create a Model object.
let model = await nn.createModel();
let float32TensorType = {
  type: nn.TENSOR_FLOAT32,
  dimensions: [TENSOR_SIZE]
};
let scalarInt32Type = {
  type: nn.INT32
};
// Add the operand for the NONE activation function, and set its value to FUSED_NONE.
let fusedActivationFuncNone = operandIndex++;
model.addOperand(scalarInt32Type);
model.setOperandValue(fusedActivationFuncNone, new Int32Array([nn.FUSED_NONE]));
// tensor0 is a constant tensor, set its value from an ArrayBuffer object.
// The ArrayBuffer object may contain the training data loaded before hand.
let tensor0 = operandIndex++;
model.addOperand(float32TensorType);
model.setOperandValue(tensor0, new Float32Array(arrayBuffer, 0, TENSOR_SIZE));
// tensor1 is one of the input tensors. Its value will be set before execution.
let tensor1 = operandIndex++;
model.addOperand(float32TensorType);
// tensor2 is another a constant tensor, set its value from same ArrayBuffer object.
let tensor2 = operandIndex++;
model.addOperand(float32TensorType);
model.setOperandValue(tensor2, new Float32Array(arrayBuffer, TENSOR_SIZE * Float32Array.BYTES_PER_ELEMENT, TENSOR_SIZE));
// tensor3 is another input tensor. Its value will be set before execution.
let tensor3 = operandIndex++;
model.addOperand(float32TensorType);

// intermediateOutput0 is the output of the first ADD operation.
let intermediateOutput0 = operandIndex++;
model.addOperand(float32TensorType);
// intermediateOutput1 is the output of the second ADD operation.
let intermediateOutput1 = operandIndex++;
model.addOperand(float32TensorType);
// multiplierOutput is the output of the MUL operation.
let multiplierOutput = operandIndex++;
model.addOperand(float32TensorType);
// Add the MUL operation. (Test operations reorder)
// Note that intermediateOutput0 and intermediateOutput1 are specified
// as inputs to the operation.
model.addOperation(nn.MUL, [intermediateOutput0, intermediateOutput1, fusedActivationFuncNone], [multiplierOutput]);
// Add the first ADD operation.
model.addOperation(nn.ADD, [tensor0, tensor1, fusedActivationFuncNone], [intermediateOutput0]);
// Add the second ADD operation.
model.addOperation(nn.ADD, [tensor2, tensor3, fusedActivationFuncNone], [intermediateOutput1]);
// Identify the input and output tensors to the model.
// Inputs: {tensor1, tensor3}
// Outputs: {multiplierOutput}
model.identifyInputsAndOutputs([tensor1, tensor3], [multiplierOutput]);
// Finish building the model.
await model.finish();