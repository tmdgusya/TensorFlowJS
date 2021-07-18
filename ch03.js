import * as tf from '@tensorflow/tfjs';

const one = tf.tensor1d([1,3,5]);
const two = tf.tensor1d([2,4,6]);

const scalar = tf.scalar(3);

one.add(two).print();

two.add(scalar).print();