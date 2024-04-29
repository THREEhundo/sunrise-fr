import mongoose from 'mongoose'

const scheduleSchema = mongoose.Schema(
	{
		'start date': { type: Date, required: true },
		'start time': { type: Date, required: true },
		'end date': { type: Date, required: true },
		'end time': { type: Date, required: true },
		'time to shift daily': { type: Number, required: true }
	},
	{
		timestamps: true
	}
)

const Schedule = mongoose.model('Schedule', scheduleSchema)
