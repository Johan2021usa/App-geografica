/**
 * IMPORTATION IN JAVASCRIPT VANILLA:
 * since this way is based on EMS modules, we use "import" and "from" keywords,
 * to do so. However, in JavaScript vanilla is mandatory adding the file's extension,
 * such as: .js or MJS in case we work with node.
 * 
*/
import { ConsultorioController } from './src/consultorio.controller.js';
import Consultorio from './src/consultorio.model.js';
import { ConsultorioView } from './src/consultorio.view.js';


document.addEventListener('DOMContentLoaded',()=>{
    const consultorioModel = new Consultorio();
    const consultorioView = new ConsultorioView();
    const controller = new ConsultorioController(consultorioModel, consultorioView);
});
    




