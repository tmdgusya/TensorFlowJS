import * as tf from '@tensorflow/tfjs';

//inner product

const one = tf.tensor1d([1,2,3])
const two = tf.tensor1d([4,5,6])
tf.dot(one, two).print()

//outer product

const p1 = tf.tensor1d([1,2,3])
const p2 = tf.tensor1d([4,5,6])
tf.outerProduct(p1, p2).print()

const test = tf.tensor2d([1,2,3,4,5,6,7,8], [2,4])
test.print()