import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  logoUrl: { type: String, required: true },
  imageUrl: { type: String, required: true },
  bgColor: { type: String, required: true },
  isVideo: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'Projects' }); 


export default models.Project || model('Project', ProjectSchema);