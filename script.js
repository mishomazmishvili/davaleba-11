
function car(cMake, cModel, cYear) {
    return {
        make: cMake,
        model: cModel,
        year: cYear,
        getCarinfo : function() {
            document.write("Tesla" + this.make + "model S" + this.model + 2015 + this.cYear);
        },    
    };
         
}

function person(pName,pAge,pCars){
    return {
        name: pName,
        age: pAge,
        cars: pCars,
        personInfo: function() {
            document.write("Tom" + this.name + "25" + this.age + "Tesla" + this.cars);
        },
    };
}

const tesla = car("Tesla", "Model S", 2015);
tesla.getCarinfo();

const tom = person("Tom", 25, "Tesla");
tom.personInfo();
