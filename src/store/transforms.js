import { createTransform } from "redux-persist";

// Transform for `Set` serialization/deserialization
const setTransform = createTransform(
  // Transform state on its way to being serialized and persisted
  (inboundState) => ({
    ...inboundState,
    completed: Array.from(inboundState.completed) // Convert Set to Array for storage
  }),
  // Transform state on its way to being rehydrated
  (outboundState) => ({
    ...outboundState,
    completed: new Set(outboundState.completed) // Convert Array back to Set
  }),
  { whitelist: ["stepper"] } // Apply this transform only to the `stepper` slice
);

export default setTransform;
