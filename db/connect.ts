import mongoose from 'mongoose';

export const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB is connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};