import * as tf from '@tensorflow/tfjs';

tf.print(tf.tensor([1,2,3]));

const one = new Uint8Array(3);
one[0] = 1;
one[1] = 2;
one[2] = 3;
tf.print(tf.tensor(one));

const list = [1,2,3,4,5,6];
tf.print(tf.tensor(list, [2,3]));
tf.print(tf.tensor(list, [3,2]));
