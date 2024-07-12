export class ConsultorioView{
    
    constructor(){
        this.gmpMap = document.getElementsByClassName("map-google")[0];
        this.form = document.querySelector("[data-form]");
    }

    displayAllConsultorios(consultorios){
        console.log(consultorios);
        let marker;
        consultorios.forEach(consultorio => {
            marker += 
                `<gmp-advanced-marker
                    position="${consultorio.coordenadaLat},${consultorio.coordenadaLong}"    
                    claseConsultorio="${consultorio.claseConsultorio}"
                    codigoConsultorio="${consultorio.codigoConsultiorio}"
                    codigoLocalidad="${consultorio.codigoLocalidad}"
                    codigoUPZ="${consultorio.codigoUPZ}"
                    coordenadaLat="${consultorio.coordenadaLat}"
                    coordenadaLong="${consultorio.coordenadaLong}"
                    correo="${consultorio.correo}"
                    direccion="${consultorio.direccion}"
                    id="${consultorio.id_ped}"
                    identificacion="${consultorio.identificacion}"
                    nombreConsultorio="${consultorio.nombreConsultorio}"
                    nombreServicio="${consultorio.nombreServicio}"
                    telefono="${consultorio.telefono}"
                    tipoInstitucion="${consultorio.tipoInstitucion}"
                ></gmp-advanced-marker>`;
        });
        this.gmpMap.innerHTML += marker;
    }

    markerSelector(callBack){
        // Iterate children / select elements and get ifs information from DOM
        for (const marker of this.gmpMap.children) {
            marker.addEventListener('click', element=>{
                element.preventDefault();
                
                /**
                 * INSTANCE METHODS:
                 * when we add additional attributes to an HTML element, we cannot directly retrieve their information,
                 * for instance, in the gmp-advanced-marker we are adding additional attributes such as...
                 * address, email based on the JSON of the response body.
                 * So that, to get its information we could use getAttribute(method) which is part of instance methods,
                 * otherwise, if we only use target.address the outcome will be undefined.
                 * Correct: ...target.getAttribute("address");
                 * Wrong: ...target.address; --> this only works with native properties like id, title and name. 
                 */
                const markerInfo = element.target
                
                /** 
                * CALLBACK:
                * When the event listener is triggered, the callback sends the value to the controller.
                * so that, view and controller are connected.
                */
                callBack(markerInfo);
            });
        }
    }

    fillOutForm(data){
        console.log(data);
        for(let chl of this.form.children){
            /** To fill out an input field we use setAttribute method, which receives an attribute name and a value. */
            if(chl.id==="identificacion"){chl.setAttribute("value", data.getAttribute("identificacion"))}
            if(chl.id==="codigo_consultorio"){chl.setAttribute("value", data.getAttribute("codigoConsultorio"))}
            if(chl.id==="nombre_consultorio"){chl.setAttribute("value", data.getAttribute("nombreConsultorio"))}
            if(chl.id==="nombre_servicio"){chl.setAttribute("value", data.getAttribute("nombreServicio"))}
            if(chl.id==="telefono"){chl.setAttribute("value", data.getAttribute("telefono"))}
            if(chl.id==="direccion"){chl.setAttribute("value", data.getAttribute("direccion"))}
            if(chl.id==="correo_electronico"){chl.setAttribute("value", data.getAttribute("correo"))}
            if(chl.id==="tipo_institucion"){chl.setAttribute("value", data.getAttribute("tipoInstitucion"))}
            if(chl.id==="clase_servicio"){chl.setAttribute("value", data.getAttribute("claseConsultorio"))}
            if(chl.id==="codigo_localidad"){chl.setAttribute("value", data.getAttribute("codigoLocalidad"))}
            if(chl.id==="codigo_upz"){chl.setAttribute("value", data.getAttribute("codigoUPZ"))}
            if(chl.id==="latitud"){chl.setAttribute("value", data.getAttribute("coordenadaLat"))}
            if(chl.id==="longitud"){chl.setAttribute("value", data.getAttribute("coordenadaLong"))}
        };
    }

}