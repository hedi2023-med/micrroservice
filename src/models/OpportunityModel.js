const mongoose = require('mongoose');

const OpportunitySchema = mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ClientModel',
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    closeDate: {
      type: Date,
      required: true,
    },
    amount: {
        type: Number,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

const Opportunity = mongoose.model('Opportunity', OpportunitySchema);
module.exports = Opportunity;