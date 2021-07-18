import * as tf from '@tensorflow/tfjs'

const one = tf.tensor2d([[1,2], [2,4]]);
const two = tf.tensor2d([[5], [6]]);

tf.mul(one, two).print();

tf.div(one, two).print();

tf.matMul(one, two).print();