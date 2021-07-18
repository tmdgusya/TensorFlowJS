import * as tf from '@tensorflow/tfjs';

const t1 = tf.scalar(1);
const t2 = tf.scalar(2);

console.log(`t1-id : ${t1.id}`)
console.log(`t2-id : ${t2.id}`)

const sumTensor = tf.add(t1, t2);

const mulTensor = tf.scalar(5);

sumTensor.div(mulTensor).print();