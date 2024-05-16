const Opportunity = require('../../src/models/OpportunityModel');


  exports.create= async (request, response) => {
        const { clientId } = request.params
        try {
            if (
                !request.body.title ||
                !request.body.startDate ||
                !request.body.amount ||
                !request.body.startDate
            ) {
                return response.status(400).send({
                    message: 'Send all required fields: title, startDate, startDate, amount',
                });
            }
            const newOpportunity = {
                ...request.body,
                clientId: clientId, 
            };
    
            const opportunity = await Opportunity.create(newOpportunity);
        
            return response.status(201).send(opportunity);
        } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
        }
    },
    exports.getByClientId= async (request, response) => {
        const { clientId } = request.params
        try {
            const result = await Opportunity.find({clientId});
        
            return response.status(200).json({
              count: result.length,
              data: result,
            });
          } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
          }
    },
    exports.update= async (request, response) => {


        try {
            if (
                !request.body.title ||
                !request.body.startDate ||
                !request.body.amount ||
                !request.body.startDate
              ) {
                return response.status(400).send({
                  message: 'Send all required fields: title, startDate, startDate,amount',
                });
              }
        
            const { opportunityId } = request.params;
        
            const result = await Opportunity.findByIdAndUpdate(opportunityId, request.body);
        
            if (!result) {
              return response.status(404).json({ message: 'opportunity not found' });
            }
        
            return response.status(200).send({ message: 'opportunity updated successfully' });
          } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
          }
    },
    exports.delete= async (request, response) => {
        try {
            const { opportunityId } = request.params;
        
            const result = await Opportunity.findByIdAndDelete(opportunityId);
        
            if (!result) {
              return response.status(404).json({ message: 'opportunity not found' });
            }
        
            return response.status(200).send({ message: 'opportunity deleted successfully' });
          } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
          }
    }