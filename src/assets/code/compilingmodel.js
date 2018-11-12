// Create a Compilation object for the constructed model.
let compilation = await model.createCompilation();
// Set the preference for the compilation as PREFER_FAST_SINGLE_ANSWER.
compilation.setPreference(nn.PREFER_FAST_SINGLE_ANSWER); 
// Finish the compilation.
await compilation.finish(); 