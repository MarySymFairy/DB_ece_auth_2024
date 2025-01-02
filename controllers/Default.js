'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.activated_neuronsActivationIDDELETE = function activated_neuronsActivationIDDELETE (req, res, next, activationID) {
  Default.activated_neuronsActivationIDDELETE(activationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.activated_neuronsActivationIDGET = function activated_neuronsActivationIDGET (req, res, next, activationID) {
  Default.activated_neuronsActivationIDGET(activationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.activated_neuronsActivationIDPUT = function activated_neuronsActivationIDPUT (req, res, next, body, activationID) {
  Default.activated_neuronsActivationIDPUT(body, activationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.activated_neuronsGET = function activated_neuronsGET (req, res, next) {
  Default.activated_neuronsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.activated_neuronsPOST = function activated_neuronsPOST (req, res, next, body) {
  Default.activated_neuronsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brain_regionsGET = function brain_regionsGET (req, res, next) {
  Default.brain_regionsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brain_regionsPOST = function brain_regionsPOST (req, res, next, body) {
  Default.brain_regionsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brain_regionsRegionIDDELETE = function brain_regionsRegionIDDELETE (req, res, next, regionID) {
  Default.brain_regionsRegionIDDELETE(regionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brain_regionsRegionIDGET = function brain_regionsRegionIDGET (req, res, next, regionID) {
  Default.brain_regionsRegionIDGET(regionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brain_regionsRegionIDPUT = function brain_regionsRegionIDPUT (req, res, next, body, regionID) {
  Default.brain_regionsRegionIDPUT(body, regionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emitted_neurotransmittersEmissionIDDELETE = function emitted_neurotransmittersEmissionIDDELETE (req, res, next, emissionID) {
  Default.emitted_neurotransmittersEmissionIDDELETE(emissionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emitted_neurotransmittersEmissionIDGET = function emitted_neurotransmittersEmissionIDGET (req, res, next, emissionID) {
  Default.emitted_neurotransmittersEmissionIDGET(emissionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emitted_neurotransmittersEmissionIDPUT = function emitted_neurotransmittersEmissionIDPUT (req, res, next, body, emissionID) {
  Default.emitted_neurotransmittersEmissionIDPUT(body, emissionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emitted_neurotransmittersGET = function emitted_neurotransmittersGET (req, res, next) {
  Default.emitted_neurotransmittersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emitted_neurotransmittersPOST = function emitted_neurotransmittersPOST (req, res, next, body) {
  Default.emitted_neurotransmittersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiment_resultsGET = function experiment_resultsGET (req, res, next) {
  Default.experiment_resultsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiment_resultsPOST = function experiment_resultsPOST (req, res, next, body) {
  Default.experiment_resultsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiment_resultsResultIDDELETE = function experiment_resultsResultIDDELETE (req, res, next, resultID) {
  Default.experiment_resultsResultIDDELETE(resultID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiment_resultsResultIDGET = function experiment_resultsResultIDGET (req, res, next, resultID) {
  Default.experiment_resultsResultIDGET(resultID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experiment_resultsResultIDPUT = function experiment_resultsResultIDPUT (req, res, next, body, resultID) {
  Default.experiment_resultsResultIDPUT(body, resultID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experimentsExperimentIDDELETE = function experimentsExperimentIDDELETE (req, res, next, experimentID) {
  Default.experimentsExperimentIDDELETE(experimentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experimentsExperimentIDGET = function experimentsExperimentIDGET (req, res, next, experimentID) {
  Default.experimentsExperimentIDGET(experimentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experimentsExperimentIDPUT = function experimentsExperimentIDPUT (req, res, next, body, experimentID) {
  Default.experimentsExperimentIDPUT(body, experimentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experimentsGET = function experimentsGET (req, res, next) {
  Default.experimentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.experimentsPOST = function experimentsPOST (req, res, next, body) {
  Default.experimentsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neuronsGET = function neuronsGET (req, res, next) {
  Default.neuronsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neuronsNeuronIDDELETE = function neuronsNeuronIDDELETE (req, res, next, neuronID) {
  Default.neuronsNeuronIDDELETE(neuronID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neuronsNeuronIDGET = function neuronsNeuronIDGET (req, res, next, neuronID) {
  Default.neuronsNeuronIDGET(neuronID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neuronsNeuronIDPUT = function neuronsNeuronIDPUT (req, res, next, body, neuronID) {
  Default.neuronsNeuronIDPUT(body, neuronID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neuronsPOST = function neuronsPOST (req, res, next, body) {
  Default.neuronsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neurotransmittersGET = function neurotransmittersGET (req, res, next) {
  Default.neurotransmittersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neurotransmittersNeurotransmitterIDDELETE = function neurotransmittersNeurotransmitterIDDELETE (req, res, next, neurotransmitterID) {
  Default.neurotransmittersNeurotransmitterIDDELETE(neurotransmitterID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neurotransmittersNeurotransmitterIDGET = function neurotransmittersNeurotransmitterIDGET (req, res, next, neurotransmitterID) {
  Default.neurotransmittersNeurotransmitterIDGET(neurotransmitterID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neurotransmittersNeurotransmitterIDPUT = function neurotransmittersNeurotransmitterIDPUT (req, res, next, body, neurotransmitterID) {
  Default.neurotransmittersNeurotransmitterIDPUT(body, neurotransmitterID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.neurotransmittersPOST = function neurotransmittersPOST (req, res, next, body) {
  Default.neurotransmittersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stimuliGET = function stimuliGET (req, res, next) {
  Default.stimuliGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stimuliPOST = function stimuliPOST (req, res, next, body) {
  Default.stimuliPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stimuliStimulusIDDELETE = function stimuliStimulusIDDELETE (req, res, next, stimulusID) {
  Default.stimuliStimulusIDDELETE(stimulusID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stimuliStimulusIDGET = function stimuliStimulusIDGET (req, res, next, stimulusID) {
  Default.stimuliStimulusIDGET(stimulusID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stimuliStimulusIDPUT = function stimuliStimulusIDPUT (req, res, next, body, stimulusID) {
  Default.stimuliStimulusIDPUT(body, stimulusID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subjectsGET = function subjectsGET (req, res, next) {
  Default.subjectsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subjectsPOST = function subjectsPOST (req, res, next, body) {
  Default.subjectsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subjectsSubjectIDDELETE = function subjectsSubjectIDDELETE (req, res, next, subjectID) {
  Default.subjectsSubjectIDDELETE(subjectID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subjectsSubjectIDGET = function subjectsSubjectIDGET (req, res, next, subjectID) {
  Default.subjectsSubjectIDGET(subjectID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subjectsSubjectIDPUT = function subjectsSubjectIDPUT (req, res, next, body, subjectID) {
  Default.subjectsSubjectIDPUT(body, subjectID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.synapsesGET = function synapsesGET (req, res, next) {
  Default.synapsesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.synapsesPOST = function synapsesPOST (req, res, next, body) {
  Default.synapsesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.synapsesSynapseIDDELETE = function synapsesSynapseIDDELETE (req, res, next, synapseID) {
  Default.synapsesSynapseIDDELETE(synapseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.synapsesSynapseIDGET = function synapsesSynapseIDGET (req, res, next, synapseID) {
  Default.synapsesSynapseIDGET(synapseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.synapsesSynapseIDPUT = function synapsesSynapseIDPUT (req, res, next, body, synapseID) {
  Default.synapsesSynapseIDPUT(body, synapseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
