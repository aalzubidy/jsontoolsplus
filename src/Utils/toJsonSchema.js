import GenerateSchema from 'generate-schema';

// Wrapper to provide the same simple API: toJsonSchema(obj) -> JSON Schema object
// Use title 'root' to avoid adding unpredictable titles in UI; caller can drop it.
export default function toJsonSchema(obj) {
  return GenerateSchema.json('root', obj);
}
