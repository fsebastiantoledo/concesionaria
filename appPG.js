
const autos = require('./autos.json');


let concesionaria = {
    autos,
    buscarAuto: function(patente){
       return this.autos.find(auto => auto.patente === patente) 

    },
    venderAuto :function (patente) {
     let auto = this.buscarAuto(patente);
     auto && (auto.vendido = true)
      return auto || 'auto no encontrado'
     },
     autosParaLaVenta : function (){
        return this.autos.filter(auto => !auto.vendido)
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
console.log(concesionaria.venderAuto('JLJ117'))
