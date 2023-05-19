
const personas = require('./personas.json')
const autos = require('./autos.json');


let concesionaria = {
    autos,
    personas : personas,
    buscarAuto: function(patente){
       return this.autos.find(auto => auto.patente === patente)
       /*for (let i = 0; i < autos.length; i++){
         if(autos[i].patente.includes(patente)){
           return autos[i]
        }
     }
     return null
  }
}
console.log(concesionaria.buscarAuto('APL123','AJ123'));  */

     

    },
   
   /* venderAutos :function (patente) {
     let auto = this.buscarAuto(patente);
     const autosModificados = this.autos.map(auto => {
      if(auto.patente === patente){
         auto.vendido == true
      }
      return auto
     })
     guardarCambios(autosModificados)
      return autosModificados.find(auto => auto.patente == patente)      
    },

    autosParaLaVenta : function (){
      return this.autos.filter(auto => auto.vendido === false)
    },
    autosNuevos : function(){
      return this.autosParaLaVenta().filter(auto => auto.km<100)
    },
    listaDeVentas :  function(){
      return this.autos.filter(auto => auto.vendido).map(auto => auto.precio)
    },
    totalVentas : function(){
      return this.listaDeVentas().reduce((acum,num) => acum + num,0)
    },
    puedeComprar : function(auto, persona){
    
   
   return auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas
   }
}
console.log(concesionaria.puedeComprar(autos[1],personas[0]));
*/
venderAuto : function(patente){
 let autoVendido = this.buscarAuto(patente)
 return autoVendido.vendido = true
},
autosParaLaVenta : function(){
  return autos.filter(autos => autos.vendido === false)

},
autosNuevos : function(){
   let autoNuevi = this.autosParaLaVenta();
   return autoNuevi.filter(auto => auto.km < 100);

},
listaDeVentas : function(){
   let autosVendidos = this.autos.filter(auto => auto.vendido)
   return autosVendidos.map(auto => auto.precio)
},
totalDeVentas : function(){
   
   return this.listaDeVentas().reduce((acum, num,) => acum + num,0
   )
},
puedeComprar : function (auto,persona) {
   return persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas) 
   //console.log(concesionaria.puedeComprar('APL125',personas[0]))
},
autosQuePuedeComprar : function(persona){
   let autosVenta = this.autosParaLaVenta()
      
    return autosVenta.filter(autosVenta => autosVenta.precio <=  persona.capacidadDePagoTotal && (autosVenta.precio / autosVenta.cuotas) <= persona.capacidadDePagoEnCuotas)

        //autosVenta.filter(personas => personas.capacidadDePagoTotal >= autos.precio && persona.capacidadDePagoEnCuotas >= (autos.precio / autos.cuotas))
   }
}
console.log(concesionaria.autosQuePuedeComprar(personas[0]))
