import { getBuffer } from '../buffer'
import { ArrayBufferConverter } from '../buffer'

test('should load buffer', () => {
  const bufferConverter = new ArrayBufferConverter()
  bufferConverter.load(getBuffer())
  expect(bufferConverter.buffer).toEqual(getBuffer())
});

test('should string', () => {
  const bufferConverter = new ArrayBufferConverter()
  bufferConverter.load(getBuffer())
  expect(bufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
});
