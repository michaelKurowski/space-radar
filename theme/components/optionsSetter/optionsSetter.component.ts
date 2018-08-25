import optionsSetterTemplate from './optionsSetter.html'
import OptionsSetterController from './optionsSetter.controller'
export default {
    template: optionsSetterTemplate,
    controller: OptionsSetterController,
    bindings: {
        submitCallback: '<'
    }
}