export class ConsultorioController{
    constructor(consultorioModel, consultorioView){
        this.model = consultorioModel;
        this.view = consultorioView;
        
        this.handleAllConsultorios();  
    }

    async handleAllConsultorios(){
        const data = await this.model.getAll();
        this.view.displayAllConsultorios(data);
        /** When an event listener is nested in a loop and this one is established...
         * in another module, we cannot call the method since it gets the value...
         * when the event is called, so it will be undefined because is not waiting until we execute...
         * the event listener.
         * For example, in this case I added an event listener to all markers of the map, so that, ...
         * a soon as one marked is clicked, the event listener will trigger a function that shows the ...
         * marker ID in the console log, however, if we try to get its value from another module (controller) ...
         * by executing the method, it will retrieve none ID because, we haven't executed the event listener yet.
         * 
         * To solve this behavior, we must use a callback function that returns the value when the event listener is trigger,
         * additionally, to understand the next line we need to know the bind method:
         * 
         * BIND METHOD:
         * This method, allows us to implement polymorphism, and it works along with "this" keyword.
         * "This" keyword allows us to modify the scope by defining a variable as global...
         * on in other words, we can use a variable that has been declared in a level above, for instance:
         * 
         * function sum(){
         *  const num1 = 1;
         *  const num2 = 2;
         *  const sumTotal = ()=>{
         *      return this.num1 + this.num2;
         *  }
         * }
         * 
         * However, in this case we pass the "handleMarkerSelector" function as parameter and also we use...
         * the .bind method to preserve "this" scope by sending the controller context including the same function.
         * 
         */
        this.view.markerSelector(this.handleMarkerSelector.bind(this));
    }

    async handleMarkerSelector(markerInfo){
        /** this function is called based on a callback, so that, if we want to use the context of the controller,
         * we must bind "this" keyword to refer to the controller when we call the markerSelector function.
         * 
         * Previously, I made a mistake because I bind the handleMarkerSelector.
         * wrong: gind(this.handleMarkerSelector)  => this works but if limits the scope to the function itself, ...
         * and if we want to use a function of the view, this will not be defined.
        */
        this.view.fillOutForm(markerInfo);
    }

}